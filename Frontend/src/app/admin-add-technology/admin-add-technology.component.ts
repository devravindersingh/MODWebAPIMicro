import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-technology',
  templateUrl: './admin-add-technology.component.html',
  styleUrls: ['./admin-add-technology.component.css']
})
export class AdminAddTechnologyComponent implements OnInit {

  constructor(private admin: AdminService, private route : Router ) { }

  ngOnInit() {
  }

  addTechn(e: NgForm){
    this.admin.addTech(e.value).subscribe();
    this.route.navigate(['admin']);    
  }

}
