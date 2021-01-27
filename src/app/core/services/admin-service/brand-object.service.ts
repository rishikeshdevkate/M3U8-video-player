import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { LocalStorageService } from "angular-web-storage";
@Injectable({
  providedIn: "root"
})
export class BrandObjectService {
  constructor(private storage: LocalStorageService) {}
  public brandObj$: BehaviorSubject<any> = new BehaviorSubject(
    this.storage.get("brandObj") || null
  );

  getObject(): Observable<any> {
    return this.brandObj$;
  }

  setObject(brandObj: any) {
    this.brandObj$.next(brandObj);
    this.storage.set("brandObj", brandObj);
  }
}
