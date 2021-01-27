import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Constants } from "../../shared/constants/constants";

@Injectable({
  providedIn: "root"
})
export class AdminSchoolService {
  constructor(private http: HttpClient) {}

  getSchoolList(data: any) {
    return this.http.post(
      Constants.baseUrl + "/course/getAdminCourseList/?search=" + data.search,
      data
    );
  }

  updateCourseStatus(id, data) {
    return this.http.put(
      Constants.baseUrl + "/school/updateCourseStatus/" + id,
      data
    );
  }

  schoolListpagination(url, data: any) {
    return this.http.post(url, data);
  }
}
