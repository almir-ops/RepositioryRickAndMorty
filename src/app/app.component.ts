import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
     const par = this.activatedRoute.snapshot.paramMap.get('parametro');
  }

}
