import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { LocalStorageService } from "angular-web-storage";
@Injectable({
  providedIn: "root"
})
export class ApplicantObject {
  constructor(private storage: LocalStorageService) {}
  public ApplicantObject$: BehaviorSubject<any> = new BehaviorSubject(
    this.storage.get("ApplicantObject") || null
  );

  getObject(): Observable<any> {
    return this.ApplicantObject$;
  }

  setObject(ApplicantObj: any) {
    this.ApplicantObject$.next(ApplicantObj);
    this.storage.set("ApplicantObject", ApplicantObj);
  }
}
