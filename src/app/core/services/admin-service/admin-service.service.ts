import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Constants } from "../../shared/constants/constants";

@Injectable({
  providedIn: "root"
})
export class AdminServiceService {
  constructor(private http: HttpClient) {}

  createBrand(data: any) {
    return this.http.post(Constants.baseUrl + "/brand/createBrand", data);
  }

  updateBrand(id, data: any) {
    return this.http.put(Constants.baseUrl + "/brand/updateBrand/" + id, data);
  }

  getBrandDetails() {
    return this.http.get(Constants.baseUrl + "/brand/getBrandDetails");
  }
  getCurrencyList() {
    return this.http.get(Constants.baseUrl + "/brand/getCurrencyList");
  }

  searchShowcasesAPI(data, search_text) {
    return this.http.post(
      Constants.baseUrl + "/showcase/searchShowcase" + "?search=" + search_text,
      data
    );
  }
  searchShowcasePaginationAPI(paginationUrl: string, request: any) {
    return this.http.post(paginationUrl, request);
  }

  createShowcaseAPI(data) {
    return this.http.post(Constants.baseUrl + "/showcase/createShowcase", data);
  }
  editShowcaseAPI(data, id) {
    return this.http.put(
      Constants.baseUrl + "/showcase/updateShowcase/" + id,
      data
    );
  }
  getCategoryList() {
    return this.http.get(Constants.baseUrl + "/showcase/getShowcaseCategory");
  }
  getSelfShowcaseList() {
    return this.http.get(Constants.baseUrl + "/showcase/getShowcaseIdsList");
  }

  createJobCall(payload: any) {
    return this.http.post(Constants.baseUrl + "/job/addJob", payload);
  }

  updateShowcaseStatus(payload, id) {
    return this.http.put(
      Constants.baseUrl + "/showcase/updateShowcaseStatus/" + id,
      payload
    );
  }

  searchShowcasePartnerUserAPI(data, search_text) {
    return this.http.post(
      Constants.baseUrl +
        "/showcase/searchPartnerUser" +
        "?search=" +
        search_text,
      data
    );
  }

  searchShowcasePartnerUserPaginationAPI(paginationUrl: string, request: any) {
    return this.http.post(paginationUrl, request);
  }

  searchShowcaseRSVPUserAPI(data, search_text) {
    return this.http.post(
      Constants.baseUrl + "/showcase/searchRSVPUser" + "?search=" + search_text,
      data
    );
  }

  searchShowcaseRSVPUserPaginationAPI(paginationUrl: string, request: any) {
    return this.http.post(paginationUrl, request);
  }
  searchShowcaseJobAPI(data, search_text) {
    return this.http.post(
      Constants.baseUrl + "/job/getJobList" + "?search=" + search_text,
      data
    );
  }

  searchShowcaseJobPaginationAPI(paginationUrl: string, request: any) {
    return this.http.post(paginationUrl, request);
  }

  searchShowcaseParticipantsAPI(data, search_text) {
    return this.http.get(
      Constants.baseUrl +
        "/job/searchJobApplicants/" +
        data.showcase_id +
        "?search=" +
        search_text
    );
  }

  searchShowcaseParticipantsPaginationAPI(paginationUrl: string, request: any) {
    return this.http.post(paginationUrl, request);
  }
  updateJob(id, payload: any) {
    return this.http.put(Constants.baseUrl + "/job/updateJob/" + id, payload);
  }

  createCourseAPI(data: any) {
    return this.http.post(Constants.baseUrl + "/course/addCourse", data);
  }
}
