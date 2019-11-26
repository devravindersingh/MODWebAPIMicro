import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _getStudent = "https://localhost:5001/api/students/";
  private _getSearch = "https://localhost:5001/api/students/searchWP";
  private _getAllSearch = "https://localhost:5001/api/students/search";
  private _makeReq = "https://localhost:5001/api/students/PostRequest";
  private _getAllReq = "https://localhost:5001/api/students/request/";

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
}


