import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectionPageRoutingModule } from './section-routing.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { SectionPage } from './section.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectionPageRoutingModule,
    PipesModule
  ],
  declarations: [SectionPage]
})
export class SectionPageModule {}
