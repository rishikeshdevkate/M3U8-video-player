import { Injectable } from "@angular/core";
import { LocalStorageService } from "angular-web-storage";
import { HttpClient } from "@angular/common/http";
import { Constants } from "../../shared/constants/constants";

@Injectable({
  providedIn: "root"
})
export class DashboardServiceService {
  constructor(private http: HttpClient, private storage: LocalStorageService) {}

  editUser(id, data) {
    return this.http.patch(
      Constants.baseUrl + "/user/updateUserProfile/" + id,
      data
    );
  }
  getCountries() {
    return this.http.get(Constants.baseUrl + "/brand/getCountryList");
  }
}
