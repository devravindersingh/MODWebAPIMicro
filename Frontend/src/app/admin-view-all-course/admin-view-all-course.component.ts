import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'

@Component({
  selector: 'app-admin-view-all-course',
  templateUrl: './admin-view-all-course.component.html',
  styleUrls: ['./admin-view-all-course.component.css']
})
export class AdminViewAllCourseComponent implements OnInit {

  allCourses: any;
  constructor(private admin : StudentService) {
    this.admin.getAllSearch().subscribe(data=>{
      this.allCourses = data as string;
    })
   }

  ngOnInit() {
  }

}
