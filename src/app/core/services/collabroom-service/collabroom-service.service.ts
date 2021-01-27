import { Injectable } from '@angular/core';
import { LocalStorageService } from "angular-web-storage";
import { HttpClient } from "@angular/common/http";
import { Constants } from "../../shared/constants/constants";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CollabroomServiceService {

  constructor(
    private http: HttpClient, 
    private storage: LocalStorageService
  ) { }
  public jobDetail$: BehaviorSubject<any> = new BehaviorSubject(
    this.storage.get("jobDetail") || null
  );

  getJobDetail(): Observable<any> {
    return this.jobDetail$;
  }

  setJobDetail(profile: any) {
    this.jobDetail$.next(profile);
    this.storage.set("jobDetail", profile);
  }

  getJobList(data){
    return this.http.post(Constants.baseUrl + "/job/getJobList",data);
  }

  getJobByID(id: any){
    return this.http.get(Constants.baseUrl + "/job/getJobById/" + id);
  }

  jobListpagination(paginationUrl,data) {
    return this.http.post(paginationUrl,data);
  }

  getJobListBySearch(search,data){
    return this.http.post(Constants.baseUrl + "/job/getJobList/?search="+search,data);
  }

  sortJobList(sortBy,data){
    return this.http.post(Constants.baseUrl + "/job/getJobList/?ordering="+sortBy,data);
  }

  getSimilarJobs(id:any){
    return this.http.get(Constants.baseUrl + "/job/getSimilarJobs/" + id);
  }

  similar_jobs_pagination(paginationUrl){
    return this.http.get(paginationUrl);
  }

  apply_job(data){
    return this.http.post(Constants.baseUrl + "/job/applyJob/",data);
  }

  applied_joblist(){
    return this.http.get(Constants.baseUrl + "/job/getUserAppliedJobs");
  }

}
