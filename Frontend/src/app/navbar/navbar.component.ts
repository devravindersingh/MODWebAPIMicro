import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {

  isLoggedIn : boolean = false;
  LoginSub: Subscription;
  constructor(private auth:AuthService) {
    this.LoginSub = this.auth.isActive.subscribe(p =>{
      this.isLoggedIn = p;
    })
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.LoginSub.unsubscribe();
  }
  doLogout(){
    this.auth.logout();
  }
}
