import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;


@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.page.html',
  styleUrls: ['./authenticate.page.scss'],
})
export class AuthenticatePage implements OnInit {



credentials = {};


  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private storage: Storage, private router: Router, private platform: Platform, private routerOutlet: IonRouterOutlet) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      console.log("HW button pressed, exiting....")
        App.exitApp();
    });
}

  ngOnInit() {




    //this.storage.remove('userid');
    this.storage.get('userid').then((val) => {
      this.credentials['id'] = val;
    });
    this.storage.get('key').then((val) => {
      this.credentials['key'] = val;
    });
    this.storage.get('username').then((val) => {
      this.credentials['username'] = val;
    });

    autologin(this.storage, this.apiService, this.router);

 async function autologin(storage, apiService, router){
    let storagekey = await storage.get('key');
    let storageuserid = await storage.get('userid');
    let storageusername = await storage.get('username');
    console.log(storagekey);
    console.log(storageuserid);
    console.log(storageusername);
    if(storagekey && storageuserid && storageusername){
      console.log("Great, everything is there!!!!");
      apiService.TOKEN = storagekey;
      apiService.STUDENT_ID = storageuserid;
      apiService.STUDENT_NAME = storageusername;
      router.navigate(['/mycourses']);
    }
    else{
      console.log("ugh, i need to log in first...");
      router.navigate(['/login']);

      }
      return {}
    }

  }



}
