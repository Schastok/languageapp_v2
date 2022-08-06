import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizPageRoutingModule } from './quiz-routing.module';
import { PipesModule } from '../../pipes/pipes.module';
import { QuizPage } from './quiz.page';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    QuizPageRoutingModule
  ],
  declarations: [QuizPage]
})
export class QuizPageModule {}
