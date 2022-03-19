import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskPageComponent } from './tasks/task-page/task-page.component';

const routes: Routes = [
  {path: 'list', component:TaskListComponent},
  {path: 'new', component:TaskFormComponent},
  {path: 'edit/:id', component:TaskListItemComponent},
  {path: 'home,', component:TaskPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
