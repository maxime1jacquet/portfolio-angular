import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, merge } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import * as fromModel from '../../models';
import { filter, debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  @ViewChild('prev', { static: true }) prev: ElementRef;
  @ViewChild('next', { static: true }) next: ElementRef;

  public currentIndex = 0;
  public count = 6;
  public works$: Observable<fromModel.Work[]>;
  public loaded$: Observable<boolean>;

  constructor(private store: Store<fromModel.WorksState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadWork());
    this.works$ = this.store.select(fromStore.getAllWorks);
    this.loaded$ = this.store.select(fromStore.getWorksLoaded);

    this.initSlider();
  }

  initSlider() {
    const keyUp$ = fromEvent(document, 'keyup');
    const prev$ = fromEvent(this.prev.nativeElement, 'click');
    const next$ = fromEvent(this.next.nativeElement, 'click');

    const scroll$ = fromEvent(document, 'scroll').pipe(
      tap(x => console.log(x))
    );
    scroll$.subscribe();

    const ArrowLeft$ = keyUp$.pipe(
      filter((e: KeyboardEvent) => e.keyCode === 37)
    );
    const ArrowRight$ = keyUp$.pipe(
      filter((e: KeyboardEvent) => e.keyCode === 39)
    );

    const clickKeyPrev$ = merge(ArrowLeft$, prev$);
    const clickKeyNext$ = merge(ArrowRight$, next$);

    clickKeyPrev$
      .pipe(
        debounceTime(100),
        tap(_ => this.prevSlide())
      )
      .subscribe();

    clickKeyNext$
      .pipe(
        debounceTime(100),
        tap(_ => this.nextSlide())
      )
      .subscribe();
  }

  private nextSlide(): any {
    if (this.currentIndex + 1 >= this.count) {
      this.currentIndex = -1;
    }
    this.currentIndex++;
  }

  private prevSlide(): any {
    if (this.currentIndex === 0) {
      this.currentIndex = this.count;
    }
    if (this.currentIndex >= 0 && this.currentIndex <= this.count) {
      this.currentIndex--;
    }
  }

  public displayCurrentSlide(i: number): boolean {
    return this.currentIndex === i;
  }
}
