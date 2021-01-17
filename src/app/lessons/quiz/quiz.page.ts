import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../api.service';



@Component({
  selector: 'app-learn',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  lessonId: string;
  exercises;
  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('lessonId')){
        //redirect
        return;
      }
      this.lessonId = paramMap.get('lessonId');
      console.log("learn lesson");
    });

    this.apiService.getExerciselist(this.lessonId).subscribe((data)=>{
      console.log(data);
      this.exercises = data;
      console.log(this.exercises);
    });
  }

}
