import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/service/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  credential = { username: "", password: "" };
  currentUsername;

  constructor(private loginService: LoginService) {
    this.currentUsername = localStorage.getItem("currentUsername");
  }

  ngOnInit() {}

  onSubmit() {
    this.loginService.sendCredential(this.credential).subscribe(data => {
      console.log(Object.values(data)[0]);
      localStorage.setItem("token", Object.values(data).pop());
      this.loginService.sendToken(localStorage.getItem("token")).subscribe(
        data => {
          this.currentUsername = this.credential.username;
          localStorage.setItem("currentUsername", this.credential.username);
          this.credential.username = "";
          this.credential.password = "";
        },
        error => console.log(error)
      );
    });
  }
}
