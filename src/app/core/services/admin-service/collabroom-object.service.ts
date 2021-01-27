import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { LocalStorageService } from "angular-web-storage";
@Injectable({
  providedIn: "root"
})
export class collabroomObjectService {
  constructor(private storage: LocalStorageService) {}
  public collabroomObj$: BehaviorSubject<any> = new BehaviorSubject(
    this.storage.get("collabroomObj") || null
  );

  getObject(): Observable<any> {
    return this.collabroomObj$;
  }

  setObject(collabroomObj: any) {
    this.collabroomObj$.next(collabroomObj);
    this.storage.set("collabroomObj", collabroomObj);
  }
}
