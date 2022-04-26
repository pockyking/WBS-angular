import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../../app.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-task-manage-add',
  templateUrl: './task-manage-add.component.html',
  styleUrls: ['./task-manage-add.component.css']
})
export class TaskManageAddComponent implements OnInit {
  taskName!: String;
  executor!: string;
  type!: string;
  message = '';

  constructor(
    private httpClient: HttpClient,
    private appComponent: AppComponent,
    private router: Router) { }

  ngOnInit(): void {
  }

 /**
   * 显示错误信息。1.5秒后关闭显示
   * @param message 错误信息
   */
  public showMessage(message = '发生错误'): void {
    this.message = message;
    setTimeout(() => {
      this.message = '';
    }, 1500);
  }

  /**
   * 将要保存的任务进度信息提交给后台
   * 当声明方法为public（此关键字可省略）时，相当于绑定到了V层，V层中可以进行调用或是绑定操作。
   */
  public onSubmit(): void {
    const url = 'http://localhost:8080/wbs/task';
    const task = {
      taskName: this.taskName,
      executor: this.executor,
      type: this.type,
    };

    console.log(task);

    this.httpClient.post(url, task)
      .subscribe(() => {
        console.log('添加成功');
        this.appComponent.ngOnInit();
        this.router.navigate(['./']);
      }, (response) => {
        this.showMessage('请求发生错误');
        console.error('请求发生错误', response);
      });
  }
}

