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


  constructor(protected carService: CarService) {}

  ngOnInit(): void {
    if (this.carService.selectedCar.selectedModel !== undefined){
      this.carService.getOption(this.carService.selectedCar.selectedModel.code).subscribe((option: Option) => {
        this.carService.selectedCar.carOption = option;
      })
    }
  }

  onSelectedCarConfigChange(configCode: string){
    if (this.carService.selectedCar.carOption){
      this.carService.selectedCar.selectedConfig = this.carService.selectedCar.carOption.configs.find(config => config.id === parseInt(configCode));
    }
  }

  onCheckYokeChange(checkYoke: boolean){
    this.carService.selectedCar.hasYoke = checkYoke;
  }

  onCheckTowHitchChange(checkTowHitch: boolean){
    this.carService.selectedCar.hasTowHitch = checkTowHitch;
  }
}
