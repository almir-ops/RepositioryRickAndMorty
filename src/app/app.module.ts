import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskPageComponent } from './tasks/task-page/task-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskFormComponent,
    TaskPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
