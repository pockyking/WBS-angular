import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManageComponent } from './task-manage/task-manage.component';
import { TaskManageAddComponent } from './task-manage-add/task-manage-add.component';
import { TaskManageEditComponent } from './task-manage-edit/task-manage-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManageComponent,
    TaskManageAddComponent,
    TaskManageEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
