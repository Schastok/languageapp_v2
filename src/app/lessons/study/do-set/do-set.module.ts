import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoSetPageRoutingModule } from './do-set-routing.module';

import { DoSetPage } from './do-set.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoSetPageRoutingModule
  ],
  declarations: [DoSetPage]
})
export class DoSetPageModule {}
