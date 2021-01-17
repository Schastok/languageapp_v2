//import { Component, OnInit} from '@angular/core';
import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../../../api.service';
import { IonContent } from '@ionic/angular';
import {IonSlides} from '@ionic/angular';


@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
})



export class SectionPage implements OnInit{


  disablePrevBtn = true;
  disableNextBtn = true;

  sectionId;
  sectiondetails;

  slideConfig = {
      slidesPerView: 1,
      centeredSlides: true,
      autoHeight: true
    };

@ViewChild(IonSlides, {static: false}) IonSlides: IonSlides;
@ViewChild(IonContent, {static: false}) IonContent: IonContent;


  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router) {}



  ionViewDidEnter(){
    this.IonSlides.lockSwipes(true);
    this.IonSlides.getActiveIndex().then((index: number) => {
        console.log(index);
    });


  }
  ngOnInit() {



    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('sectionId')){
        //redirect
        return;
      }
      this.sectionId = paramMap.get('sectionId');
    });

    this.apiService.getSection_details(this.sectionId).subscribe((data)=>{
      console.log(data);
      if (Object.values(data).length >= 2){
  this.disableNextBtn = false;
}
      this.sectiondetails = data;
      for (let slide of this.sectiondetails) {

        if (slide.type=="text"){
          //          slide.content = slide.content.replace(new RegExp('<img style="(.+?)"(.+?)width="(.+?)" height="(.+?)">', 'g'), '<img style="$1width=$3;height=$4;" $2>', 'g');
          slide.content = slide.content.replace(new RegExp('<img style="(.+?)"(.+?)width="(.+?)" height="(.+?)".+?>', 'g'), '<img $2 style="$1width:$3px;height:$4px;">', 'g');
          slide.content = slide.content.replace(new RegExp('<img src="(.+?)"(.+?)width="(.+?)" height="(.+?)".+?>', 'g'), '<img src="$1" $2 style="width:$3px;height:$4px;">', 'g');
          slide.content = slide.content.replace(new RegExp('href="#', 'g'), 'href="' + this.router.url + '#', 'g');
          if(this.apiService.TEST){
          slide.content = slide.content.replace(new RegExp('../../media/', 'g'), 'http://localhost:8000/media/', 'g');
          //slide.content = slide.content.replace(new RegExp('https://www.e-fluent.com/media/', 'g'), 'http://localhost:8000/media/', 'g');
          }
          else{
            slide.content = slide.content.replace(new RegExp('../../media/', 'g'), 'https://www.e-fluent.com/media/', 'g');
          }
        }
      };
      //this.sectiondetails = this.html.replace(new RegExp('/media/', 'g'), 'https://www.e-fluent.com/media/', 'g');
      //console.log(this.sectiondetails);

    });


  }

ncheck(){
  this.IonSlides.getActiveIndex().then((index: number) => {
      let pageindex = index.toString();

  const ncheck = document.getElementsByClassName("ncheck");
  console.log(ncheck.length);
  if (ncheck.length > 0){
    var disablenext = false
    for (let i = 0; i < ncheck.length; i++) {
      console.log(ncheck[i])
        if (ncheck[i].id.startsWith('n' + pageindex)){
          if (!ncheck[i].hasAttribute('viewed')){
            disablenext = true;
          }
          else if (ncheck[i].getAttribute('viewed') == 'false') {
            disablenext = true;
          }
          else{
          }
        console.log(disablenext);
        }
        else{
        }

    }

    if (disablenext){
      let next = document.getElementById("nav-next")
      next.setAttribute("disabled", "true");
    }
    else{
      let next = document.getElementById("nav-next")
      next.setAttribute("disabled", "false");
    }
    }
      });


};

next()
{
  console.log("START: ", this.IonSlides.isBeginning());
  this.IonSlides.lockSwipes(false);
  this.IonSlides.slideNext();
  //console.log(this.IonContent);
  this.IonContent.scrollToTop();
  this.IonSlides.lockSwipes(true)
  this.doCheck()
  this.IonSlides.getActiveIndex().then((index: number) => {
      console.log(index);
      let pageindex = index.toString();

  const ncheck = document.getElementsByClassName("ncheck");
  console.log(ncheck.length);
  if (ncheck.length > 0){
    var disablenext = false
    for (let i = 0; i < ncheck.length; i++) {
      console.log(ncheck[i])
      ncheck[i].addEventListener("click", (event: Event) => {
        let target = event.target as HTMLElement;
        target.setAttribute("viewed", "true");
        this.ncheck();



      });
        if (ncheck[i].id.startsWith('n' + pageindex)){
          if (!ncheck[i].hasAttribute('viewed')){
            disablenext = true;
          }
          else if (ncheck[i].getAttribute('viewed') == 'false') {
            disablenext = true;
          }
          else{
          }
        }
        else{
        }

    }

    if (disablenext){
      let next = document.getElementById("nav-next")
      next.setAttribute("disabled", "true");
    }
    else{
      let next = document.getElementById("nav-next")
      next.setAttribute("disabled", "false");
    }
    }
      });

}

back()
{

  this.IonSlides.lockSwipes(false);
  this.IonSlides.slidePrev();
  this.IonContent.scrollToTop();
  this.IonSlides.lockSwipes(true);
  this.doCheck()
  if(!this.disableNextBtn){
  let next = document.getElementById("nav-next")
  next.setAttribute("disabled", "false");}

}

doCheck() {
  let prom1 = this.IonSlides.isBeginning();
  let prom2 = this.IonSlides.isEnd();

  Promise.all([prom1, prom2]).then((data) => {
    data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
    data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
  });
}


}
