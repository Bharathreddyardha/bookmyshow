import { Component, OnInit } from '@angular/core';
import { LanguageServiceService } from 'src/app/language-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  location:string="Location";
  constructor(private languageservice:LanguageServiceService) {
    this.languageservice.getData().subscribe(
      (data:any)=>{this.location=data},
      (error:any)=>{alert("Cannot get your location")}

    )
   }

  ngOnInit(): void {
  }

}
