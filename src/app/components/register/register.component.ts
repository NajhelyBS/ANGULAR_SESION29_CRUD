import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
