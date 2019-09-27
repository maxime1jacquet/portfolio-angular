import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle(
      'Maxime Jacquet, développeur front-end passionné par son métier'
    );
    this.meta.addTag({
      name: 'description',
      content:
        "master digital médias et trois ans d'expérience professionnelle dans une agence web. J'utilise quotidiennement HTML, SASS, ANGULAR, REDUX, RXJS, VUEJS, ES6 & REST API."
    });
  }
}
