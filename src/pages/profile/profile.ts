
import { BookingPage } from './../booking/booking';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

// User:string;




  constructor(public navCtrl: NavController, public navParams: NavParams, private formbuilder: FormBuilder) {
    // this.User=navParams.get('data')

    




  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ProfilePage');
  // }

   getProfile(){
     // console.log(this.profileFG);
    this.navCtrl.push(BookingPage)
   }

  // login(){
  //   this.navCtrl.push(HomePage)
  //  }

}
