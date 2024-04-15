import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StepOneComponent} from "./step-one/step-one.component";
import {StepTwoComponent} from "./step-two/step-two.component";
import {StepThreeComponent} from "./step-three/step-three.component";


export const routes: Routes = [
  {path: '', redirectTo: '/model', pathMatch: 'full'},
  {path: 'model', component: StepOneComponent},
  {path: 'config', component: StepTwoComponent},
  {path: 'three', component: StepThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
