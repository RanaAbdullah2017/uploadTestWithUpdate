import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from '../../validate';
import { PasswordValidation } from '../../app/PasswordValidation';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
user ={} as User;
// messageError :string='';
// email:string='';
// password:string='';
message:string='';
public addUserForm:FormGroup;
  constructor(public afAuth: AngularFireAuth,   public navCtrl: NavController, public navParams: NavParams,
    private afDB: AngularFireDatabase,
    private afStorage: AngularFireStorage,
    public formBuilder: FormBuilder) {

      this.addUserForm = formBuilder.group({
        FullName: ['', Validators.compose([Validators.required])],
        mobNo: ['', Validators.compose([Validators.required, Validators.maxLength(11)])],
        email: ['', Validators.compose([Validators.required,Validators.email])],
        password: ['', Validators.compose([Validators.required,Validators.minLength(6)])],
        confirmPassword: ['', Validators.compose([Validators.required,Validators.minLength(6)])]
        
      },
      {validator: PasswordValidation.MatchPassword} // your validation method]
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
//   register(fullname,phoneno,email,password){
//     console.log("Loading...")
//     this.afDB.list('users').push({
//         sendDate: Date.now(),
//         fullname: fullname.value,
//         phoneno: phoneno.value,
//         email: email.value,
//         password: password.value,
//     }).then(_ => {
//         console.log('success')
//         fullname.value = '';
//         phoneno.value = '';
//         phoneno.value = '';
//         password.value = '';
//         this.message='تمت الإضافة بنجاح'
//     }, error => console.log(error));
// }
 register(fullname,phoneno,email,password){

  try{
    ////Authintication with Email and password
    const result=this.afAuth.auth.createUserWithEmailAndPassword(email,
      password).then(user=>{
        
        console.log(email + "  " + password)
        ///---------------------------------------------
        console.log("Loading...")
    this.afDB.list('users').push({
        sendDate: Date.now(),
        fullname: fullname.value,
        phoneno: phoneno.value,
        email: email.value,
        password: password.value,
    }).then(_ => {
        console.log('success')
        fullname.value = '';
        phoneno.value = '';
        email.value = '';
        password.value = '';
    }, error => console.log(error));
    
////Authintication with PhoneNo
// window.recaptchaVerifier = this.afAuth.auth.RecaptchaVerifier('sign-in-button', {
//   'size': 'invisible',
//   'callback': function(response) {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     onSignInSubmit();
//   }
// });
///-----------------------------------------------------------
this.reset(fullname,phoneno,email,password);
        this.navCtrl.setRoot(LoginPage)
      }
      
    ).catch(function(error){
          console.log(error);
          console.log(error.messageError)
          // if (password.length<=5){
          //   this.messageError="The Length Of is Very Week";}
          // this.validLength(error.messageError,  email, password);
      });
      
    
    // console.log(email + ''+ password);
    console.log('Hello');
  }
  catch(e)
  {
    console.error(e);
  }

}
validLength(password){
  if (password.length<=5){
    alert( "يجب ان يكون طول رقم المرور اكثر من 5 مراتب" );
  }

}
reset(fullname,phoneno,email,password)
  {fullname='';
  phoneno='';
  email='';
  password='';


}
// loginWithPhone(){
//   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//     'size': 'invisible',
//     'callback': function(response) {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       onSignInSubmit();
//     }
//   });
// }

}

