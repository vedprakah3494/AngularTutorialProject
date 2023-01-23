import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
   isAddTask=true;
   @Output() addTaskEvent= new EventEmitter();
  constructor(private taskService: TaskService) {
   }

  ngOnInit(): void {
  }

  addNewTask()
  {
    this.isAddTask=false;
    this.addTaskEvent.emit(this.isAddTask);
  }

  saveTask()
  {
    //this.taskService.addTask(task:Task)
  }
}
