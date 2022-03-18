import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  characters: any[] = [];
  
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){
  }
   ngOnInit(){
    this.http.get<any>(`https://rickandmortyapi.com/api/character/?page=20`).subscribe((response) => {
      console.log(response);
      this.characters = response.results;
    })
  
}


}