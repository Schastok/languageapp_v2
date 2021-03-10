import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonsPageRoutingModule } from './lessons-routing.module';
import { PipesModule } from '../pipes/pipes.module';

import { LessonsPage } from './lessons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonsPageRoutingModule,
    PipesModule
  ],
  declarations: [LessonsPage],

})
export class LessonsPageModule {}
