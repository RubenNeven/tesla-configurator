import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CarService} from "../shared/services/car.service";
import {Option} from "../shared/models/option";
import {Config} from "../shared/models/config";

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss'
})
export class StepTwoComponent implements OnInit {

  option: Option | undefined;
  configs: Config[] | undefined;

  constructor(protected carService: CarService) {}

  ngOnInit(): void {
    console.log(this.carService.selectedCar);
  }

  onSelectedCarConfigChange(configCode: string){

  }
}
