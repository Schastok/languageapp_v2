

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
//import { NavigationBarColor } from 'ionic-plugin-navigation-bar-color';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;
//import { AudioService } from '../services/audio.service';
import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';



@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage {

  lessons;
  lessonprogress= {};
  didInit = false;
  sliderConfig = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true
};

  constructor(private admobFree: AdMobFree, private apiService: ApiService,  private storage: Storage, private platform: Platform, private routerOutlet: IonRouterOutlet, private navigationBar: NavigationBar, private statusBar: StatusBar){

    this.platform.backButton.subscribeWithPriority(-1, () => {
      console.log("HW button pressed, exiting....")
        App.exitApp();
    });

  }



  ngAfterViewInit() {
      this.didInit = true;


  }


  ionViewDidEnter(){


    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#005f69');



    this.apiService.getLessons().subscribe((data)=>{
      console.log(data);
      this.lessons = data;
      console.log(this.lessons);

      let l_arr = Object.keys(this.lessons);
      for(let i = 0; i < l_arr.length; i++){
        let lessonid = this.lessons[l_arr[i]].Lessons_ID;
        this.lessonprogress[lessonid] = 0;

        this.storage.get(this.apiService.STUDENT_ID + '_prog_' + lessonid).then((val) => {
          console.log("progress found for lesson ", lessonid);
          console.log("progress: ",  val);
          if (val === null){
            val = 0;
          }
          this.lessonprogress[lessonid] = val;
          console.log(this.lessonprogress);
              },
              error => console.log(error)
            );




      }


    });










  }
}
