import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { FileValidators } from 'ngx-file-drag-drop';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
  styles: [
    `
      ngx-file-drag-drop {
        height: 120px;
      }
    `,
  ],
})
export class DragDropComponent implements OnInit {

  constructor() { }

  dragDropConfig = {
    showList:true,
    showProgress:true
}

getUploadedFiles(files: any) {
  console.log('My uploaded files',files)
}

// fileControl = new FormControl(
//   [],
//   [FileValidators.required, FileValidators.maxFileCount(2)]
// );

// onValueChange(file: File[]) {
//   console.log('File changed! => ', file);
// }

nums = of(1, 2, 3, 4, 5);

// Create a function that accepts an Observable.
squareOddVals = pipe(
  filter((n: number) => n % 2 == 0),
  map(n => n * n)
);

// Create an Observable that will run the filter and map functions
squareOdd = this.squareOddVals(this.nums);

// Subscribe to run the combined functions

ngOnInit(): void {
this.squareOdd.subscribe(x => console.log(x));

  // this.fileControl.valueChanges.subscribe((file: any) => 
  //   console.log('==> ', this.fileControl.value, this.fileControl.valid)
  // )
}

}
