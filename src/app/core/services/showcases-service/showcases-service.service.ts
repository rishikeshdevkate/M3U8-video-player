import { Injectable } from "@angular/core";
import { LocalStorageService } from "angular-web-storage";
import { HttpClient } from "@angular/common/http";
import { Constants } from "../../shared/constants/constants";



@Injectable({
    providedIn: "root",
})

export class ShowcasesServiceService{
    constructor(private http: HttpClient, private storage: LocalStorageService) {}
    
    getShowcaseList(data){
        return this.http.post(Constants.baseUrl + "/showcase/getShowcaseList",data);
    }

    showcaseListpagination(paginationUrl,data) {
        return this.http.post(paginationUrl,data);
    }

    getShowcaseByID(id: any){
        return this.http.get(Constants.baseUrl + "/showcase/getShowcaseByID/" + id);
    }

    similarEventsList(data){
        return this.http.post(Constants.baseUrl + "/showcase/searchShowcase/?search=",data);
    }

    similarEventsListpagination(paginationUrl,data) {
        return this.http.post(paginationUrl,data);
    }

    addShowcasePartner(data){
        return this.http.post(Constants.baseUrl + "/showcase/addShowcasePartner",data);
    }

    addShowcaseRSVP(data){
        return this.http.post(Constants.baseUrl + "/showcase/addShowcaseRSVP",data);
    }

    updateShowcaseViews(id:any){
        return this.http.patch(Constants.baseUrl + "/showcase/updateShowcaseViews/" + id,null);
    }

    getShowcasePartnerList(data){
        return this.http.post(Constants.baseUrl + "/showcase/getShowcasePartnerList",data);
    }

    getShowcaseRSVPList(data){
        return this.http.post(Constants.baseUrl + "/showcase/getShowcaseRSVPList/",data);
    }
}