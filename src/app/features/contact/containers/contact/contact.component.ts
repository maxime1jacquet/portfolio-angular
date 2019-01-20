import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public loaded:boolean = false;

  constructor() { }

  ngOnInit() {
    this.loadedPage();
  }

  private loadedPage():void{
    setTimeout(() => {
      this.loaded = true;
    }, 0);
  }

}
