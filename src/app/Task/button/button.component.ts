import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color: string = "";
  @Input() text: string = "";
  @Output() clickBtn= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  OnClick()
  {
    this.clickBtn.emit();
  }
}
