import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoQuizPage } from './do-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: DoQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoQuizPageRoutingModule {}
