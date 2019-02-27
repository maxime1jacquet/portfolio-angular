import { Component, OnInit } from '@angular/core';
import { Title, Meta }       from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  
  public idOpenExp:boolean = false;
  public loaded:boolean = false;

  constructor(
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this.title.setTitle('A propos de moi → Maxime Jacquet front end developer');
    this.meta.addTag({name:'description', content:'front end developer at Yoozly' });

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
