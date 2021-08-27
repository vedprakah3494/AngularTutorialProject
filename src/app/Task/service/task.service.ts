import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task/Models/Task';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }


  getTask():Observable<Task[]>{
   return this.http.get<Task[]>(environment.apiUrl+'task')
  };

  deleteTask(task:Task):Observable<Task[]>{
    return this.http.delete<Task[]>(environment.apiUrl+'task/'+task.id)
   };
}
