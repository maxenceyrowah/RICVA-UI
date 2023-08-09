import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogBox } from 'src/app/@core/models/dialog-box';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-dialog-box',
    templateUrl: './dialog-box.component.html',
    styleUrls: ['./dialog-box.component.scss'],
    standalone: true,
    imports: [MatButtonModule, MatIconModule],
})
export class DialogBoxComponent {
  title = '';
  description = '';
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
