import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() date: string;
  @Input() title: string;
  @Input() slug: string;
  @Input() index: number;
  @Input() tags: Array<string>;

  public dateSplit: Array<string>;
  public current: Boolean = false;

  constructor(public router: Router) {}

  ngOnInit() {
    this.dateSplit = this.splitDate(this.date);
  }

  private splitDate(date: string): Array<string> {
    if (date) {
      return this.date.split('/');
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
