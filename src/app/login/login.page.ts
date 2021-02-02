import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {


errors = [];
errorkeys = [];
errorobj;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private storage: Storage, private router: Router) { }

  ngOnInit() {  }

    login(){
      let username =   (document.getElementById('username') as HTMLInputElement).value;
      let password = (document.getElementById('password')as HTMLInputElement).value;
      this.apiService.STUDENT_NAME = username;
      //this.storage.set('username', username);
      this.apiService.authenticate(username, password).subscribe((data)=>{
        this.storage.set('key', data['token']);
        let storagekey = data['token']
        this.apiService.TOKEN = storagekey;
        this.router.navigate(['/lessons']);
      }, (error)=>{
        console.log("This is the error", error);
        this.errorobj = error;
        for (let i = 0; i < Object.keys(error).length; i++){
          let e = Object.keys(error)[i]
          if (e != 'client'){
          this.errors.push(error[e])
          this.errorkeys.push(e)
          }
        }
      });
      this.apiService.getuserid(username).subscribe((data)=>{
        this.storage.set('userid', data['id']);
        let storageuserid = data['id'];
        this.apiService.STUDENT_ID = storageuserid;
        console.log(data['id'])
      },
      (error)=>{
        console.log("This is the error", error);
        this.errorobj = error;
        for (let i = 0; i < Object.keys(error).length; i++){
          let e = Object.keys(error)[i]
          if (e != 'client'){
          this.errors.push(error[e])
          this.errorkeys.push(e)
          }
        }

      }
    );




    }



}
