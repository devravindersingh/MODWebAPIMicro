import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-admin-view-all-students',
  templateUrl: './admin-view-all-students.component.html',
  styleUrls: ['./admin-view-all-students.component.css']
})
export class AdminViewAllStudentsComponent implements OnInit {

  studentData: any [];
  constructor( private admin : AdminService) {
    this.getdata();
    }
   

  ngOnInit() {
  }

  toggleIt(id){
    
    this.admin.toggleBlock(id).subscribe(data=>{
      this.getdata();
    });
    

  }

  getdata(){
    this.admin.getAllStudents().subscribe(data=>{
      this.studentData = data as string[];
      
    })
  }

}
