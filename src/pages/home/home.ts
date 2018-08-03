import { BookingPage } from './../booking/booking';
import { ProfilePage } from './../profile/profile';
import { Component, NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { getScrollData } from 'ionic-angular/components/input/input';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController ) {
}


   User:string;

   getScrollData(username){
   this.User=username;
  this.navCtrl.push(ProfilePage,{data:this.User})
 }

 login() {
    let alert = this.alertCtrl.create({
    title: 'WELCOME',
    // cssClass:'alertcss',
     inputs: [
       {
         name: 'username', 
        
         placeholder: 'Enter Your Username'
       },
     
       {
        name: 'password', 
        type: "password",
        placeholder: 'Enter Valid Password'
      },
       
    ],
     buttons: [
       {
         text: 'Cancel',
         role: 'cancel',
        //  cssClass:'btncss',
        handler: data =>   {  
       console.log('Cancel clicked');
      } 
      },
    
      
       {
        text: 'Enter',
         role: 'Enter',
        //  cssClass:'btncss',
        handler: data =>  {
       this.getScrollData(data.username);
         }
       }
     ],
     cssClass: 'alertcss',
   });
   alert.present();

 }


//  create(){
//   this.navCtrl.push(ProfilePage)
//  }


}
