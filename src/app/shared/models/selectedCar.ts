import {Color} from "./color";
import {Model} from "./model";
import {Config} from "./config";
import {Option} from "./option";

export class SelectedCar {
  selectedModel: Model | undefined;
  selectedColor: Color | undefined;
  carOption: Option | undefined;
  selectedConfig: Config | undefined;
  hasTowHitch: boolean | undefined;
  hasYoke: boolean | undefined;
}
