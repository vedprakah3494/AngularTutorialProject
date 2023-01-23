import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Task } from 'src/app/Task/Models/Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() item!: Task;
  @Output() deleteTaskEvent=new EventEmitter();
 // taskForm:FromGroup;
  faTimes=faTimes;

  constructor() { }

  ngOnInit(): void {
  }


  deleteTask(item: any)
  {
    console.log(item);
    this.deleteTaskEvent.emit(item);
  }

}
