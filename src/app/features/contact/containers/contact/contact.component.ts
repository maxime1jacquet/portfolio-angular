import { Component, OnInit } from '@angular/core';
import { Title, Meta }       from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public loaded:boolean = false;
  public txtTmp:string = '';

  constructor(
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this.title.setTitle('Me contacter →  Maxime Jacquet front end developer');
    this.meta.addTag({name:'description', content:'front end developer at Yoozly' });
    this.loadedPage();
  }

  private loadedPage():void{
    setTimeout(() => {
      this.loaded = true;
    }, 0);
  }

}
