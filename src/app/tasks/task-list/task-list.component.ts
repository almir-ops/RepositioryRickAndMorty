import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  episodes: any[] = []
  page = 1
  menu: Array<any> = [
    { label: 'Home', link: '/' },
    { label: 'Todos Personagens', link: '/new' },
    { label: 'Lista de episódios', link: '/list' },
  ]
  buttons: Array<PoButtonGroupItem> = [
    { label: 'Voltar', action: this.previousPage.bind(this) },
    { label: 'Proximo', action: this.nextPage.bind(this) },

  ]
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.callPerson();
  }
  callPerson(){
    this.http.get<any>(`https://rickandmortyapi.com/api/episode/?page=${this.page}`).subscribe((response) => {
      this.episodes = response.results;
      console.log(response)
    })
  }
  titleEp(){
    return`${this.episodes}`
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
