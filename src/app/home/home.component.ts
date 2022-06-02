import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies:any=[
    {"image":"assets/images/portrait.avif","name":"F3:Fun and Frustration"},
    {"image":"assets/images/portrait1.avif","name":"MAJOR"},
    {"image":"assets/images/portrait2.avif","name":"Vikram"},
    {"image":"assets/images/portrait3.avif","name":"Samrat Prithviraj"},
    {"image":"assets/images/portrait4.avif","name":"Jurassic World"},
    {"image":"assets/images/portrait5.avif","name":"Sarkaru Vaari Paata"},
    {"image":"assets/images/portrait6.avif","name":"Bhool Bhulaiyaa 2"},
    {"image":"assets/images/portrait7.avif","name":"Top Gun"},
    {"image":"assets/images/portrait8.avif","name":"Anek"},
    {"image":"assets/images/portrait9.avif","name":"Doctor Strange"},
  ]
  bests:any=[
    "assets/images/best.avif",
    "assets/images/best1.avif",
    "assets/images/best2.avif",
    "assets/images/best3.avif",
    "assets/images/best4.avif",
    "assets/images/best5.avif",
    "assets/images/best6.avif",
    "assets/images/best7.avif",
    "assets/images/best8.avif",
    "assets/images/best9.avif",
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
