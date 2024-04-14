import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {CarService} from "../services/car.service";

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

  CAR_IMAGE_URL: string = 'https://interstate21.com/tesla-app/images';

  constructor(protected carService: CarService) {}


}
