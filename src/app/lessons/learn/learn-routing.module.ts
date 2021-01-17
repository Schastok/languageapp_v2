import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnPage } from './learn.page';

const routes: Routes = [
  {
    path: '',
    component: LearnPage
  },
  {
    path: 'section',
    loadChildren: () => import('./section/section.module').then( m => m.SectionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnPageRoutingModule {}
