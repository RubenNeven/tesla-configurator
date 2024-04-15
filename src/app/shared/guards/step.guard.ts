import {CanActivate, CanActivateFn, Router} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import {CarService} from "../services/car.service";

@Injectable({
  providedIn: 'root'
})
export class StepGuard implements CanActivate {

  constructor(private carService: CarService, private router: Router) {}

  canActivate(): boolean {
    const isStepTwoEnabled = this.carService.isStepTwoEnabled();

    if (!isStepTwoEnabled) {
      this.router.navigateByUrl('/one');
      return false;
    } else {
      return true;
    }
  }
}
