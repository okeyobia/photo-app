import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class SignUpService {
  constructor(private http: HttpClient) {}
  url = "http://localhost:8080/user/signup";

  sendUser(user: User) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(this.url, JSON.stringify(user), { headers });
  }
}
