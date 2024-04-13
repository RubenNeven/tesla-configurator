import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StepOneComponent} from "./step-one/step-one.component";
import {StepTwoComponent} from "./step-two/step-two.component";


export const routes: Routes = [
  {path: '', redirectTo: '/one', pathMatch: 'full'},
  {path: 'one', component: StepOneComponent},
  {path: 'two', component: StepTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
