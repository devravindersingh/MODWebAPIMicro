import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-student-search-course',
  templateUrl: './student-search-course.component.html',
  styleUrls: ['./student-search-course.component.css']
})
export class StudentSearchCourseComponent implements OnInit {

  duration:any ;
  technology:any;
  techName = "Technology";
  durName = "Duration";
  courseArray = [];
  tId = 0;
  dId = 100;
  technologyData:any [];
  durationData = ['1','2','3','4','5','6','7'];
  selected = null;
  saerchData = {};
  showpointerclass = true;
  pointertoggle(){
    this.showpointerclass = false;
  }
  requestData: any = {};
  constructor( private event : EventService , private student: StudentService,private aroute: ActivatedRoute, private route: Router) { 
    this.event.getTecnologies().subscribe(data=>{
      this.technologyData = data as string[];
    });
    this.aroute.params.subscribe(p=>{
      this.duration = p.dur;
      this.technology = p.tech;
            // console.log(this.technologyData.filter(i=> i.id == p.tech));
      // console.log(this.duration + " " + this.technology);
      if(p.dur == undefined && p.tech == undefined){
        this.duration = "Duration";
        this.technology = "Technology";
        this.student.getAllSearch().subscribe(data=>{
          this.courseArray = data;
          console.log(data);
        });
      }else{
          this.student.getSearch(({
          "CDuration" : this.duration,
          "CTechnology" : this.technology
        })).subscribe(data => {
          this.courseArray = data;
          console.log(this.courseArray);
          this.tId = this.technology;
          this.dId = this.duration;
          this.duration = "Duration";
          this.technology = "Technology";
          
      });
      }
    });
  }

  ngOnInit() {
  }

  
  changeTechnology(name, id){
    this.technology = name;
    this.tId = id;
    this.pointertoggle();
    //console.log(name + " " + id);
  }

  changeDuration(name, id){
    this.duration = name;
    this.dId = +id;
    //console.log(typeof(this.dId));
  }

  studentSearch(d){
    this.route.navigate(['searchCourses',this.dId,this.tId]);
  }

  makeRequest(cid, mid){
    this.requestData.StudentId = localStorage.id,
    this.requestData.MentorId = mid,
    this.requestData.CourseId = cid,
    this.requestData.Status = "Request"
    // console.log(this.requestData);
    this.student.makeReq(this.requestData).subscribe();
    this.route.navigate(['student'])
  }
}
