import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input = "";

  results = [];

  
  constructor(public http: HttpClient){}

  search = () => {
    console.log("hii");
    this.http.get("http://www.omdbapi.com/?apikey=1e2be209&s=" + this.input).subscribe( (data) => {

    this.results = data.Search;

    });
  }
  
}
