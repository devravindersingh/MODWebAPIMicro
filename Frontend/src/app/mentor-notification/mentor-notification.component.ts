import { Component, OnInit } from '@angular/core';
import { MentorService } from '../mentor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-notification',
  templateUrl: './mentor-notification.component.html',
  styleUrls: ['./mentor-notification.component.css']
})
export class MentorNotificationComponent implements OnInit {

  mentorReq: any;
  Request = "Request";
  Payment = "Payment";
  Accept = "Accept";
  Reject = "Reject";
  requestObj: any = {};
  constructor(private mentor : MentorService, private route : Router) { 
    this.getAllMentor();
  }

  getAllMentor(){
    this.mentor.getAllReq(localStorage.id).subscribe(data=>{
      this.mentorReq = data as string; 
    });
  }

  ngOnInit() {
  }

  acceptReq(id){
    this.requestObj.id = id;
    this.requestObj.status = this.Accept;
    this.mentor.upReq(this.requestObj).subscribe(data=>{
      console.log("working");
      this.getAllMentor();
    })
  }

  rejectReq(id){
    this.requestObj.id = id;
    this.requestObj.status = this.Reject;
    this.mentor.upReq(this.requestObj).subscribe(data=>{
      this.getAllMentor();
    })
  }

}
