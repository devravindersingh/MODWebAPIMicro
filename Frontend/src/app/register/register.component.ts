import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  toggleHide: boolean = false;
  constructor(private _auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  registerToggle() {
    console.log("working");
    this.toggleHide = !this.toggleHide;
  }

  registerUser(e:NgForm){
    
    if(e.value.Role == 3){
      e.value.Skill = "";
      e.value.Experience = "";
    }
    this._auth.registerUser(e.value)
    .subscribe(
      res => {console.log(res); this.route.navigate(['/login',1]); },
      err => console.log(err)
    );
  }

}
