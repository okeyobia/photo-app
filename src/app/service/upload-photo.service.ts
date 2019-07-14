import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UploadPhotoService {
  filesToUpload: File = null;
  constructor(private http: HttpClient) {}

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <File>fileInput.target.files[0];
  }

  upload() {
    const url = "http://localhost:8080/rest/photo/upload";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    const formData = new FormData();
    formData.append("photoImage", this.filesToUpload, this.filesToUpload.name);
    return this.http.post(url, formData, { headers });
  }
}
