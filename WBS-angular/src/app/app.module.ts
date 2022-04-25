import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManageComponent } from './component/task-manage/task-manage.component';
import { TaskManageAddComponent } from './component/task-manage-add/task-manage-add.component';
import { TaskManageEditComponent } from './component/task-manage-edit/task-manage-edit.component';

import { ClockInComponent } from './component/clock-in/clock-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockInComponent,
    TaskManageComponent,
    TaskManageAddComponent,
    TaskManageEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgZorroAntdMobileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
