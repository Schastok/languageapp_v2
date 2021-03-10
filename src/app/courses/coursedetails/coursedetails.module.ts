import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursedetailsPageRoutingModule } from './coursedetails-routing.module';
import { PipesModule } from '../../pipes/pipes.module';
import { CoursedetailsPage } from './coursedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursedetailsPageRoutingModule,
    PipesModule
  ],
  declarations: [CoursedetailsPage]
})
export class CoursedetailsPageModule {}
