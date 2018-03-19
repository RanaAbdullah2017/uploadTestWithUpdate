import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { User } from "../../app/User";
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user ={} as User;
  constructor(public fbAuth:AngularFireAuth,  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(email,password)
  {
    const result=this.fbAuth.auth.signInWithEmailAndPassword(email, password).then(user=>{
      
      console.log(email + "  " + password)
      this.navCtrl.setRoot(HomePage);
    }).catch(function(error){
        console.log(error);
    });

  }

  register(){
    this.navCtrl.setRoot(RegisterPage);
  }
}
