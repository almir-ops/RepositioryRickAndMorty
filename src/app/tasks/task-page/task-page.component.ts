import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {


  menu: Array<any> = [
    { label: 'Home', link: '/' },
    { label: 'Todos Personagens', link: '/new' },
    { label: 'Lista de episódios', link: '/list' },
  ]
  constructor() { }

  ngOnInit(): void {
  }
 
}
