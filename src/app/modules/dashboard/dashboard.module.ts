import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardHomeComponent } from "./dashboard-home/dashboard-home.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";
import { SharedModule } from "../../core/shared.module";
import { DatepickerModule, BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { IsSignedInUserService } from "../../core/services/auth-service/IsSignedIn-user.service";

const routes: Routes = [
  {
    path: "",
    component: DashboardHomeComponent,
    children: [
     
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then(m => m.HomeModule)
      },
     
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "**",
        redirectTo: "home"
      }
    ]
  }
];

@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    RouterModule.forChild(routes),
    ModalModule.forRoot()
  ],

  exports: [FormsModule, ReactiveFormsModule]
})
export class DashboardModule {}
