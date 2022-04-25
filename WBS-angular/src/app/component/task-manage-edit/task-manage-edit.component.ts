import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-task-manage-edit',
  templateUrl: './task-manage-edit.component.html',
  styleUrls: ['./task-manage-edit.component.css']
})
export class TaskManageEditComponent implements OnInit {
  public task: any = {};
  private id!: number;

  constructor(private route: ActivatedRoute,
    private httpClient: HttpClient,
    private appComponent: AppComponent,
    private router: Router) { }

  /**
   * 获取与后台对接的URL
   */
   getUrl(): string {
    return 'http://localhost:8080/Task/' + this.id;
  }

  /**
   * 当路由参数发生变化时，加载任务进度数据。
   */
  load(): void {
    console.log('加载任务进度数据');
    this.httpClient.get(this.getUrl())
      .subscribe((data) => {
        this.task = data;
      }, () => {
        console.log(`请求 ${this.getUrl()} 时发生错误`);
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      console.log('路由参数发生变化，接收通知');
      this.id = data['id'];
      this.load();
    });
  }

  /**
   * 提交表单
   */
  onSubmit(): void {
    this.httpClient.put(this.getUrl(), this.task)
      .subscribe(() => {
          console.log('更新成功');
          this.appComponent.ngOnInit();
          this.router.navigate(['./../../'], {relativeTo: this.route});
        },
        () => {
          console.error(`更新数据时发生错误,url:${this.getUrl()}`);
        });
  }
}
