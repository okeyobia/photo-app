import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: User[];
  constructor(private http: HttpClient) {}

  getUsers() {}
  getUserById(userId: string) {}

  getUserByName(username: string) {
    const url = "http://localhost:8080/rest/user/username";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    return this.http.post(url, username, { headers });
  }
}
