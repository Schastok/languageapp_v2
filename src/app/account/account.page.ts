import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  username;
  subscription_model;
  creation_date;
  change_date;
  payment_method;
  account;
  status;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private storage: Storage, private router: Router) { }

  ngOnInit() {





  }

  ionViewDidEnter() {
  console.log('ionViewDidEnter ');
  this.apiService.getaccountdetails().subscribe((data)=>{
    console.log(data);
    this.account = data[0];
    this.username= this.account.username;
    this.subscription_model= this.account.subscription_model;
    this.creation_date= this.account.creation_date;
    this.change_date= this.account.change_date;
    this.payment_method= this.account.payment_method;
    this.status = this.account.status;

  });
}

}
