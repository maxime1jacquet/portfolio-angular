import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router }          from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isMenuOpen  : boolean;
  @Output() onOpenMenu : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public router : Router
  ) { }

  ngOnInit() {
  }

  public openMenu():void{
    this.isMenuOpen = !this.isMenuOpen;
    this.onOpenMenu.emit(this.isMenuOpen);
  }

  public loadPage(route:string) {
    this.router.navigate([route]);
  }

}
