import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-adress-dialogg',
  templateUrl: './add-adress-dialogg.component.html',
  styleUrls: ['./add-adress-dialogg.component.css']
})
export class AddAdressDialoggComponent {
  inputs: { value: string }[] = [{ value: '' }];

  constructor(public dialogRef: MatDialogRef<AddAdressDialoggComponent>) {}

  addInput() {
    this.inputs.push({ value: '' });
  }
  removeInput(index: number) {
    if (this.inputs.length > 1) {
      this.inputs.splice(index, 1);
    }
  }

  save() {
    // Implement logic to handle saving the inputs
    this.dialogRef.close(this.inputs);
  }

  close() {
    this.dialogRef.close();
  }
}
