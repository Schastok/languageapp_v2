import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectionPageRoutingModule } from './section-routing.module';
import { LessonsPageModule } from '../../lessons.module';
import { SectionPage } from './section.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectionPageRoutingModule,
    LessonsPageModule
  ],
  declarations: [SectionPage]
})
export class SectionPageModule {}
