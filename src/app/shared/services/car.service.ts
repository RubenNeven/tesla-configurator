import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Model} from "../models/model";
import {Color} from "../models/color";
import {Option} from "../models/option";
import {Config} from "../models/config";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  selectedModelCode: string | undefined;
  selectedColorCode: string | undefined;
  selectedConfigCode: number | undefined;
  selectedConfig: Config | undefined;
  private CAR_IMAGE_URL: string = 'https://interstate21.com/tesla-app/images';
  carImage: string = '';

  constructor(private http: HttpClient) {
  }

  getCarModels(): Observable<Model[]> {
    return this.http.get<Model[]>(`/models`);
  }

  getOption(modelCode: string): Observable<Option>{
    return this.http.get<Option>('/options/' + modelCode)
  }

  getModelByCode(modelCode: string): Observable<Model | undefined>{
    return this.getCarModels().pipe(
      map((models: Model[]) => {
        return models.find(model => model.code === modelCode);
      })
    );
  }

  getCarColors(modelCode: string): Observable<Color[]> {
    return this.getCarModels().pipe(
      map((models: Model[]) => {
        for (let model of models) {
          if (modelCode === model.code) {
            return model.colors;
          }
        }
        return [];
      })
    );
  }

  setCarImage() {
    if (this.selectedModelCode === "-1"){
      this.carImage = '';
    } else {
      this.carImage = `${this.CAR_IMAGE_URL}/${this.selectedModelCode}/${this.selectedColorCode}.jpg`;
    }
  }

  isStepTwoEnabled(): boolean {
    return this.selectedModelCode !== undefined && this.selectedModelCode !== "-1" && this.selectedColorCode !== undefined;
  }

  isStepThreeEnabled(): boolean {
    return this.selectedConfig !== undefined;
  }
}
