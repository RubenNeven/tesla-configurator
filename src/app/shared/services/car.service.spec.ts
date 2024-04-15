import { TestBed } from '@angular/core/testing';


import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {CarService} from "./car.service";
import {Model} from "../models/model";
import {CAR_MODELS} from "../../mock-data/car-models";
import {Option} from "../models/option";
import {OPTIONS} from "../../mock-data/car-options";
import {Color} from "../models/color";

describe('CarService', () => {
  let service: CarService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CarService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all car models', () => {
    service.getCarModels().subscribe((models: Model[]) => {
      expect(models).toBeTruthy();
      expect(models.length).toBe(5);
    });
    const mockReq = testingController.expectOne('/models');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(CAR_MODELS));
  })

  it('should get car option', () => {
    service.getOption('S').subscribe((option: Option) => {
      expect(option).toBeTruthy();
      expect(option.yoke).toEqual(true);
      expect(option.towHitch).toEqual(false);
    });
    const mockReq = testingController.expectOne('/options/S');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(OPTIONS['S']);
  });

  it('isStepTwoEnabled should return true when selectedModel and selectedColor are set', () => {
    const selectedModel: Model = { code: 'M1', description: 'Model 1', colors: [] };
    const selectedColor: Color = { code: 'C1', description: 'Color 1' , price: 0};

    service.selectedCar.selectedModel = selectedModel;
    service.selectedCar.selectedColor = selectedColor;

    expect(service.isStepTwoEnabled()).toBeTrue();
  });

  it('isStepTwoEnabled should return false when selectedModel is not set', () => {
    const selectedColor: Color = { code: 'C1', description: 'Color 1' , price: 0};
    service.selectedCar.selectedColor = selectedColor;

    expect(service.isStepTwoEnabled()).toBeFalse();
  });

  it('isStepTwoEnabled should return false when selectedColor is not set', () => {
    const selectedModel: Model = { code: 'M1', description: 'Model 1', colors: [] };
    service.selectedCar.selectedModel = selectedModel;

    // Controleer of isStepTwoEnabled false retourneert
    expect(service.isStepTwoEnabled()).toBeFalse();
  });

  it('isStepThreeEnabled should return true when selectedConfig is set', () => {
    service.selectedCar.selectedConfig = { id: 1, description: 'Config 1', range: 0, speed: 0, price: 0};

    expect(service.isStepThreeEnabled()).toBeTrue();
  });

  it('isStepThreeEnabled should return false when selectedConfig is not set', () => {
    expect(service.isStepThreeEnabled()).toBeFalse();
  });


});
