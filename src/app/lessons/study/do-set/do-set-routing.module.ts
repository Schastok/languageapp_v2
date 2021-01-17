import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoSetPage } from './do-set.page';

const routes: Routes = [
  {
    path: '',
    component: DoSetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoSetPageRoutingModule {}
