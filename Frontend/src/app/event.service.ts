import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _getTechnology = "https://localhost:44348/adminservice/Technolgies";
  private _getGuestSearch = "https://localhost:44348/studentservice/searchWP";
  private _getAllSearch = "https://localhost:44348/studentservice/search"
  constructor(private http: HttpClient) {

  }

  getAllSearchGuest(){
    return this.http.get<any>(this._getAllSearch);
  }

  getGuestSearch(searchQuery){
    return this.http.post<any>(this._getGuestSearch, searchQuery);
  }

  getTecnologies(){
    return this.http.get<any>(this._getTechnology);
  }
}
