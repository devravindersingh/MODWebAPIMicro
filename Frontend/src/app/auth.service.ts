import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isActive = new Subject<boolean>();
  private _regiterUrl = "https://localhost:5001/api/account/register";
  private _loginUrl = "https://localhost:5001/api/account/login";
  constructor(private http: HttpClient, private _router: Router) {
    this.isActive.next(false);
   }

  registerUser( user ){
    return this.http.post(this._regiterUrl, user);
  }

  loginUser( user ){
    return this.http.post<any>(this._loginUrl, user);
  }
  
  getToken() {
    return localStorage.getItem('key');
  }
  logout() {
    localStorage.removeItem('key');
    localStorage.removeItem('id');
    this._router.navigate(['']);
    this.isLoggedIn();
  }
  isLoggedIn(){
    if(localStorage.getItem('key') != null){
      console.log('Yes , Logged In');
      this.isActive.next(true);
    }else{
      this.isActive.next(false);
    }
  }
}
