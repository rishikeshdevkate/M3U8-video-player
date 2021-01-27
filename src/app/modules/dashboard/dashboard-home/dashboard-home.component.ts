import { Component, OnInit } from "@angular/core";
import { RouteServiceService } from "../../../core/services/route-service/route-service.service";
import { fadeInAnimation } from "../../../core/shared/util/app-annimations";

@Component({
  selector: "app-dashboard-home",
  templateUrl: "./dashboard-home.component.html",
  styleUrls: ["./dashboard-home.component.scss"],
  animations: [fadeInAnimation]
})
export class DashboardHomeComponent implements OnInit {
  isHidenav: boolean = false;
  isHideFooter: boolean = false;
  constructor(private routeService: RouteServiceService) {}

  ngOnInit() {
    this.routeService.getChangedRoute().subscribe(value => {
      if (value.includes("/auth/reset-password")) {
        this.isHidenav = true;
        this.isHideFooter = true;
        return;
      } else if (value.includes("/auth/signup")) {
        this.isHidenav = false;
        this.isHideFooter = true;
        return;
      } else {
        this.isHidenav = false;
        this.isHideFooter = false;
        return;
      }
    });
  }
}
