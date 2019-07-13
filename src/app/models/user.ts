import { Photo } from "./photo";

export class User {
  userId: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  createdDate: Date;
  photoList: Photo[];
  likedPhotoList: Photo[];
}
