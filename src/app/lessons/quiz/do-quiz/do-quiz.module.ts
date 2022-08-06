import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoQuizPageRoutingModule } from './do-quiz-routing.module';

import { DoQuizPage } from './do-quiz.page';
import { PipesModule } from '../../../pipes/pipes.module';
//import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoQuizPageRoutingModule,
    PipesModule
  ],
  declarations: [DoQuizPage]
})
export class DoQuizPageModule {}
