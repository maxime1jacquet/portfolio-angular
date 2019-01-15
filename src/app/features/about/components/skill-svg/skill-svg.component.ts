import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skill-svg',
  templateUrl: './skill-svg.component.html',
  styleUrls: ['./skill-svg.component.scss']
})
export class SkillSvgComponent implements OnInit {

  @Input() id:number;
  
  constructor() { }

  ngOnInit() {
  }

}
