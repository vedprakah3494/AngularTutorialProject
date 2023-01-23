import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective implements OnInit {
  @Input() appStatus: string = "";
  private el: ElementRef ;


  constructor(el: ElementRef) {
    this.el = el;

  }

  ngOnInit(): void
  {
    if(this.appStatus=='Completed')
    {
      this.el.nativeElement.style='border-left: 5px solid green;';

    }

  }

}
