import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
//import { NavigationBarColor } from 'ionic-plugin-navigation-bar-color';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  courses;
  extradata;
  mycourses = [];


  constructor(private activatedRoute: ActivatedRoute, private router: Router, public alertController: AlertController, private apiService: ApiService,  private storage: Storage, private platform: Platform, private routerOutlet: IonRouterOutlet, private navigationBar: NavigationBar, private statusBar: StatusBar) {

    this.activatedRoute.queryParams.subscribe(params => {
       if (this.router.getCurrentNavigation().extras.state) {
         this.extradata = this.router.getCurrentNavigation().extras.state.mycourses;


       }
     });

   }

  ngOnInit() {

    this.apiService.getcls().subscribe((data)=>{
      console.log(data);
      console.log('extradata: ', this.extradata);
      this.courses = data;
      for (const [key, value] of Object.entries(this.extradata)) {
         this.mycourses.push(value['Classroom_ID']);
         }
    });

  }

validated(Classroom_ID){
  return this.mycourses.includes(Classroom_ID);
}

}
