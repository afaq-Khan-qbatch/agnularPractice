import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { FileValidators } from 'ngx-file-drag-drop';

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




ngOnInit(): void {
  // this.fileControl.valueChanges.subscribe((file: any) => 
  //   console.log('==> ', this.fileControl.value, this.fileControl.valid)
  // )
}

}
