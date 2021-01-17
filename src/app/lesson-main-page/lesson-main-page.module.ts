import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonMainPagePageRoutingModule } from './lesson-main-page-routing.module';

import { LessonMainPagePage } from './lesson-main-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonMainPagePageRoutingModule
  ],
  declarations: [LessonMainPagePage]
})
export class LessonMainPagePageModule {}
