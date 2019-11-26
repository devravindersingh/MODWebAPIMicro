import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _countAll = "https://localhost:44348/adminservice/count";
  private _getAllUsers = "https://localhost:44348/adminservice/Users";
  private _getAllStudents = "https://localhost:44348/adminservice/students";
  private _getAllMentors = "https://localhost:44348/adminservice/mentors";
  private _getAllTechnolgies = "https://localhost:44348/adminservice/Technolgies";
  private _addTechnolgies = "https://localhost:44348/adminservice/addTech";
  private _deleteTechnolgies = "https://localhost:44348/adminservice/delTech";
  private _toggleBlock = "https://localhost:44348/adminservice/toggleBlock/";
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
