import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  private url = "http://localhost:8080/photo/allPhotos";
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get(this.url);
  }
}
