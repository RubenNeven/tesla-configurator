import {Component, OnInit} from '@angular/core';
import {CarService} from "../shared/services/car.service";
import {Model} from "../shared/models/model";
import {Option} from "../shared/models/option";

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.scss'
})
export class StepThreeComponent implements OnInit {

  extraOptionPrice: number = 1000;
  totalCost: number = 0;

  constructor(protected carService: CarService) {

  }

  ngOnInit(): void {
    if (this.carService.selectedCar.selectedConfig){
      this.totalCost += this.carService.selectedCar.selectedConfig.price
    }
    if (this.carService.selectedCar.selectedColor){
      this.totalCost += this.carService.selectedCar.selectedColor.price
    }
    if (this.carService.selectedCar.hasYoke){
      this.totalCost += 1000;
    }
    if (this.carService.selectedCar.hasTowHitch){
      this.totalCost += 1000;
    }
  }

}
