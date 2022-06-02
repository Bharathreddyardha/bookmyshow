import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  imageSource:any=["assets/images/mumbai.avif",
  "assets/images/ahd.avif",
  "assets/images/bang.avif",
  "assets/images/chd.avif",
  "assets/images/chen.avif",
  "assets/images/hyd-selected.avif",
  "assets/images/koch.avif",
  "assets/images/kolk.avif",
  "assets/images/ncr.avif",
  "assets/images/pune.avif"]
  imageName:string[]=[
    "Mumbai","Ahmedabad","Bengaluru","Chandigarh","chennai","Hyderabad","Kochi","Kolkata","Delhi","Pune"
  ]
  name:string="Location";
  location(name:string){
    this.name=name;
  }
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
