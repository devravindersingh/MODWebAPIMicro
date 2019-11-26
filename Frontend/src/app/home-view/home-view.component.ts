import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  technology = "Technology";
  tId = 0;
  duration = "Duration"
  dId = 100;
  technologyData:any [];
  durationData = ['1','2','3','4','5','6','7'];
  selected = null;
  saerchData = {};
  showpointerclass = true;
  pointertoggle(){
    this.showpointerclass = false;
  }
  constructor(private event : EventService, private route : Router ) {
    this.event.getTecnologies().subscribe(data=>{
      this.technologyData = data as string[];
    });
    console.log(this.technologyData);
   }

  ngOnInit() {
  }

  changeTechnology(name, id){
    this.technology = name;
    this.tId = id;
    console.log(name + " " + id);
    this.pointertoggle();
  }

  changeDuration(name, id){
    this.duration = name;
    this.dId = +id;
    console.log(typeof(this.dId));
  }

  guestSearch(d){
    this.route.navigate(['guest',this.dId,this.tId]);
  }

  

}
