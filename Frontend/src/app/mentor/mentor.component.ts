import { Component, OnInit } from '@angular/core';
import { MentorService } from '../mentor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  mentorDetail:any;
  mentorReq: any;
  reqCount: any;
  constructor( private mentor : MentorService, private route : Router ) { 
    this.mentor.getMentorDetail(localStorage.id).subscribe(data => {
      this.mentorDetail = data as string;
    })
    this.mentor.getCountReq(localStorage.id).subscribe(data=>{
      this.reqCount = data as number;
    })
  }

  ngOnInit() {
  }

  goAddCourse(){
    console.log("go to add ")
    this.route.navigate(['/addCourse']);
  }

  goProfileUpdate(){

  }

  goCourses(){
    this.route.navigate(['/myCourses']);
  }

  goNotif(){
    this.route.navigate(['/notifications']);
  }





}
