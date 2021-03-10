import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycoursesPage } from './mycourses.page';

const routes: Routes = [
  {
    path: '',
    component: MycoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycoursesPageRoutingModule {}
