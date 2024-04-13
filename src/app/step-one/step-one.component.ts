import {Component, OnInit} from '@angular/core';
import {CarService} from "../shared/services/car.service";
import {Model} from "../shared/models/model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Color} from "../shared/models/color";

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss'
})
export class StepOneComponent implements OnInit {

  models: Model[] = [];
  colors: Color[] = [];
  modelForm: FormGroup;
  selectedModelCode: string | undefined;
  selectedColorCode: string | undefined;

  constructor(protected carService: CarService, private formBuilder: FormBuilder) {
    this.modelForm = this.formBuilder.group({
      model: ['', Validators.required],
      color: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.carService.getCarModels().subscribe((models: Model[]) => {
      this.models = models;
    });

    if (this.carService.selectedModelCode !== undefined){
      this.modelForm.patchValue({
        model: this.carService.selectedModelCode
      });
     this.carService.getCarColors(this.carService.selectedModelCode).subscribe( (colors: Color[]) => {
       this.colors = colors;
     });
    }

    if (this.carService.selectedColorCode !== undefined){
      this.modelForm.patchValue({
        color: this.carService.selectedColorCode
      });
    }
  }

  onModelChange() {
    this.selectedModelCode = this.modelForm.get('model')?.value;
    if (this.selectedModelCode !== undefined){
      this.carService.setSelectedModelCode(this.selectedModelCode);
    }

    if (this.carService.selectedModelCode === ''){
      this.carService.carImage = '';
    }
    if (this.carService.selectedModelCode !== undefined){
      for (let model of this.models) {
        if (this.carService.selectedModelCode === model.code){
          this.colors = model.colors;
          if (this.colors.length > 0) {
            this.modelForm.get('color')?.setValue(this.colors[0].code);
            this.onColorChange();
          }
        }
      }
    }
    this.updateStepTwoStatus();
  }

  onColorChange() {
    this.selectedColorCode = this.modelForm.get('color')?.value;
    if (this.selectedColorCode !== undefined){
      this.carService.setSelectedColorCode(this.selectedColorCode);
    }

    if (this.carService.selectedModelCode !== undefined && this.carService.selectedColorCode !== undefined){
      this.carService.setCarImage()
    }
    this.updateStepTwoStatus();
  }
  updateStepTwoStatus() {
    this.carService.isStepTwoEnabled();
  }
}

