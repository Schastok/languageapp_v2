import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelsubscriptionPageRoutingModule } from './cancelsubscription-routing.module';

import { CancelsubscriptionPage } from './cancelsubscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelsubscriptionPageRoutingModule
  ],
  declarations: [CancelsubscriptionPage]
})
export class CancelsubscriptionPageModule {}
