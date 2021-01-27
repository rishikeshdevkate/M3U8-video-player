import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { LocalStorageService } from "angular-web-storage";
@Injectable({
  providedIn: "root"
})
export class schoolBillingService {
  constructor(private storage: LocalStorageService) {}
  public schoolBillingArry$: BehaviorSubject<any> = new BehaviorSubject(
    this.storage.get("schoolBillingArry") || []
  );

  getBillingArray(): Observable<any> {
    return this.schoolBillingArry$;
  }

  setBillingArray(schoolBillingArry: any) {
    this.schoolBillingArry$.next(schoolBillingArry);
    this.storage.set("schoolBillingArry", schoolBillingArry);
  }
}
