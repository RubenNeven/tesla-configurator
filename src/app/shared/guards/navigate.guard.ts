import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {CarService} from "../services/car.service";


@Injectable({
  providedIn: 'root'
})
export class NavigateGuard implements CanActivate {

  constructor(private carService: CarService, private router: Router) {}
  canActivate(): boolean {
    if (!this.carService.isStepTwoEnabled()) {
      this.router.navigateByUrl('/one');
      return false;
    }
    return true;
  }

}
