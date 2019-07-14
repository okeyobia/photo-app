import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";
import { Photo } from "../models/photo";

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    const url = "http://localhost:8080/photo/allPhotos";
    return this.http.get(url);
  }

  getPhotosByUser(user: User) {
    const url = "http://localhost:8080/rest/photo/user";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    return this.http.post(url, user, { headers });
  }

  getPhotoById(photoId: number) {
    const tokenUrl1 = "http://localhost:8080/rest/photo/photoId";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    return this.http.post(tokenUrl1, photoId, { headers });
  }

  updatePhoto(photo: Photo) {
    const tokenUrl1 = "http://localhost:8080/rest/photo/update";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    return this.http.post(tokenUrl1, photo, { headers });
  }
}
