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
      initialSlide: 1,
      speed: 400
    };

    constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private renderer: Renderer2) {

    }


    ngOnInit() {
      console.log('TEST');
      this.showside = 0;
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
      });
    }

    ngAfterViewInit() {
        this.didInit = true;
    }

 changeshowside(event:any){
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
 slide(event:any){
   console.log("slide!");
   this.showside = 0;
   }


}
