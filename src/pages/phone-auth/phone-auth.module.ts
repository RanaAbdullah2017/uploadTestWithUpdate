import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneAuthPage } from './phone-auth';

@NgModule({
  declarations: [
    PhoneAuthPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneAuthPage),
  ],
})
export class PhoneAuthPageModule {}
