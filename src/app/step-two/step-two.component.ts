import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {CarImageComponent} from "../car-image/car-image.component";
import {CarService} from "../shared/services/car.service";
import {Option} from "../shared/models/option";
import {Config} from "../shared/models/config";
import {config} from "rxjs";

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    CarImageComponent,
    CurrencyPipe
  ],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss'
})
export class StepTwoComponent implements OnInit {
  configForm: FormGroup;
  option: Option | undefined;
  config: Config | undefined;
  selectedConfigId: number | undefined;

  constructor(private formBuilder: FormBuilder, private carService: CarService) {
    this.configForm = this.formBuilder.group({
      config: [''],
      towHitch: null,
      yoke: null
    });
  }

  ngOnInit(): void {
    this.carService.getOptions().subscribe((option: Option) => {
      this.option = option;
    });
    if (this.carService.selectedConfig !== undefined){
      this.configForm.patchValue({
        config: this.carService.selectedConfig
      });

      this.carService.getOptions().subscribe( (option: Option) => {
        for (let config of option.configs){
          if (config.id == this.carService.selectedConfig){
            this.config = config;
          }
        }
      })
    }
  }

  onConfigChange() {
   this.selectedConfigId = this.configForm.get('config')?.value;
    console.log(this.selectedConfigId)
    if (this.selectedConfigId !== undefined){
      this.carService.setSelectedConfig(this.selectedConfigId);
      this.carService.getOptions().subscribe( (option: Option) => {
        for (let config of option.configs){
          if (config.id == this.carService.selectedConfig){
            this.config = config;
          }
        }
      })
    } else {
      this.config = undefined;
      this.carService.setSelectedConfig(0);
    }
  }

/*  getConfigValues(configDescription: string){
    if (this.option !== undefined){
      for (let config of this.option.configs){
        if (config.description === configDescription){
          this.config = config;
        }
      }
    }
  }*/
}
