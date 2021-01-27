import { Injectable } from '@angular/core';
import { LocalStorageService } from "angular-web-storage";
import { HttpClient } from "@angular/common/http";
import { Constants } from "../../shared/constants/constants";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcademyServiceService {

  constructor(
    private http: HttpClient, 
    private storage: LocalStorageService
  ) { }

  getCourseList(data){
    return this.http.post(Constants.baseUrl + "/course/getCourseList",data);
  }

  courseListpagination(paginationUrl,data) {
    return this.http.post(paginationUrl,data);
  }

  getCourseById(id: any){
    return this.http.get(Constants.baseUrl + "/course/getCourseById/" + id);
  }

  getSimilarCourses(id:any){
    return this.http.get(Constants.baseUrl + "/course/getSimilarCourses/" + id);
  }

  similarCoursesPagination(paginationUrl){
    return this.http.get(paginationUrl);
  }
}
