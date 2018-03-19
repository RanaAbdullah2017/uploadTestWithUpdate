import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

/**
 * Generated class for the PhoneAuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-auth',
  templateUrl: 'phone-auth.html',
})
export class PhoneAuthPage {
verificationId:any;
code:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams,private afDB: AngularFireDatabase,
    private afStorage: AngularFireStorage,public afAuth: AngularFireAuth) {
    
  }
  send()
  {
    (<any>window).FirebasePlugin.verifyPhoneNumber('07804199050', 60, (credential) => {
      alert("SMS Sent Successfully");
      console.log(credential);
  
      // ask user to input verificationCode:
      // var code = inputField.value.toString();
  
      this.verificationId = credential.verificationId;
      
      // var signInCredential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
      // firebase.auth().signInWithCredential(signInCredential);
  }, (error) => {
      console.error(error);
  });
  }
  verify()
  {
    let signInCredental=firebase.auth.PhoneAuthProvider.credential(this.verificationId,this.code);
    firebase.auth().signInWithCredential(signInCredental).then((info)=>{
      console.log(info);
    },(error) =>{
      console.log(error);
    });
    // const signInCredental=thisafDB..credential(this.verificationId,this.code);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneAuthPage');
  }

}
