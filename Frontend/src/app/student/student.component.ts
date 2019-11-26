import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentDetail:any;
  constructor(private student : StudentService, private route : Router) {
    this.student.getStudentDetails(localStorage.id).subscribe(data => {
      this.studentDetail = data as string;
      console.log(data);
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
