import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  characters: any[] = [];

  page: number = 1

  buttons: Array<PoButtonGroupItem> = [
    { label: 'Voltar', action: this.previousPage.bind(this) },
    { label: 'Proximo', action: this.nextPage.bind(this) },

  ]

  menu: Array<any> = [
    { label: 'Home', link: '/' },
    { label: 'Single', link: '/single' },
  ]

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.callPerson()
  }

  callPerson(){
    this.http.get<any>(`${environment.api}/character/?page=${this.page}`).subscribe((response) => {
      this.characters = response.results;
    })
  }

  previousPage(button: any){
    if(this.page > 1){
      this.page -= 1;
      this.callPerson()
      console.log(this.page)
    }
  }
  nextPage(button: any){
    if(this.page < 42){
    this.page += 1;
    this.callPerson()
    }
  }


}
