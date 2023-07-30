import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogBox } from 'src/app/@core/models/dialog-box';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent {
  title: string = '';
  description: string = '';
  data: any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogBox
  ) {
    this.data = data;
  }

  submit() {
    this.dialogRef.close(this.data.confirm);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}