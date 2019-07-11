import { Photo } from "./photo";

export class User {
  userId: number;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  createdDate: Date;
  photoList: Photo[];
  likedPhotoList: Photo[];
}
