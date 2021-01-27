import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { LocalStorageService } from "angular-web-storage";
@Injectable({
  providedIn: "root"
})
export class collabroomBillingService {
  constructor(private storage: LocalStorageService) {}
  public billingArry$: BehaviorSubject<any> = new BehaviorSubject(
    this.storage.get("billingArry") || []
  );

  getBillingArray(): Observable<any> {
    return this.billingArry$;
  }

  setBillingArray(collabroomObj: any) {
    this.billingArry$.next(collabroomObj);
    this.storage.set("billingArry", collabroomObj);
  }
}
