import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MyAlbumComponent } from "./components/my-album/my-album.component";
import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { AddPhotoComponent } from "./components/add-photo/add-photo.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "my-album", component: MyAlbumComponent },
  { path: "login", component: LoginComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "add-photo", component: AddPhotoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
