import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonMainPagePage } from './lesson-main-page.page';

const routes: Routes = [
  {
    path: '',
    component: LessonMainPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonMainPagePageRoutingModule {}
