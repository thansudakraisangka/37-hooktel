import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../mainpage/mainpage';
import { RoomPage } from '../room/room';
import { BookPage } from '../book/book';
/*
  Generated class for the GalleryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
  goback(){
        this.navCtrl.push(MainPage);
   }
   
    goroom(){
        this.navCtrl.push(RoomPage);
    }
    gobook(){
        this.navCtrl.push(BookPage);
    }

}
