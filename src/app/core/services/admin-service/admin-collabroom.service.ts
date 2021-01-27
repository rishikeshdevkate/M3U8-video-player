import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Constants } from "../../shared/constants/constants";

@Injectable({
  providedIn: "root"
})
export class AdminCollabroomService {
  constructor(private http: HttpClient) {}

  getCollabroomList(data: any) {
    return this.http.post(
      Constants.baseUrl + "/job/getAdminJobList/?search=" + data.search,
      data
    );
  }

  updateCollabroomStatus(id, data) {
    return this.http.put(
      Constants.baseUrl + "/job/updateJobStatus/" + id,
      data
    );
  }
  collbroomListpagination(url, data: any) {
    return this.http.post(url, data);
  }

  getApplicantsList(id) {
    return this.http.get(Constants.baseUrl + "/job/getJobApplicants/" + id);
  }

  applicantsListPagination(url) {
    return this.http.get(url);
  }

  getSearchApplicantsList(id, searchValue) {
    return this.http.get(
      Constants.baseUrl +
        "/job/searchJobApplicants/" +
        id +
        "?search=" +
        searchValue
    );
  }
}
