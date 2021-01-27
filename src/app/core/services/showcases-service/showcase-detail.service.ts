import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { LocalStorageService } from "angular-web-storage";
@Injectable({
  providedIn: "root"
})
export class ShowcaseDetailService {
  constructor(private storage: LocalStorageService) {}
  public showcaseDetail$: BehaviorSubject<any> = new BehaviorSubject(
    this.storage.get("showcaseDetail") || null
  );

  getShowcaseDetail(): Observable<any> {
    return this.showcaseDetail$;
  }

  setShowcaseDetail(profile: any) {
    this.showcaseDetail$.next(profile);
    this.storage.set("showcaseDetail", profile);
  }

  public partnerWithDetail$:BehaviorSubject<any>=new BehaviorSubject(
    this.storage.get("partnerDetail") || null
  )

  getPartnerDetail(): Observable<any>{
    return this.partnerWithDetail$;
  }

  setPartnerDetail(profile:any){
    this.partnerWithDetail$.next(profile);
    this.storage.set("partnerDetail",profile);
  }

  public rsvpDetail$:BehaviorSubject<any>=new BehaviorSubject(
    this.storage.get("rsvpDetail") || null
  )

  getRSVPDetail(): Observable<any>{
    return this.rsvpDetail$;
  }

  setRSVPDetail(profile:any){
    this.rsvpDetail$.next(profile);
    this.storage.set("rsvpDetail",profile);
  }
}
