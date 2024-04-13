import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {CarService} from "../shared/services/car.service";

@Component({
  selector: 'app-car-image',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './car-image.component.html',
  styleUrl: './car-image.component.scss'
})
export class CarImageComponent {


  constructor(protected carService: CarService) {}
}
