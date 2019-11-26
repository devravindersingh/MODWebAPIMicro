import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  
  private _getMentor = "https://localhost:5001/api/mentors/";
  private _addCourse = "https://localhost:5001/api/mentors";
  private _allMyCourse = "https://localhost:5001/api/mentors/myCourses/";
  private _allReq =  "https://localhost:5001/api/mentors/request/";
  private _allCountReq = "https://localhost:5001/api/mentors/count/";
  private _upReq = "https://localhost:5001/api/mentors/requestUp/";

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
