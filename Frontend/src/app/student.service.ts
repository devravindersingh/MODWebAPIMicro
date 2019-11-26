import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _getStudent = "https://localhost:44348/studentservice/";
  private _getSearch = "https://localhost:44348/studentservice/searchWP";
  private _getAllSearch = "https://localhost:44348/studentservice/search";
  private _makeReq = "https://localhost:44348/studentservice/PostRequest";
  private _getAllReq = "https://localhost:44348/studentservice/request/";
  private _upReq = "https://localhost:44348/studentservice/PutRequest";

  constructor(private http: HttpClient) { }

  getStudentDetails(id){
    return this.http.get<any>(this._getStudent+id);
  }

  getAllSearch(){
    return this.http.get<any>(this._getAllSearch);
  }

  getSearch(searchQuery){
    return this.http.post<any>(this._getSearch, searchQuery);
  }

  makeReq(model){
    return this.http.post<any>(this._makeReq, model);
  }

  getAllReq(id){
    return this.http.get<any>(this._getAllReq+id);
  }

  upReq(model){
    return this.http.put<any>(this._upReq,model);
  }
}


