import { Component, OnInit, Input } from '@angular/core';
import * as fromModel from '../../models';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() title: fromModel.TitleState;
  constructor() {}

  ngOnInit() {}
}
