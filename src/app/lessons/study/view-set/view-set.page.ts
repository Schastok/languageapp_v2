import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../../api.service';
import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
//import { FlipModule } from 'ngx-flip';




function remove(array, element) {
  const index = array.indexOf(element);
  array.splice(index, 1);
}

@Component({
  selector: 'app-view-set',
  templateUrl: './view-set.page.html',
  styleUrls: ['./view-set.page.scss'],
})
export class ViewSetPage implements OnInit {

    lessonId;
    flipcardset;
    showside;
    didInit = false;
    slideOpts = {
    //  slidesPerView: 1.1,
      initialSlide: 1,
      speed: 400
    };
    loading = true;
    training = false;
    training_1 = false;
    training_2 = false;
    training_text = "";
    constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private renderer: Renderer2) {

    }


    ngOnInit() {
      console.log('TEST');
      this.showside = 0;
      this.training = true;
      console.log('Training');
      this.activatedRoute.paramMap.subscribe(paramMap => {
        if(!paramMap.has('lessonId')){
          //redirect
          return;
        }
        this.lessonId = paramMap.get('lessonId');
      });

      this.apiService.getFlipcardlist(this.lessonId).subscribe((data)=>{
        console.log(data);
        this.flipcardset = data;
        this.loading = false;

        if(this.training){
          this.training_1 = true;
          this.training_text = "Tap on the card to flip";
        }

      });
    }

    ngAfterViewInit() {
        this.didInit = true;
    }

 changeshowside(event:any){
   console.log("current side");
   console.log(this.showside);
   if(this.training){
     this.training_1 = false;
     this.training_2 = true;

     this.training_text = "Tap on the card to flip"
   }
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
 slide(event:any){
   console.log("slide!");
   console.log(this.showside);
   console.log(this.training);
   if(this.training && this.showside === 1){
   this.training_2 = false;
   this.training = false;
 }
   this.showside = 0;
   if(this.training){
   this.training_2 = false;
   //this.training = false;
 }
   }


}
