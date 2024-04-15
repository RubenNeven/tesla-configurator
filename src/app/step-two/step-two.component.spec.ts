import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepTwoComponent} from './step-two.component';
import {AppModule} from "../app.module";
import {CarService} from "../shared/services/car.service";
import {of} from "rxjs";
import {Option} from "../shared/models/option";
import {SELECTED_CAR} from "../mock-data/selectedCar";

describe('StepTwoComponent', () => {
  let component: StepTwoComponent;
  let fixture: ComponentFixture<StepTwoComponent>;
  let carService: jasmine.SpyObj<CarService>;


  beforeEach(async () => {
    const carServiceSpy = jasmine.createSpyObj('CarService', ['getOption']);
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ StepTwoComponent ],
      providers: [{ provide: CarService, useValue: carServiceSpy }]
    })
    .compileComponents();

    carService = TestBed.inject(CarService) as jasmine.SpyObj<CarService>;

    carService.selectedCar = SELECTED_CAR;

    carService.getOption.and.returnValue(of({configs: [], yoke: true, towHitch: true }));

    fixture = TestBed.createComponent(StepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing html element', () => {
    const element = fixture.nativeElement.querySelector('h2');
    expect(element.textContent.trim()).toEqual('Step 2: Select your config and options');
  });

  it('should update selected configuration when valid config code is passed', () => {
    const configCode = '1';
    const mockOption: Option = {
      configs: [
        {id: 1, description: 'test 1', price: 1, range: 5, speed: 4},
        {id: 2, description: 'test 2', price: 2, range: 5, speed: 4},
      ],
      towHitch: true,
      yoke: false
    };
    carService.selectedCar.carOption = mockOption;

    component.onSelectedCarConfigChange(configCode);

    expect(carService.selectedCar.selectedConfig).toEqual({id: 1, description: 'test 1', price: 1, range: 5, speed: 4});
  });

  it('should update hasYoke property in selectedCar', () => {
    const initialHasYokeValue = carService.selectedCar.hasYoke;
    const newHasYokeValue = !initialHasYokeValue;

    component.onCheckYokeChange(newHasYokeValue);

    expect(carService.selectedCar.hasYoke).toEqual(newHasYokeValue);
  });

  it('should update hasTowHitch property in selectedCar', () => {
    const initialHasTowHitchValue = carService.selectedCar.hasTowHitch;
    const newHasTowHitchValue = !initialHasTowHitchValue;

    component.onCheckTowHitchChange(newHasTowHitchValue);

    expect(carService.selectedCar.hasTowHitch).toEqual(newHasTowHitchValue);
  });

});
