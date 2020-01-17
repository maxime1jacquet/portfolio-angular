import {
  Component,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef,
  OnChanges
} from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import {
  tap,
  pluck,
  map,
  delay,
  distinctUntilChanged,
  filter
} from 'rxjs/operators';

@Component({
  selector: 'ngx-cursor',
  template: `
    <div id="ngx-cursor" #ngxCursor>
      <span></span>
    </div>
  `,
  styleUrls: ['./ngx-cursor.component.scss']
})
export class NgxCursorComponent implements AfterViewInit, OnChanges {
  @Input() cursor = true;
  @Input() color = '#000';
  @Input() size = '30px';
  @Input() opacity = 0.5;
  @Input() delay = 50;
  @Input() zindex = 999;

  public firstColor: string;
  public cursorType = ['cursor-type', 'cursor-color', 'cursor-opacity', 'href'];

  @ViewChild('ngxCursor', { static: true }) ngxCursor: ElementRef;

  constructor() {}

  ngOnChanges() {
    this.setStyles();
  }

  ngAfterViewInit() {
    this.firstColor = this.color;
    const mousemove$ = fromEvent(document, 'mousemove');

    const deplaceCursor$ = mousemove$.pipe(
      delay(this.delay),
      tap((e: MouseEvent) => {
        this.deplaceCursor(e.clientX, e.clientY);
      })
    );

    const elementsAttrs$ = mousemove$.pipe(
      distinctUntilChanged(),
      pluck('target', 'attributes'),
      map((attrs: any[]) => {
        console.log(attrs);
        return [...attrs].filter(
          attr => this.cursorType.indexOf(attr.name) !== -1
        );
      })
    );

    const setClass$ = elementsAttrs$.pipe(
      tap((arrayAttr: any[]) => {
        if (arrayAttr.length === 0) {
          this.removeClass();
        }
      }),
      filter((arrayAttr: any[]) => arrayAttr.length > 0),
      tap((arrayAttr: any[]) => {
        arrayAttr.map(item => {
          this.HoverInElement(item);
        });
      })
    );

    const merge$ = merge(deplaceCursor$, elementsAttrs$, setClass$);
    merge$.subscribe();
  }

  private HoverInElement(item: any): void {
    if (item.name === 'cursor-color') {
      this.color = item.value;
      this.setStyles();
    } else if (item.name === 'cursor-type') {
      this.addClass(item.value);
    } else if (item.name === 'href') {
      this.addClass('active');
    }
  }

  private addClass(className: string): void {
    this.ngxCursor.nativeElement.classList.add(className);
  }

  private removeClass(): void {
    this.color = this.firstColor;
    this.ngxCursor.nativeElement.classList.remove('active');
    this.setStyles();
  }

  private deplaceCursor(x: number, y: number): void {
    this.ngxCursor.nativeElement.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  private setStyles(): void {
    document.body.style.setProperty('--ngx-cursor-color', this.color);
    document.body.style.setProperty(
      '--ngx-cursor-opacity',
      String(this.opacity)
    );
    document.body.style.setProperty('--ngx-cursor-size', this.size);
    document.body.style.setProperty('--ngx-cursor-zindex', String(this.zindex));

    if (this.cursor) {
      document.body.style.setProperty('--ngx-cursor', 'auto');
    } else {
      document.body.style.setProperty('--ngx-cursor', 'none');
    }
  }
}
