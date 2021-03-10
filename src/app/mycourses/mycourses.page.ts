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


@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.page.html',
  styleUrls: ['./mycourses.page.scss'],
})
export class MycoursesPage implements OnInit {

  courses;

  constructor(private router: Router, private apiService: ApiService,  private storage: Storage, private platform: Platform, private routerOutlet: IonRouterOutlet, private navigationBar: NavigationBar, private statusBar: StatusBar) { }

  ngOnInit() {
    this.apiService.getstudentcls().subscribe((data)=>{
      console.log(data);
      this.courses = data;
    });
  }

enter_cl(cl_id){
  this.apiService.PROJECT_ID = cl_id;

  this.router.navigate(['/lessons']);
}

all_cl(){

  let objToSend: NavigationExtras = this.courses;
  this.router.navigate(['/courses'], {
      state: { mycourses: objToSend }
    });
}


}
