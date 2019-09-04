import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input() data: Array<any>;
  public endpoint: string = environment.endpoint;

  constructor() {}

  ngOnInit() {}
}
