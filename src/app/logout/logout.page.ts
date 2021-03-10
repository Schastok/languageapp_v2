import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
//import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private storage: Storage, private router: Router) { }

  ngOnInit() {

    this.storage.remove('userid').then((val) => {
      this.storage.remove('key').then((val) => {
        this.storage.remove('username').then((val) => {
        this.router.navigate(['/login']);
        });
      });
    });


  }

}
