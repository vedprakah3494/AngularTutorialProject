import { Component, OnInit, Output,EventEmitter, } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 @Output() login=new EventEmitter<any>()

  constructor(private route: Router) { }

  ngOnInit(): void {

    
  }

  Onlogin()
  {
    this.route.navigate(['/task']);

  }


}
