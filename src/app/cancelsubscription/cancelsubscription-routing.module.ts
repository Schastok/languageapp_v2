import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelsubscriptionPage } from './cancelsubscription.page';

const routes: Routes = [
  {
    path: '',
    component: CancelsubscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelsubscriptionPageRoutingModule {}
