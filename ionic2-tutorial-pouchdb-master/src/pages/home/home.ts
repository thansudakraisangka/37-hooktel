import { Component, NgZone } from "@angular/core";
import { ModalController, NavController, Platform } from 'ionic-angular';  
import { BirthdayService } from '../../services/birthday.service';  
import { SignupPage } from '../signup/signup';  
import { LoginPage } from '../login/login'; 
import  { MainPage } from '../mainpage/mainpage'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
    public birthdays = [];

    constructor(private birthdayService: BirthdayService,
        private nav: NavController,
        private platform: Platform,
        private zone: NgZone,
        private modalCtrl: ModalController) {

    }

    ionViewDidLoad() {
        this.platform.ready().then(() => {
            this.birthdayService.initDB();

            this.birthdayService.getAll()
                .then(data => {
                    this.zone.run(() => {
                        this.birthdays = data;
                    });
                })
                .catch(console.error.bind(console));
        });
    }

    showDetail(birthdays) {
        let modal = this.modalCtrl.create(SignupPage, { birthdays: birthdays });
        modal.present();
    }

    showlogin(birthdays) {
        let modal = this.modalCtrl.create(LoginPage, { birthdays: birthdays });
        modal.present();
    }

    asklater(birthdays) {
        let modal = this.modalCtrl.create(MainPage, { birthdays: birthdays });
        modal.present();
    }
    
}