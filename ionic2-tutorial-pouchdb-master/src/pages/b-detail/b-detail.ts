import { Component } from '@angular/core';  
import { NavParams, ViewController } from 'ionic-angular';  
import { NavController } from 'ionic-angular';  
import { BirthdayService } from '../../services/birthday.service';
import { RoomPage } from '../room/room';

@Component({
  selector: 'page-b-detail',
  templateUrl: 'b-detail.html'
})
export class BDetailPage {  
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

        this.dismiss();
    }

    delete() {
        this.birthdayService.delete(this.birthday)
            .catch(console.error.bind(console));

        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss(this.birthday);
    }
    goback(){
        this.navCtrl.push(RoomPage);
    }
}