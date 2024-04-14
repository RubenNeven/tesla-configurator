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
    console.log(this.carService.selectedModelCode);
    if (this.carService.selectedModelCode){
      this.carService.getOption(this.carService.selectedModelCode).subscribe( (option: Option) => {
        this.option = option;
        console.log(this.option)
        this.configs = this.option.configs;
      })
    }
  }

  onSelectedCarConfigChange(configCode: string){
    this.carService.selectedConfigCode = parseInt(configCode);
    if (this.configs){
      for (let config of this.configs) {
        if (this.carService.selectedConfigCode === config.id){
          this.carService.selectedConfig = config;
        }
      }
    }
  }
}
