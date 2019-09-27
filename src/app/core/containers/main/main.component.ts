import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: [
    '../../../../../node_modules/sanitize.css/sanitize.css',
    '../../../../../node_modules/normalize.css/normalize.css',
    '../../../../stylesheets/_reset.scss',
    '../../../../stylesheets/components/_button.scss',
    './main.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  public menuOpen = false;
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Maxime Jacquet → front end developer');
    this.meta.addTag({
      name: 'description',
      content: 'front end developer at Yoozly'
    });
  }

  toogleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
}
