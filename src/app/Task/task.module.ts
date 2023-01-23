import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { TaskComponent } from './task/task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    TaskComponent,
    TaskItemComponent,
  ],
  imports: [CommonModule, TaskRoutingModule,FontAwesomeModule,SharedModule],
})
export class TaskModule {}
