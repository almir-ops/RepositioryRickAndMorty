import { Component, OnInit } from '@angular/core';
import { PoButtonGroupItem } from '@po-ui/ng-components';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  characters: any[] = [];

  page: number = 1

  buttons: Array<PoButtonGroupItem> = [
    { label: 'Voltar', action: this.previousPage.bind(this) },
    { label: 'Proximo', action: this.nextPage.bind(this) },

  ]

  menu: Array<any> = [
    { label: 'Home', link: '/' },
    { label: 'Todos Personagens', routerLink: '/tasks/task-form.component.html' },
  ]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.callPerson();
  }

  callPerson(){
    this.http.get<any>(`https://rickandmortyapi.com/api/character/?page=${this.page}`).subscribe((response) => {
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
