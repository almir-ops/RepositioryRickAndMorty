import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskPageComponent } from './tasks/task-page/task-page.component';

const routes: Routes = [
  {path: 'new', component:TaskFormComponent},
  {path: 'home:parametro', component:TaskPageComponent}, 
  {path: 'list' ,component:TaskListComponent},
  {
    path: '',
    component: AppComponent,
    children: [
    { path: '', component: TaskPageComponent },
    ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
