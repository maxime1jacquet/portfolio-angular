import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public idOpenExp:boolean = false;
  public loaded:boolean = false;

  constructor() { }

  ngOnInit() {
    this.loadedPage();
  }

  public openExp():void {
    this.idOpenExp = !this.idOpenExp;
  }
  
  private loadedPage():void{
    setTimeout(() => {
      this.loaded = true;
    }, 0);
  }

}
