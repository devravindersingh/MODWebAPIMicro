import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-search',
  templateUrl: './guest-search.component.html',
  styleUrls: ['./guest-search.component.css']
})
export class GuestSearchComponent implements OnInit {

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
  constructor(private event : EventService, private aroute: ActivatedRoute, private route: Router) {
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
        this.event.getAllSearchGuest().subscribe(data=>{
          this.courseArray = data;
          console.log(data);
        });
      }else{
          this.event.getGuestSearch(({
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

  guestSearch(d){
    this.route.navigate(['guest',this.dId,this.tId]);
  }

}
