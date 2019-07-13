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
  user: User;
  selectedPhoto: Photo;
  constructor(
    private photoService: PhotoService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {}
}
