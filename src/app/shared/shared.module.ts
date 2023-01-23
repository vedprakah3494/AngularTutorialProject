import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { StatusDirective } from './status.directive';


@NgModule({
  declarations: [
    StatusDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],

  exports:[
    StatusDirective
  ]
})
export class SharedModule { }
