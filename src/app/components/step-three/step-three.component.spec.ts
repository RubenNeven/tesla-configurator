import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepThreeComponent} from './step-three.component';
import {AppModule} from "../../app.module";
import {CarService} from "../../shared/services/car.service";
import {StepOneComponent} from "../step-one/step-one.component";
import {SELECTED_CAR} from "../../mock-data/selectedCar";

describe('StepThreeComponent', () => {
  let component: StepThreeComponent;
  let fixture: ComponentFixture<StepThreeComponent>;
  let carService: jasmine.SpyObj<CarService>;

  beforeEach(async () => {
    carService = jasmine.createSpyObj('CarService', ['selectedCar']);
    carService.selectedCar = SELECTED_CAR;

    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [StepOneComponent],
      providers: [{provide: CarService, useValue: carService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    carService.selectedCar = SELECTED_CAR;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing html element', () => {
    const element = fixture.nativeElement.querySelector('h2');
    expect(element.textContent.trim()).toEqual('Step 3: Summary');
  });

  it('should calculate total cost correctly when selected car has config, color, yoke, and tow hitch', () => {
    fixture.detectChanges();
    const expectedTotalCost = 5000 + 5000 + 1000 + 0;
    expect(component.totalCost).toEqual(expectedTotalCost);
  });
});
