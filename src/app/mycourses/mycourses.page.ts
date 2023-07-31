import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
//import { NavigationBarColor } from 'ionic-plugin-navigation-bar-color';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;
import { Router, NavigationExtras} from '@angular/router';
import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';


@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.page.html',
  styleUrls: ['./mycourses.page.scss'],
})
export class MycoursesPage implements OnInit {

  courses;
  ready = false;

  constructor(private admobFree: AdMobFree, private router: Router, private apiService: ApiService,  private storage: Storage, private platform: Platform, private routerOutlet: IonRouterOutlet, private navigationBar: NavigationBar, private statusBar: StatusBar) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      console.log("HW button pressed, exiting....")
        App.exitApp();
    });
   }

  ngOnInit() {



  }


  ngAfterViewInit() {
       /*

    let bannerConfig: AdMobFreeBannerConfig = {
              isTesting: true, // Remove in production
              autoShow: true//,
              //id: "ca-app-pub-3940256099942544/6300978111"
          };
          this.admobFree.banner.config(bannerConfig);

          this.admobFree.banner.prepare().then(() => {
              // success
          }).catch(e => alert(e));
 */
  }


  ionViewWillEnter(){




    this.apiService.getstudentcls().subscribe((data)=>{
      console.log(data);
      this.courses = data;
      this.apiService.CLASSROOM_DATA = data;
      this.ready = true;
    });
  }

enter_cl(cl_id){
  this.apiService.CLASSROOM_ID = cl_id;
  this.router.navigate(['/lessons']);
}

all_cl(){

  let objToSend: NavigationExtras = this.courses;
  this.router.navigate(['/courses'], {
      state: { mycourses: objToSend }
    });
}


}
