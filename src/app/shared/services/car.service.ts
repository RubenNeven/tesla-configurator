import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Model} from "../models/model";
import {Color} from "../models/color";
import {Option} from "../models/option";
import {Config} from "../models/config";
import {SelectedCar} from "../models/selectedCar";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  selectedCar: SelectedCar = new SelectedCar();

  constructor(private http: HttpClient) {}

  getCarModels(): Observable<Model[]> {
    return this.http.get<Model[]>(`/models`);
  }

  getOption(modelCode: string): Observable<Option> {
    return this.http.get<Option>(`/options/` + modelCode);
  }

  isStepTwoEnabled(): boolean {
    return this.selectedCar.selectedModel?.code !== undefined && this.selectedCar.selectedColor?.code !== undefined;
  }

  isStepThreeEnabled(): boolean {
    return this.selectedCar.selectedConfig?.id !== undefined;
  }

}
