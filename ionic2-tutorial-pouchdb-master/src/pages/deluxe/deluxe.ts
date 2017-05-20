import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookPage } from '../book/book';

/*
  Generated class for the DeluxePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-deluxe',
  templateUrl: 'deluxe.html'
})
export class DeluxePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeluxePage');
  }

  LaunchBookPage(){
  	this.navCtrl.push(BookPage);
  }

}
