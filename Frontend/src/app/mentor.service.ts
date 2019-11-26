import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  
  private _getMentor = "https://localhost:44348/mentorservice/";
  private _addCourse = "https://localhost:44348/mentorservice";
  private _allMyCourse = "https://localhost:44348/mentorservice/myCourses/";
  private _allReq =  "https://localhost:44348/mentorservice/request/";
  private _allCountReq = "https://localhost:44348/mentorservice/count/";
  private _upReq = "https://localhost:44348/mentorservice/requestUp/";

  constructor(private http: HttpClient) { }

  getMentorDetail(id){
    return this.http.get<any>(this._getMentor+id);
  }

  addCourse(model){
    return this.http.post<any>(this._addCourse, model);
  }

  getAllCourse(model){
    return this.http.get<any>(this._allMyCourse+model);
  }
  
  getAllReq(id){
    return this.http.get<any>(this._allReq+id);
  }

  getCountReq(id){
    return this.http.get<any>(this._allCountReq+id);
  }

  upReq(model){
    return this.http.put<any>(this._upReq,model);
  }
}
