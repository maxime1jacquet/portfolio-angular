import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isMenuOpen:boolean;
  @Output() onOpenMenu : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public openMenu():void{
    this.isMenuOpen = !this.isMenuOpen;
    this.onOpenMenu.emit(this.isMenuOpen);
  }

}
