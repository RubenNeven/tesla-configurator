import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./shared/header/header.component";
import {StepOneComponent} from "./step-one/step-one.component";
import {AppRoutingModule} from "./app-routing.module";
import {CarService} from "./shared/services/car.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarImageComponent} from "./shared/car-image/car-image.component";
import {StepTwoComponent} from "./step-two/step-two.component";
import {StepThreeComponent} from "./step-three/step-three.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CarImageComponent
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
