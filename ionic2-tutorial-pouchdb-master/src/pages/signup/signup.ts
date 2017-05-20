import { Component } from '@angular/core';  
import { NavParams, ViewController } from 'ionic-angular';  
import { NavController } from 'ionic-angular';  
import { BirthdayService } from '../../services/birthday.service';
import { MainPage } from '../mainpage/mainpage';
import { HomePage } from '../home/home';
/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  public birthday: any = {};
    public isNew = true;
    public action = 'Add';
    public isoDate = '';

    constructor(private viewCtrl: ViewController,
        private navParams: NavParams,
        private birthdayService: BirthdayService,
        private navCtrl: NavController) {
    }

    ionViewDidLoad() {
        let editBirthday = this.navParams.get('birthday');

        if (editBirthday) {
            this.birthday = editBirthday;
            this.isNew = false;
            this.action = 'Edit';
            this.isoDate = this.birthday.Date.toISOString().slice(0, 10);
        }
    }

    save() {
        this.birthday.Date = new Date(this.isoDate);

        if (this.isNew) {
            this.birthdayService.add(this.birthday)
                .catch(console.error.bind(console));
        } else {
            this.birthdayService.update(this.birthday)
                .catch(console.error.bind(console));
        }

        this.navCtrl.push(MainPage);
    }

    goback(){
        this.navCtrl.push(HomePage);
    }
   
    
}
