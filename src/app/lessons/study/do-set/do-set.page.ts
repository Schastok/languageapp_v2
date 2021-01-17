import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../../../api.service';
import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import { Location } from '@angular/common';

//import { FlipModule } from 'ngx-flip';

//Array.prototype.remove = function() {
//    var what, a = arguments, L = a.length, ax;
//    while (L && this.length) {
//        what = a[--L];
//        while ((ax = this.indexOf(what)) !== -1) {
//            this.splice(ax, 1);
//        }
//    }
//    return this;
//};




function remove(array, element) {
  const index = array.indexOf(element);
  array.splice(index, 1);
}

@Component({
  selector: 'app-do-set',
  templateUrl: './do-set.page.html',
  styleUrls: ['./do-set.page.scss'],
})
export class DoSetPage implements OnInit {

    lessonId;
    flipcardset;
    labelColor;
    empList = [];
    iscorrect;
    showid;
    currentcard;
    showside;
    finished;



    constructor(private location: Location, private activatedRoute: ActivatedRoute, private apiService: ApiService, private renderer: Renderer2, private router: Router) {

    }


    ngOnInit() {
      console.log("ngOnInit called")
      this.finished = false;
      this.showside = 0;
      this.activatedRoute.paramMap.subscribe(paramMap => {
        if(!paramMap.has('lessonId')){
          //redirect
          return;
        }
        this.lessonId = paramMap.get('lessonId');
      });

      this.apiService.getFlipcardset(this.lessonId).subscribe((data)=>{
        const set = Object.values(data);
        console.log('data pulled: ')
        console.log(set);
        this.flipcardset = set.filter(t=>t.multiplechoice_possible === 1);
        console.log('flipcarset init: ')
        console.log(this.flipcardset);
        if (this.flipcardset.length != 0){
        this.currentcard = this.flipcardset[0];
        this.showid = this.currentcard.flipcardID;
        console.log('showid: ')
        console.log(this.showid);}
        else{
          this.location.back();
        }
      });
    }


 checkanswer(answer, event, correct){
   console.log(window.getComputedStyle(event.target).background)
   console.log(event.target.getAttribute('ticked'))
   if(event.target.getAttribute('ticked') === 'true'){
     this.renderer.setStyle(event.target.parentNode, 'color', 'white');
     this.renderer.setAttribute(event.target, 'ticked', 'false');
     remove(this.empList, answer);
   }
   else{
   this.renderer.setStyle(event.target.parentNode , 'color', '#FCCE38');
   this.renderer.setAttribute(event.target, 'ticked', 'true');
   console.log(this.empList);
   this.empList.push(answer);
   console.log(this.empList);
   }
   const arr1 = this.empList.sort()
   const arr2 = correct.sort()
   this.iscorrect = JSON.stringify(arr1)===JSON.stringify(arr2);
   console.log(this.empList.sort())
   console.log(correct.sort())
   console.log(this.iscorrect)


 }

 changeshowside(event){
   console.log("current side");
   console.log(this.showside);
   if (this.showside === 0){
     console.log("flip to back");
     console.log(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('class'));
     this.showside = 1;
     //this.renderer.setAttribute(event.target.parentNode.parentNode.parentNode.parentNode, 'class', 'animated flipOutY md hydrated');

   }
   else{
     this.showside = 0;
     console.log("flip to front");
   }


 }

 submitanswer(progressid, status, event){
   this.changeshowside(event);
   console.log('progressid');
   console.log(progressid);
   var statusint;
   var statusstr;
   var answerlist;
   var progressidstr;

   if (this.flipcardset.length === 0){
     console.log('finished');
   }
   else{


   if(this.iscorrect === true){
     statusint = 1;
   }
   else{
     statusint = 0;
   }

   statusstr = statusint.toString();
   answerlist = this.empList.toString();
   this.empList = [];
   progressidstr = progressid.toString();
   statusint = Number(status);

   console.log('POST updateprogress for ');
   console.log(this.currentcard);
   this.apiService.postupdateprogress(progressidstr, statusstr, answerlist).subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });

   this.flipcardset.shift();
   this.currentcard = this.flipcardset[0];

  if (this.currentcard){
  this.showid = this.currentcard.flipcardID;
   }
   else{
     console.log('the end');
     this.finished = true;
   }
  }

 }

}
