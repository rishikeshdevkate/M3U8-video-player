import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthServiceService } from "../auth-service/auth-service.service";
import { LocalStorageService } from "angular-web-storage";
@Injectable({
  providedIn: "root"
})
export class AdminActiveService implements CanActivate {
  constructor(
    private router: Router,
    private userAuthService: AuthServiceService,
    private storage: LocalStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.userAuthService.getToken()) {
      if (
        this.storage.get("userDetails") !== undefined &&
        this.storage.get("userDetails") !== null
      ) {
        let userDetail = this.storage.get("userDetails");
        if (userDetail.is_admin) {
          return true;
        }
        this.router.navigate(["/admin/create-admin"]);
        return false;
      } else {
        this.router.navigate(["/auth/login"]);
        return false;
      }
    } else {
      this.router.navigate(["/auth/login"]);
      return false;
    }
  }
}
