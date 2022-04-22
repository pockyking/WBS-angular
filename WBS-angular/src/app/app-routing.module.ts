import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManageAddComponent } from './task-manage-add/task-manage-add.component';
import { TaskManageEditComponent } from './task-manage-edit/task-manage-edit.component';
import { TaskManageComponent } from './task-manage/task-manage.component';

const routes: Routes = [ {
  path: '',
  component: TaskManageComponent
},
{
  path: 'add',
  component: TaskManageAddComponent
},
{
  path: 'edit/:id',
  component: TaskManageEditComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
