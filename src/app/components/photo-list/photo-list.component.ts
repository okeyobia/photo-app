import { Component, OnInit } from "@angular/core";
import { PhotoService } from "src/app/service/photo.service";
import { Photo } from "src/app/models/photo";

@Component({
  selector: "app-photo-list",
  templateUrl: "./photo-list.component.html",
  styleUrls: ["./photo-list.component.css"]
})
export class PhotoListComponent implements OnInit {
  photos: Photo[];
  selectedPhoto: Photo;
  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getPhotos().subscribe(data => {
      this.photos = Object.values(data);
    });
  }
}
