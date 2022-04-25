import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockInComponent } from './component/clock-in/clock-in.component';
import { TaskManageAddComponent } from './component/task-manage-add/task-manage-add.component';
import { TaskManageEditComponent } from './component/task-manage-edit/task-manage-edit.component';
import { TaskManageComponent } from './component/task-manage/task-manage.component';

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
},
  { path: 'clock-in', component: ClockInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
