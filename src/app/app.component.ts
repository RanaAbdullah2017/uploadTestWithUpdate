import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InitialPage } from '../pages/initial/initial';
import { HumStateRepPage } from '../pages/hum-state-rep/hum-state-rep';
import { AboutUsPage } from '../pages/about-us/about-us';
import { AdvicePage } from '../pages/advice/advice';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { PhoneAuthPage } from '../pages/phone-auth/phone-auth';



import { ContactUsPage } from '../pages/contact-us/contact-us';
// import { VolunteerWorkPage } from '../pages/volunteer-work/volunteer-work';
import { HttpClientModule } from '@angular/common/http';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  // PhoneAuthPage
  rootPage: any =PhoneAuthPage;//InitialPage; //HomePage;
  
  pages: Array<{title: string, component: any, icon: string, md:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private httpClient:HttpClientModule) {
    this.initializeApp();
    

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'الرئيسية', component: HomePage, icon: "ios-home" ,md:"md-home"},
      { title: 'حول التطبيق', component: AboutUsPage,icon: "ios-people",md:"md-people" },
      { title: 'التبليغ عن الحالات الإنسانية', component: LoginPage,icon: "ios-bonfire",md:"md-bonfire" },
      
      // { title: 'التبليغ عن الحالات الإنسانية', component: HumStateRepPage,icon: "ios-bonfire",md:"md-bonfire" },
      { title: 'اتصل بنا', component: ContactUsPage, icon: "ios-call",md: "md-call"}
      
      
    ];

  }
// { title: 'List', component: ListPage },
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
