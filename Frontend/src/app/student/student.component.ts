import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentDetail:any;
  isLoggedIn : boolean = false;
  LoginSub: Subscription;
  constructor(private auth: AuthService,private student : StudentService, private route : Router) {
    this.student.getStudentDetails(localStorage.id).subscribe(data => {
      this.studentDetail = data as string;
      console.log(data);
    })
    this.LoginSub = this.auth.isActive.subscribe(p =>{
      console.log(p);
      this.isLoggedIn = p;
    })
   }

  ngOnInit() {
    
  }

  goStudent(){
    this.route.navigate(['searchCourses']);
  }

  goReq(){
    this.route.navigate(['mySCourses']);
  }

}
