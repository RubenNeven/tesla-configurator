import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
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
  selectedConfigCode: string | undefined;
  private CAR_IMAGE_URL: string = 'https://interstate21.com/tesla-app/images';
  carImage: string = '';

  constructor(private http: HttpClient) {
  }

  getCarModels(): Observable<Model[]> {
    return this.http.get<Model[]>(`/models`);
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
    this.carImage = `${this.CAR_IMAGE_URL}/${this.selectedModelCode}/${this.selectedColorCode}.jpg`;
  }



  isStepTwoEnabled(): boolean {
    return this.selectedModelCode !== undefined && this.selectedColorCode !== undefined;
  }


}
