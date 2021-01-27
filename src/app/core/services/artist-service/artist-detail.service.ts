import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { LocalStorageService } from "angular-web-storage";
@Injectable({
  providedIn: "root"
})
export class ArtistDetailService {
  constructor(private storage: LocalStorageService) {}
  public artistDetail$: BehaviorSubject<any> = new BehaviorSubject(
    this.storage.get("artistDetail") || null
  );

  getArtistDetail(): Observable<any> {
    return this.artistDetail$;
  }

  setArtistDetail(profile: any) {
    this.artistDetail$.next(profile);
    this.storage.set("artistDetail", profile);
  }
}
