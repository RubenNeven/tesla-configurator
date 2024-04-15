import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StepOneComponent} from "./step-one/step-one.component";
import {StepTwoComponent} from "./step-two/step-two.component";
import {StepThreeComponent} from "./step-three/step-three.component";
import {NavigateGuard} from "./shared/guards/navigate.guard";



export const routes: Routes = [
  {path: '', redirectTo: '/one', pathMatch: 'full'},
  {path: 'one', component: StepOneComponent},
  {path: 'two', component: StepTwoComponent, canActivate: [NavigateGuard]},
  {path: 'three', component: StepThreeComponent, canActivate: [NavigateGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
