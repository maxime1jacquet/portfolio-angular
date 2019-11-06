import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import * as fromModel from '../../models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() index: number;
  @Input() data: fromModel.Work;

  public dateSplit: Array<string>;
  public current: Boolean = false;
  public endpoint: string = environment.endpoint;

  constructor(public router: Router) {}

  ngOnInit() {
    this.dateSplit = this.splitDate(this.data.date);
  }

  private splitDate(date: string): Array<string> {
    if (date) {
      return this.data.date.split('/');
    }
  }

  public routerLink(slug: string) {
    this.current = true;

    setTimeout(() => {
      this.router.navigate([slug]);
      this.current = false;
    }, 600);
  }
}
