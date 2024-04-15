import {CanActivate, CanActivateFn, Router} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import {CarService} from "../services/car.service";

@Injectable({
  providedIn: 'root'
})
export class StepGuard implements CanActivate {

  constructor(private carService: CarService, private router: Router) {}

  canActivate(): boolean {
    if (this.carService.isStepTwoEnabled() || this.carService.isStepThreeEnabled()) {
      return true;
    } else {
      this.router.navigate(['/model']);
      return false;
    }
  }
}
