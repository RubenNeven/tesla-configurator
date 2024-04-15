import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepTwoComponent} from './step-two.component';
import {AppModule} from "../../app.module";
import {CarService} from "../../shared/services/car.service";
import {of} from "rxjs";
import {Option} from "../../shared/models/option";
import {SELECTED_CAR} from "../../mock-data/selectedCar";
import {OPTIONS} from "../../mock-data/car-options";

describe('StepTwoComponent', () => {
  let component: StepTwoComponent;
  let fixture: ComponentFixture<StepTwoComponent>;
  let carService: jasmine.SpyObj<CarService>;
  const configCode = '1';
  const mockOption: Option = OPTIONS.S;

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

    carService.selectedCar.carOption = mockOption;

    component.onSelectedCarConfigChange(configCode);

    expect(carService.selectedCar.selectedConfig).toEqual({id: 1, description: 'Dual Motor All-Wheel Drive', price: 74990, range: 405, speed: 149});
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
