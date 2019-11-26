import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    Email: "",
    Password: ""
  };
  showSuccess:boolean = false;
  constructor(private aroute: ActivatedRoute,private _auth: AuthService, private route: Router) {
    this.aroute.params.subscribe( params => {
      if(params.success == 1)
        this.showSuccess = true;
        
    });
  }


  ngOnInit() {
  }

  loginUser(e:NgForm){
    console.log(e.value);
    this.loginUserData.Email = e.value.Email;
    this.loginUserData.Password = e.value.Password;
    console.log(this.loginUserData);
    if(e.value.Role == 1){
      this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {console.log(res); 
        localStorage.setItem('key', res.key);
        localStorage.setItem('id',res.id);
        this.route.navigate(['/admin']); },
      err => console.log(err)
    );
    }
    else if(e.value.Role == 2){
      this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {console.log(res); 
        localStorage.setItem('key', res.key);
        localStorage.setItem('id',res.id);
         this.route.navigate(['/mentor']); },
      err => console.log(err)
    );
    }
    else{
      this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {console.log(res);
        localStorage.setItem('key', res.key);
        localStorage.setItem('id',res.id);
        this.route.navigate(['/student']); },
      err => console.log(err)
    );
    }
    
  }


}
