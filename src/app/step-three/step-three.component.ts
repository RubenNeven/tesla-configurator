import {Component, OnInit} from '@angular/core';
import {CarService} from "../shared/services/car.service";
import {Model} from "../shared/models/model";
import {Option} from "../shared/models/option";

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.scss'
})
export class StepThreeComponent implements OnInit{

  model: Model | undefined;

  constructor(protected carService: CarService) {
  }

  ngOnInit(): void {

  }
}
