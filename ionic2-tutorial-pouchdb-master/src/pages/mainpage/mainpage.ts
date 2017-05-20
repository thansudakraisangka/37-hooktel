import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';
import { RoomPage } from '../room/room';
import { BookPage } from '../book/book';

/*
  Generated class for the MainpagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html'
})
export class MainPage{

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainpagePagePage');
  }

   gogallery(){
        this.navCtrl.push(GalleryPage);
    }
    goroom(){
        this.navCtrl.push(RoomPage);
    }
    gobook(){
        this.navCtrl.push(BookPage);
    }

}
