import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() date      : string;
  @Input() dateSplit : Array<string>;
  @Input() src       : string;
  @Input() text      : string;
  @Input() title     : string;
  @Input() slug      : string;

  constructor() { }

  ngOnInit() {
    if(this.date){
      this.dateSplit = this.date.split('/');
    }
  }

}
