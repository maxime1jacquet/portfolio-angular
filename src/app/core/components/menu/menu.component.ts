import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() change: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public changeLink() {
    this.change.emit();
  }
}
