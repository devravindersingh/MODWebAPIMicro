import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-view-course',
  templateUrl: './student-view-course.component.html',
  styleUrls: ['./student-view-course.component.css']
})
export class StudentViewCourseComponent implements OnInit {

  allReq: any;
  Request = "Request";
  Accept = "Accept";
  Reject = "Reject";
  Payment = "Payment";
  PaymentDone = "Payment Done"
  requestObj: any = {};
  constructor( private student : StudentService, private route: Router ) { 
    console.log(localStorage.id);
    this.getAllReqs();
  }

  ngOnInit() {
  }

  getAllReqs(){
    this.student.getAllReq(localStorage.id).subscribe(data=>{
      this.allReq = data as string;
      console.log(this.allReq);
    });
  }

  PaymentReq(id){
    this.requestObj.id = id;
    this.requestObj.status = this.PaymentDone;
    this.student.upReq(this.requestObj).subscribe(data=>{
      console.log("working");
      

    }),
    err => this.getAllReqs();
  }

}
