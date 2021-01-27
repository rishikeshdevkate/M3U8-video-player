import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Constants } from "../../shared/constants/constants";

@Injectable({
  providedIn: "root"
})
export class ArtistServiceService {
  constructor(private http: HttpClient) {}

  artistList(searchValue: any) {
    return this.http.get(
      Constants.baseUrl + "/user/getArtistList?search=" + searchValue
    );
  }

  artistListpagination(paginationUrl) {
    return this.http.get(paginationUrl);
  }

  artistDetails(id: any) {
    return this.http.get(Constants.baseUrl + "/user/getArtistProfile/" + id);
  }

  createArtist(data: any) {
    return this.http.post(
      Constants.baseUrl + "/user/createArtistProfile",
      data
    );
  }

  updateArtist(data: any, id: any) {
    return this.http.patch(
      Constants.baseUrl + "/user/updateArtistProfile/" + id,
      data
    );
  }

  addArtistRating(data: any) {
    return this.http.post(Constants.baseUrl + "/user/addReview", data);
  }

  isArtistReviewed(id: any) {
    return this.http.get(Constants.baseUrl + "/user/isArtistReviewed/" + id);
  }

  updateArtistRating(data: any, id: any) {
    return this.http.patch(
      Constants.baseUrl + "/user/updateArtistReview/" + id,
      data
    );
  }
}
