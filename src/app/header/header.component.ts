import {Component} from '@angular/core';
import {CarService} from "../shared/services/car.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(protected carService: CarService) {}



}
