import { Component, OnInit } from "@angular/core";

import { PhotoListComponent } from "../photo-list/photo-list.component";
import { Photo } from "src/app/models/photo";
import { User } from "src/app/models/user";
import { AddPhotoService } from "src/app/service/add-photo.service";
import { UploadPhotoService } from "src/app/service/upload-photo.service";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: "app-add-photo",
  templateUrl: "./add-photo.component.html",
  styleUrls: ["./add-photo.component.css"]
})
export class AddPhotoComponent implements OnInit {
  newPhoto: Photo = new Photo();
  photoAdded = false;
  user: User;

  constructor(
    private addPhotoService: AddPhotoService,
    public uploadPhotoService: UploadPhotoService,
    private userService: UserService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.userService
      .getUserByName(localStorage.getItem("currentUsername"))
      .subscribe(
        user => {
          this.user = Object.values(user).pop();
          console.log(this.user);
          this.newPhoto.user = this.user;
          this.addPhotoService.sendPhoto(this.newPhoto).subscribe(
            data => {
              this.photoAdded = true;
              this.newPhoto = new Photo();
            },
            error => console.log(error)
          );
        },
        err => console.log(err)
      );
  }
}
