import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit , OnDestroy{

  isLoggedIn : boolean = false;
  LoginSub: Subscription;
  studentsCount: any;
  mentorsCount: any;
  usersCount: any;
  coursesCount: any;
  techsCount: any;

  constructor(private adminService: AdminService ,private auth: AuthService, private route: Router) {
    // this.adminService.getCountAll().subscribe();
    this.LoginSub = this.auth.isActive.subscribe(p =>{
      console.log(p);
      this.isLoggedIn = p;
   });

   this.adminService.getCountAll().subscribe(p=>{
     console.log(p.students);
    this.studentsCount = p.students;
    this.mentorsCount = p.mentors;
    this.usersCount = p.users;
    this.coursesCount = p.courses;
    this.techsCount = p.technologies;
   });
  }

  ngOnInit() {
    this.auth.isLoggedIn();
    if(this.isLoggedIn){

    }else{
      this.route.navigate(['']);
    }
  }

  ngOnDestroy(){
    this.LoginSub.unsubscribe();
  }

  goStudent(){
    this.route.navigate(['allStudents']);
  }
  goMentors(){
    this.route.navigate(['allMentors']);
  }
  goUsers(){
    this.route.navigate(['allUsers']);
  }
  goCourses(){
    this.route.navigate(['allCourses']);
  }
  goTech(){
    this.route.navigate(['allTechnologies']);
  }
  addTech(){
    this.route.navigate(['addTech']);
  }

}

