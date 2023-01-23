import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task/Models/Task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  isAddtask:boolean=true;
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((task) => this.tasks = task);
  }

  addTask(status:boolean)
  {
    this.isAddtask=status;
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe((tsk) => this.tasks = this.tasks.filter(x => x.id != task.id));
  }

}
