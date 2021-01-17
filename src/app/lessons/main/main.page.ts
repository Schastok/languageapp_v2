import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  lessonId: string;
  lessonImage;
  lessonDescription;
  lessonName;

  sections;
  exercises;
  flipcardlist;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('lessonId')){
        //redirect
        return;
      }
      if(!paramMap.has('lessonImage')){
        //redirect
        return;
      }
      if(!paramMap.has('lessonDescription')){
        //redirect
        return;
      }
      if(!paramMap.has('lessonName')){
        //redirect
        return;
      }
      this.lessonId = paramMap.get('lessonId');
      this.lessonImage = paramMap.get('lessonImage');
      this.lessonDescription = paramMap.get('lessonDescription');
      this.lessonName = paramMap.get('lessonName');
      console.log(this.lessonId);

      this.apiService.getSections(this.lessonId).subscribe((data)=>{
        console.log(data);
        this.sections = data;
        console.log(this.sections);
      });
      this.apiService.getExerciselist(this.lessonId).subscribe((data)=>{
        console.log(data);
        this.exercises = data;
        console.log(this.exercises);
      });
      this.apiService.getFlipcardlist(this.lessonId).subscribe((data)=>{
        console.log('data pulled: ')
        console.log(data);
        this.flipcardlist = data;
        console.log(this.flipcardlist);
      });
    });
  }

  getColor(index:any){
    var colordict = {0: "#F77B6E", 1:"#FCCE38", 2:"#4F71EC", 3:"#10D398"}
    return colordict[index]
    }
    getColor2(index:any){
      var colordict = {3: "#F77B6E", 2:"#FCCE38", 1:"#4F71EC", 0:"#10D398"}
      return colordict[index]
      }

}
