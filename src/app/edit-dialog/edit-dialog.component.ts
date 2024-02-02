import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  template: `
    <h2>My Dialog</h2>
    <p>Contenu du dialogue...</p>
    <button mat-button (click)="closeDialog()">Fermer</button>
  `,
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  constructor(public dialogRef: MatDialogRef<EditDialogComponent>) {}

  onClick(): void {
    this.dialogRef.close();
  }
}
