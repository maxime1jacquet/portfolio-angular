import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  private timeInterval : number = 50;

  private description1:string = 'Développeur front-end chez Yoozly';
  private description2:string = '& étudiant en master pro digital médias à ESTIAM.';
  private text1:Array<string>;
  private text2:Array<string>;

  public result1:string = '';
  public result2:string = '';


  constructor() { }

  ngOnInit() {
    this.text1 = this.description1.split('');
    this.text2 = this.description2.split('');

    for (let i = 0; i < this.text1.length; i++) {     
      setTimeout(() => {
        const letter = this.text1[i];
        this.result1 += letter;
      }, this.timeInterval*i);
    }

    for (let i = 0; i < this.text2.length; i++) {     
      setTimeout(() => {
        const letter = this.text2[i];
        this.result2 += letter;
      }, this.timeInterval*i + (this.text1.length*this.timeInterval));
    }

  }

}
