import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockInComponent } from './component/clock-in/clock-in.component';

const routes: Routes = [
  { path: 'clock-in', component: ClockInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
