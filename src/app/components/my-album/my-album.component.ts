import { Component, OnInit } from "@angular/core";
import { Photo } from "src/app/models/photo";
import { User } from "src/app/models/user";
import { PhotoService } from "src/app/service/photo.service";
import { Router } from "@angular/router";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: "app-my-album",
  templateUrl: "./my-album.component.html",
  styleUrls: ["./my-album.component.css"]
})
export class MyAlbumComponent implements OnInit {
  photos: Photo[];
  user;
  selectedPhoto: Photo;
  constructor(
    private photoService: PhotoService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService
      .getUserByName(localStorage.getItem("currentUsername"))
      .subscribe(
        user => {
          this.user = Object.values(user).pop();
          console.log("=======================pppp=========", this.user);
          this.photoService.getPhotosByUser(this.user).subscribe(
            photos => {
              this.photos = Object.values(photos);
              console.log(this.photos);
            },
            err => console.log(err, "errggggeeeg===fff")
          );
        },
        error => console.log(error, "asdssgs++jhshshhshshs+dxhdh")
      );
  }

  onSelect(photo: Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(["/image-detail", this.selectedPhoto.photoId]);
  }
}
