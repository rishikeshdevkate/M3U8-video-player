import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimeConvertPipe } from "./pipes/time-converter/time-convert.pipe";
import { AuthServiceService } from "./services/auth-service/auth-service.service";
import { DashboardServiceService } from "./services/dashboard-service/dashboard-service.service";
import { ArtistServiceService } from "./services/artist-service/artist-service.service";
import { ShowcasesServiceService } from "./services/showcases-service/showcases-service.service";
import { ShowcaseDetailService } from "./services/showcases-service/showcase-detail.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./services/interceptor/interceptor.service";
import { ToastrModule } from "ngx-toastr";
import { AngularWebStorageModule } from "angular-web-storage";
import { ModalModule } from "ngx-bootstrap/modal";
import { RouterModule } from "@angular/router";
import { HideShowDirective } from "./directives/hide-show.directive";
import { InputFormatterDirective } from "./directives/input-formatter.directive";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NgxImageCompressService } from "ngx-image-compress";
import { CollabroomServiceService } from "./services/collabroom-service/collabroom-service.service";
import { NgxFileDropModule } from "ngx-file-drop";
import { UiSwitchModule } from "ngx-ui-switch";
import { AcademyServiceService } from "./services/academy/academy-service.service";

@NgModule({
  declarations: [TimeConvertPipe, HideShowDirective, InputFormatterDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularWebStorageModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-bottom-right",
    }),
    ModalModule.forRoot(),
    RouterModule,
    InfiniteScrollModule,
    NgxFileDropModule,
    UiSwitchModule,
  ],
  exports: [
    InfiniteScrollModule,
    InputFormatterDirective,
    NgxFileDropModule,
    UiSwitchModule,
  ],
  providers: [
    AuthServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    DashboardServiceService,
    ArtistServiceService,
    ShowcasesServiceService,
    ShowcaseDetailService,
    NgxImageCompressService,
    CollabroomServiceService,
    AcademyServiceService,
  ],
})
export class SharedModule {}
