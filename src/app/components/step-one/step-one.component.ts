import {Component, OnInit} from '@angular/core';
import {CarService} from "../../shared/services/car.service";
import {Model} from "../../shared/models/model";
import {Color} from "../../shared/models/color";

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss'
})
export class StepOneComponent implements OnInit {

  models: Model[] = [];
  colors: Color[] = [];

  constructor(protected carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCarModels().subscribe((models: Model[]) => {
      this.models = models;
      this.colors = this.getCarModelColors(this.carService.selectedCar.selectedModel?.code);
    });
  }

  onModelChange(modelCode: string): void {
    this.carService.selectedCar.selectedModel = this.models.find(model => model.code === modelCode);
    this.colors = this.getCarModelColors(this.carService.selectedCar.selectedModel?.code);
    if (this.colors.length > 0) {
      this.carService.selectedCar.selectedColor = this.colors[0];
    }
    this.carService.selectedCar.selectedConfig = undefined;
    this.carService.selectedCar.hasTowHitch = undefined;
    this.carService.selectedCar.hasYoke = undefined;
  }

  onColorChange(colorCode: string): void{
    this.carService.selectedCar.selectedColor = this.colors.find(color => color.code === colorCode);
  }

  getCarModelColors(modelCode: string | undefined): Color[]{
    this.carService.selectedCar.selectedModel = this.models.find(model => model.code === modelCode);
    if (this.carService.selectedCar.selectedModel) {
      this.colors = this.carService.selectedCar.selectedModel.colors;
    }
    return this.colors;
  }
}

