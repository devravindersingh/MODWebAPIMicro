import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-add-course',
  templateUrl: './mentor-add-course.component.html',
  styleUrls: ['./mentor-add-course.component.css']
})
export class MentorAddCourseComponent implements OnInit {

  technology = "Technology";
  tId = 0;
  duration = "Duration"
  dId = 100;
  technologyData:any [];
  durationData = ['1','2','3','4','5','6','7'];
  selected = null;
  constructor(private event : EventService, private route : Router, private mentor : MentorService) { 
    this.event.getTecnologies().subscribe(data=>{
      this.technologyData = data as string[];
    });
  }

  ngOnInit() {
  }

  changeTechnology(name, id){
    this.technology = name;
    this.tId = id;
    
  }

  changeDuration(name, id){
    this.duration = name;
    this.dId = +id;
  
  }

  registerCourse(e:NgForm){
    e.value.Tid = this.tId,
    e.value.CDuration = this.dId,
    e.value.Mid = localStorage.id
    console.log(e.value);
    this.mentor.addCourse(e.value)
    .subscribe(
      res => this.route.navigate(['/mentor']),
      err => this.route.navigate(['/mentor'])
    );
  }

}
