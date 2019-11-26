import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-admin-view-all-technology',
  templateUrl: './admin-view-all-technology.component.html',
  styleUrls: ['./admin-view-all-technology.component.css']
})
export class AdminViewAllTechnologyComponent implements OnInit {

  allTech: any;
  constructor( private admin : AdminService) {
    this.admin.getAllTech().subscribe(data=>{
      this.allTech = data as string;
    })
   }

  ngOnInit() {
  }

}
