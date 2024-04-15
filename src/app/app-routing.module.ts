import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StepOneComponent} from "./components/step-one/step-one.component";
import {StepTwoComponent} from "./components/step-two/step-two.component";
import {StepThreeComponent} from "./components/step-three/step-three.component";
import {StepGuard} from "./shared/guards/step.guard";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";


export const routes: Routes = [
  {path: '', redirectTo: '/model', pathMatch: 'full'},
  {path: 'model', component: StepOneComponent},
  {path: 'config', component: StepTwoComponent, canActivate: [StepGuard]},
  {path: 'summary', component: StepThreeComponent, canActivate: [StepGuard]},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
