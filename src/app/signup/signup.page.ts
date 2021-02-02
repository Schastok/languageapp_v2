import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

errors = [];
errorkeys = [];
errorobj;
pw_error;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit() {}

  signup(){
    this.errors = [];
    this.errorkeys = [];
    this.pw_error= '';
    let username = (document.getElementById('username') as HTMLInputElement).value;
    let password1 = (document.getElementById('password1')as HTMLInputElement).value;
    let password2 = (document.getElementById('password2')as HTMLInputElement).value;
    if (password1 === password2){
      let email = (document.getElementById('email')as HTMLInputElement).value;
      let first_name = (document.getElementById('first_name')as HTMLInputElement).value;
      console.log(first_name);
      this.apiService.register(username, password1, first_name, email).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/login']);
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
    else{
      this.pw_error = 'passwords are not identical'
      return
    }




  }

}
