import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  profile = {   preferences:{

  }
 }

ContactNumber:number;

 profileFG: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formbuilder:FormBuilder ) {


    this.profileFG= new FormGroup({
      Name: new FormControl(''),
     Surname: new FormControl(''),
      Email: new FormControl(''),
      Gender: new FormControl(''),
      Preferences: new FormGroup({
      Date: new FormControl(),
      ContactNumber : new FormControl('')
      })
    
    })
   
     this.profileFG= this.formbuilder.group({ 
      Name: ['', [Validators.required, Validators.minLength(8) ]],
      Surname: ['', [Validators.required, Validators.minLength(2)] ], 
      Email: ['khensanijoe@gmail.com', [Validators.required, Validators.minLength(6)] ],
      Gender: ['',[Validators.required] ],
       Preferences:this.formbuilder.group({
       Date: ['', [Validators.required] ],
      ContactNumber: ['', [Validators.required] ]
   
       })
   
     })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }


  logout(){
    this.navCtrl.push(HomePage)
  }

  save(){
    this.navCtrl.push(ProfilePage)
  }
}
