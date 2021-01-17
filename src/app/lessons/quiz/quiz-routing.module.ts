import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizPage } from './quiz.page';

const routes: Routes = [
  {
    path: '',
    component: QuizPage
  },
  {
    path: 'do-quiz',
    loadChildren: () => import('./do-quiz/do-quiz.module').then( m => m.DoQuizPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizPageRoutingModule {}
