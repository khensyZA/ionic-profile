import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
profile = {   preferences:{

  }
 }

ContactNumber:number;

 profileFG: FormGroup;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private formbuilder:FormBuilder) {

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

  editProfile(){
    // console.log(this.profileFG);
   this.navCtrl.push(DetailsPage)
  }

  
}
