import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 @Output() login=new EventEmitter()

  constructor() { }

  ngOnInit(): void {

    
  }

  Onlogin()
  {
    this.login.emit();
  }


}
