import { Component, OnInit } from '@angular/core';
import { MentorService } from '../mentor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-view-course',
  templateUrl: './mentor-view-course.component.html',
  styleUrls: ['./mentor-view-course.component.css']
})
export class MentorViewCourseComponent implements OnInit {

  allMyCourse: any;
  constructor( private mentor : MentorService, private route: Router) {
      this.mentor.getAllCourse(localStorage.id).subscribe(data=>{
        this.allMyCourse = data as string;
      });
  }
    

  ngOnInit() {
  }
}

