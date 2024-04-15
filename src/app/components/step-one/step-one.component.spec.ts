import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepOneComponent} from './step-one.component';
import {AppModule} from "../../app.module";
import {CarService} from "../../shared/services/car.service";
import {of} from "rxjs";
import {CAR_MODELS} from "../../mock-data/car-models";
import {SELECTED_CAR} from "../../mock-data/selectedCar";

describe('StepOneComponent', () => {
  let component: StepOneComponent;
  let fixture: ComponentFixture<StepOneComponent>;
  let carService: jasmine.SpyObj<CarService>;

  const mockModelCode = 'S';
  const mockModel = CAR_MODELS[0];
  const mockColors = CAR_MODELS[0].colors;
  const mockColorCode = CAR_MODELS[0].colors[0].code;
  const mockSelectedColor = mockColors[0];

  beforeEach(async () => {
    const carServiceSpy = jasmine.createSpyObj('CarService', ['getCarModels']);

    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [StepOneComponent],
      providers: [{provide: CarService, useValue: carServiceSpy}]
    })
      .compileComponents();

    carService = TestBed.inject(CarService) as jasmine.SpyObj<CarService>;

    carService.selectedCar = SELECTED_CAR;

    carService.getCarModels.and.returnValue(of(CAR_MODELS));


    fixture = TestBed.createComponent(StepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing html element', () => {
    const element = fixture.nativeElement.querySelector('.form-label');
    expect(element.textContent).toContain('Model');
  });

  it('should call getCarModels on initialization', () => {
    const mockModels = CAR_MODELS;
    carService.getCarModels.and.returnValue(of(mockModels));

    component.ngOnInit();

    expect(carService.getCarModels).toHaveBeenCalled();
    expect(component.models).toEqual(mockModels);
  });


  it('should update selected model and color, reset selected config, tow hitch, and yoke', () => {

    spyOn(component, 'getCarModelColors').and.returnValue(mockColors);

    component.onModelChange(mockModelCode);

    expect(carService.selectedCar.selectedModel).toEqual(mockModel);
    expect(component.colors).toEqual(mockColors);
    expect(carService.selectedCar.selectedColor).toEqual(mockSelectedColor);
  });

  it('should update selected color', () => {

    component.onColorChange(mockColorCode);

    expect(carService.selectedCar.selectedColor).toEqual(mockSelectedColor);
  });

  it('should return colors for selected model', () => {
    component.models = [mockModel];

    const result = component.getCarModelColors(mockModelCode);

    expect(result).toEqual(mockModel.colors);
  });
});
