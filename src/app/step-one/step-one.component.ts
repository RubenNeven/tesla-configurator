import {Component, OnInit} from '@angular/core';
import {CarService} from "../shared/services/car.service";
import {Model} from "../shared/models/model";
import {Color} from "../shared/models/color";

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss'
})
export class StepOneComponent implements OnInit {

  models: Model[] = [];
  colors: Color[] = [];

  constructor(protected carService: CarService) {}

  onModelChange(modelCode: string) {
    this.carService.selectedModelCode = modelCode;
    this.carService.getCarColors(this.carService.selectedModelCode).subscribe((colors: Color[]) => {
      this.colors = colors;
      if (colors.length > 0) {
        this.carService.selectedColorCode = colors[0].code;
      }
      this.carService.setCarImage();

    });
    if (this.carService.selectedConfigCode){
      this.carService.selectedConfigCode = undefined;
      this.carService.selectedConfig = undefined;
    }
  }

  onColorChange(colorCode: string){
    this.carService.selectedColorCode = colorCode;
    this.carService.setCarImage();
  }

  ngOnInit(): void {
    if (this.carService.selectedModelCode === undefined){
      this.carService.selectedModelCode = "-1"
    }
    if (this.carService.selectedModelCode){
      this.carService.getCarColors(this.carService.selectedModelCode).subscribe((colors: Color[]) => {
        this.colors = colors;
      });
    }
    this.carService.getCarModels().subscribe((models: Model[]) => {
      this.models = models;
    });
  }
}

