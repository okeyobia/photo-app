import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  url = "http://localhost:8080/user/login";
  token: string;

  constructor(private http: HttpClient) {}

  sendCredential(model) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(this.url, JSON.stringify(model), { headers });
  }

  sendToken(token) {
    const url = "http://localhost:8080/rest/user/users";
    console.log("Bearer " + token);
    const headers = new HttpHeaders({ Authorization: "Bearer " + token });
    return this.http.get(url, { headers });
  }

  logout() {
    localStorage.setItem("token", "");
    localStorage.setItem("currentUsername", "");
    alert("You have logged out.");
  }

  checkLogin() {
    if (
      localStorage.getItem("currentUsername") != null &&
      localStorage.getItem("currentUsername") !== "" &&
      localStorage.getItem("token") != null &&
      localStorage.getItem("token") !== ""
    ) {
      console.log(localStorage.getItem("currentUsername"));
      console.log(localStorage.getItem("token"));
      return true;
    } else {
      return false;
    }
  }
}
