import { Routes } from '@angular/router';
import {StepOneComponent} from "./components/step-one/step-one.component";
import {StepTwoComponent} from "./components/step-two/step-two.component";

export const routes: Routes = [
  {path: '', component: StepOneComponent},
  {path: 'two', component: StepTwoComponent},
];
