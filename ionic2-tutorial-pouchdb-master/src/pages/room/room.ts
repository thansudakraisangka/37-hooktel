import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeluxePage } from '../deluxe/deluxe';
import { SuperiorPage } from '../superior/superior';
import { GalleryPage } from '../gallery/gallery';
import { MainPage } from '../mainpage/mainpage';
import { BookPage } from '../book/book';

/*
  Generated class for the RoomPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-room',
  templateUrl: 'room.html'
})
export class RoomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }
   godeluxe(){
        this.navCtrl.push(DeluxePage);
  }
   gosuperior(){
        this.navCtrl.push(SuperiorPage);
  }
    gogallery(){
        this.navCtrl.push(GalleryPage);
    }
    goback(){
        this.navCtrl.push(MainPage);
    }
    gobook(){
        this.navCtrl.push(BookPage);
    }

}
