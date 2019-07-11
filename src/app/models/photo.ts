import { User } from "./user";
import { Comment } from "./comment";

export interface Photo {
  photoId: string;
  photoName: string;
  title: string;
  description: string;
  user: User;
  imageName: string;
  likedByUserList: User[];
  likes: number;
  commentList: Comment[];
  createdDate: Date;
}
