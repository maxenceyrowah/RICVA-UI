import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';

@NgModule({
  declarations: [DialogBoxComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule ],
})
export class SharedModule {}
