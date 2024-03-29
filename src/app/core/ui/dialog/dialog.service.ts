import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogData } from './dialog-data/dialog-data';
import { DialogComponent } from './dialog.component';
import { SearchComponent } from '../search/search.component';

@Injectable()
export class DialogService {
  private dialogRef: MatDialogRef<DialogComponent>;

  constructor(public dialog: MatDialog) { }

  openDialog(data: DialogData, additionalDialogConfigData?: any): MatDialogRef<DialogComponent> {

    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogRef = this.dialog.open(DialogComponent, {
      closeOnNavigation: true,
      width: '500px',
      data,
      ...additionalDialogConfigData
    });

    this.dialogRef.afterClosed().subscribe(result => {
    });

    return this.dialogRef;
  }
}
