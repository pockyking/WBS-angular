import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-task-manage',
  templateUrl: './task-manage.component.html',
  styleUrls: ['./task-manage.component.css']
})
export class TaskManageComponent implements OnInit {

 // 定义任务数组
 tasks = new Array();

 constructor(private httpClient: HttpClient) {
 }

 /**
  * 该方法将在组件准备完毕后被调用
  */
 ngOnInit() {
   /* 后台数据的请求地址，如果变量定义后不再重新赋值，则应该使用const来定义 */
   const url = 'http://localhost:8080/Task/';

   /* 使用get方法请求url，请求一旦成功后，将调用传入的第一个方法；如果请求失败，将调用传入的第二个方法 */
   this.httpClient.get(url)
     .subscribe((response: any) => {
       console.log(response);
       this.tasks = response;
     }, (response) => {
       console.log(response);
       console.error('请求出错');
     });
 }

 /**
  * 点击删除按钮时删除对应的任务
  * @param task 要删除的任务
  */
 onDelete(task: { id: string }): void {
   const url = 'http://localhost:8080/Task/' + task.id;
   this.httpClient.delete(url)
     .subscribe(() => {
       console.log('删除成功');
       this.ngOnInit();
     }, () => {
       console.log('删除失败');
     });
 }

}

