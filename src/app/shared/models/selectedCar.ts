import {Color} from "./color";
import {Model} from "./model";
import {Config} from "./config";
import {Option} from "./option";

export class SelectedCar {
  selectedModel: Model | undefined;
  selectedColor: Color | undefined;
  selectedOption: Option | undefined;
  selectedConfig: Config | undefined;
}
