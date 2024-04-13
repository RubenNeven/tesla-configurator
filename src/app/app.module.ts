import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {StepOneComponent} from "./step-one/step-one.component";
import {AppRoutingModule} from "./app-routing.module";
import {CarService} from "./shared/services/car.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarImageComponent} from "./car-image/car-image.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StepOneComponent
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
