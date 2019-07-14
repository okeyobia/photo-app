import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Photo } from "../models/photo";

@Injectable({
  providedIn: "root"
})
export class AddPhotoService {
  constructor(private http: HttpClient) {}

  sendPhoto(photo: Photo) {
    const url = "http://localhost:8080/rest/photo/add";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    return this.http.post(url, photo, { headers });
  }
}
