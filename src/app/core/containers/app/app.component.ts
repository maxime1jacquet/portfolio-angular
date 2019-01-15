import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isMenuOpen:boolean = false;

  constructor(
  ) { }

  ngOnInit() {
  }

  public openMenu(bol:boolean):void{
    this.isMenuOpen = bol;
  }
}
