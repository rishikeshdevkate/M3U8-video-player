import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { LocalStorageService } from "angular-web-storage";
@Injectable({
  providedIn: "root"
})
export class schoolObjectService {
  constructor(private storage: LocalStorageService) {}
  public schoolAdminObj$: BehaviorSubject<any> = new BehaviorSubject(
    this.storage.get("schoolAdminObj") || null
  );

  getObject(): Observable<any> {
    return this.schoolAdminObj$;
  }

  setObject(schoolAdminObj: any) {
    this.schoolAdminObj$.next(schoolAdminObj);
    this.storage.set("schoolAdminObj", schoolAdminObj);
  }
}
