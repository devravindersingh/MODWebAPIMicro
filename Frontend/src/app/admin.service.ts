import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _countAll = "https://localhost:5001/api/admin/count";
  private _getAllUsers = "https://localhost:5001/api/admin/Users";
  private _getAllStudents = "https://localhost:5001/api/admin/students";
  private _getAllMentors = "https://localhost:5001/api/admin/mentors";
  private _getAllTechnolgies = "https://localhost:5001/api/admin/Technolgies";
  private _addTechnolgies = "https://localhost:5001/api/admin/addTech";
  private _deleteTechnolgies = "https://localhost:5001/api/admin/delTech";
  private _toggleBlock = "https://localhost:5001/api/admin/toggleBlock/";
  constructor(private http: HttpClient) { }

  getCountAll(){
    return this.http.get<any>(this._countAll);
  }

  getAllUsers(){
    return this.http.get<any>(this._getAllUsers);
  }

  getAllStudents(){
    return this.http.get<any>(this._getAllStudents);
  }

  getAllMentors(){
    return this.http.get<any>(this._getAllMentors);
  }

  getAllTech(){
    return this.http.get<any>(this._getAllTechnolgies)
  }

  addTech(tech){
    return this.http.post(this._addTechnolgies,tech);
  }

  delTech(id){
    return this.http.delete(this._deleteTechnolgies, id);
  }

  toggleBlock(id){
    return this.http.get<any>(this._toggleBlock+id);
  }


}
