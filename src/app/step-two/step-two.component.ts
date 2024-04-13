import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CarService} from "../shared/services/car.service";

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss'
})
export class StepTwoComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private carService: CarService) {
  }

  ngOnInit(): void {

  }
}
