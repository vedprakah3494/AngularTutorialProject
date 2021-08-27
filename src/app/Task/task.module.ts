import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { TaskComponent } from './task/task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    TaskComponent,
    TaskItemComponent,
  ],
  imports: [CommonModule, TaskRoutingModule,FontAwesomeModule],
})
export class TaskModule {}
