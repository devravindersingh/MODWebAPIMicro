import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-admin-view-all-mentors',
  templateUrl: './admin-view-all-mentors.component.html',
  styleUrls: ['./admin-view-all-mentors.component.css']
})
export class AdminViewAllMentorsComponent implements OnInit {
 
  mentorData: any[];
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
    this.admin.getAllMentors().subscribe(data=>{
      this.mentorData = data as string[];
      
    })
  }


}
