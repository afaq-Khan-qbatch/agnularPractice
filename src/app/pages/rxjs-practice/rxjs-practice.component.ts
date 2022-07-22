import { Component, ElementRef, OnInit, ViewChild, VERSION } from '@angular/core';
import { of, pipe, fromEvent, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-practice',
  templateUrl: './rxjs-practice.component.html',
  styleUrls: ['./rxjs-practice.component.css']
})
export class RxjsPracticeComponent implements OnInit {

  constructor() { }
  name = 'Angular ' + VERSION.major;
  @ViewChild('testadd') el!: ElementRef;
  @ViewChild('test') button!: ElementRef;

  // clickEvent = fromEvent<MouseEvent>(this.button, 'click')
  // .subscribe(eve => {
  //   console.log({eve})
  // });

  stopwatchValue = 2;
  stopwatchValue$!: Observable<number>;

  squareOdd = of(1, 2, 3, 4, 5)
    .pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    )
    // .subscribe(res => {
    //   setTimeout(() => {
    //     console.log({res})
    //   }, 2000)
    // });
    


  // Create a function that accepts an Observable.
  squareOddVals = pipe(
    filter((n: number) => n % 2 == 0),
    map(n => n * n)
  );

  // Create an Observable that will run the filter and map functions
  // squareOdd = this.squareOddVals(this.nums);

  getValue() {
    console.log('==> ',this.el.nativeElement)
    fromEvent(this.button.nativeElement, 'click')
    .subscribe(eve => {
      this.el.nativeElement.innerHTML = 'new Event'
    })
  }

  ngOnInit(): void {
    this.squareOdd.subscribe(x => console.log(x));
    console.log(this.stopwatchValue)
    // this.stopwatchValue$.subscribe(num =>
    //   this.stopwatchValue = num
    // );
  }

}
