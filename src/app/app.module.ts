import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { PhotoListComponent } from "./components/photo-list/photo-list.component";
import { SidePanelComponent } from "./components/side-panel/side-panel.component";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyAlbumComponent } from './components/my-album/my-album.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidePanelComponent,
    NavBarComponent,
    MyAlbumComponent,
    LoginComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
