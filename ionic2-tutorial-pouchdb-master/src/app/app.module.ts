import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { MainPage } from '../pages/mainpage/mainpage';
import { LoginPage } from '../pages/login/login';
import { GalleryPage } from '../pages/gallery/gallery';
import { RoomPage } from '../pages/room/room';
import { BookPage } from '../pages/book/book';
import { DeluxePage } from '../pages/deluxe/deluxe';
import { SuperiorPage } from '../pages/superior/superior';
import { BDetailPage } from '../pages/b-detail/b-detail';
import { BirthdayService } from '../services/birthday.service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    MainPage,
    LoginPage,
    GalleryPage,
    RoomPage,
    BookPage,
    DeluxePage,
    BDetailPage,
    SuperiorPage
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    MainPage,
    LoginPage,
    GalleryPage,
    RoomPage,
    BookPage,
    DeluxePage,
    BDetailPage,
    SuperiorPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, BirthdayService]
})
export class AppModule {}
