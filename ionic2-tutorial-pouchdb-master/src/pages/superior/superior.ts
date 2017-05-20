import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookPage } from '../book/book';

/*
  Generated class for the Superior page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-superior',
  templateUrl: 'superior.html'
})
export class SuperiorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuperiorPage');
  }

  LaunchBookPage(){
  	this.navCtrl.push(BookPage);
  }

}
