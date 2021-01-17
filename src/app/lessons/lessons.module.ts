import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonsPageRoutingModule } from './lessons-routing.module';
import { SafePipe } from '../safe.pipe';

import { LessonsPage } from './lessons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonsPageRoutingModule
  ],
  declarations: [LessonsPage, SafePipe],
  exports:[SafePipe]
})
export class LessonsPageModule {}
