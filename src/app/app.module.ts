import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// import { VolenteerPage } from '../pages/volenteer/volenteer';
// import {VolunteerWorkPage } from '../pages/volunteer-work/volunteer-work';
import {ContactUsPage } from '../pages/contact-us/contact-us';

import { Http } from '@angular/http';
import { AppService } from './AppService.service';
import { InitialPage } from '../pages/initial/initial';
import { HumStateRepPage } from '../pages/hum-state-rep/hum-state-rep';
import { AboutUsPage } from '../pages/about-us/about-us';
import { AdvicePage } from '../pages/advice/advice';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';


import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { PhoneAuthPage } from '../pages/phone-auth/phone-auth';


export const firebaseConfig = {
  apiKey: "AIzaSyCXC8PAGisO6QsSXjgV_ZeYH205Hyr6YB0",
  authDomain: "volenteersdb-aaf27.firebaseapp.com",
  databaseURL: "https://volenteersdb-aaf27.firebaseio.com",
  projectId: "volenteersdb-aaf27",
  storageBucket: "volenteersdb-aaf27.appspot.com",
  messagingSenderId: "658906590515"
  

};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InitialPage,
    HumStateRepPage,
    ContactUsPage,
    AboutUsPage,
    AdvicePage,
    RegisterPage,
    LoginPage,
    PhoneAuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InitialPage,
    HumStateRepPage,
    ContactUsPage,
    AboutUsPage,
    AdvicePage,
    RegisterPage,
    LoginPage,
    PhoneAuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppService,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
