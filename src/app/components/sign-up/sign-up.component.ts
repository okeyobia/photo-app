import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { SignUpService } from "src/app/service/sign-up.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  newUser: User = new User();
  registered = false;

  constructor(private signUpService: SignUpService) {}

  onSubmit() {
    console.log("check submit");
    this.signUpService.sendUser(this.newUser).subscribe(
      data => {
        this.registered = true;
        this.newUser = new User();
      },
      error => console.log(error)
    );
  }

  ngOnInit() {}
}
