import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../api.service';



@Component({
  selector: 'app-study',
  templateUrl: './study.page.html',
  styleUrls: ['./study.page.scss'],
})
export class StudyPage implements OnInit {



  lessonId: string;
  flipcardlist;
  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('lessonId')){
        //redirect
        return;
      }
      this.lessonId = paramMap.get('lessonId');
      console.log('call API');
      this.apiService.getFlipcardlist(this.lessonId).subscribe((data)=>{
        console.log('data pulled: ')
        console.log(data);
        this.flipcardlist = data;
        console.log(this.flipcardlist);
      });

    });
  }

}
