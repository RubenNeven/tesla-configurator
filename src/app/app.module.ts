import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./shared/header/header.component";
import {StepOneComponent} from "./components/step-one/step-one.component";
import {AppRoutingModule} from "./app-routing.module";
import {CarService} from "./shared/services/car.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarImageComponent} from "./shared/car-image/car-image.component";
import {StepTwoComponent} from "./components/step-two/step-two.component";
import {StepThreeComponent} from "./components/step-three/step-three.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    CarImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
