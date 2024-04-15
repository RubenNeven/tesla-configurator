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

  constructor(protected carService: CarService) {}

  ngOnInit(): void {
    if (this.carService.selectedCar) {
      this.totalCost += this.carService.selectedCar.selectedConfig?.price || 0;
      this.totalCost += this.carService.selectedCar.selectedColor?.price || 0;
      this.totalCost += this.carService.selectedCar.hasYoke ? 1000 : 0;
      this.totalCost += this.carService.selectedCar.hasTowHitch ? 1000 : 0;
    }
  }
}
