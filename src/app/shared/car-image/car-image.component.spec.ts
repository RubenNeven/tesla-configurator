import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImageComponent } from './car-image.component';
import {AppModule} from "../../app.module";
import {CarService} from "../services/car.service";
import {SelectedCar} from "../models/selectedCar";
import {By} from "@angular/platform-browser";

describe('CarImageComponent', () => {
  let component: CarImageComponent;
  let fixture: ComponentFixture<CarImageComponent>;
  let carService: CarService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [CarImageComponent],
      providers: [CarService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarImageComponent);
    component = fixture.componentInstance;
    carService = TestBed.inject(CarService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img element with correct src', () => {
    const selectedCar = new SelectedCar();
    selectedCar.selectedModel = { code: 'model_code', description: 'Model Description', colors: [] };
    selectedCar.selectedColor = { code: 'color_code', description: 'Color Description' , price: 0};
    carService.selectedCar = selectedCar;
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement).toBeTruthy();

    const expectedSrc = `${'https://interstate21.com/tesla-app/images'}/model_code/color_code.jpg`;
    expect(imgElement.nativeElement.src).toEqual(expectedSrc);
  });

  it('should set alt attribute to selected color code', () => {
    const selectedCar = new SelectedCar();
    selectedCar.selectedModel = { code: 'model_code', description: 'Model Description', colors: [] };
    selectedCar.selectedColor = { code: 'color_code', description: 'Color Description', price: 0 };
    carService.selectedCar = selectedCar;
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.nativeElement.alt).toEqual('color_code');
  });

});
