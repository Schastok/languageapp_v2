import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage {

  lessons;

  sliderConfig = {
  slidesPerView: 1.2,
  spaceBetween: 10,

  loop: true
};

  constructor(private apiService: ApiService){}

  ionViewDidEnter(){

    this.apiService.getLessons().subscribe((data)=>{
      console.log(data);
      this.lessons = data;
      console.log(this.lessons);
    });
  }
}
