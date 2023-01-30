import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { RegisterComponent } from 'src/app/components/register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private dialog:MatDialog){}

  openDialog():void {
    let dialogRef = this.dialog.open(RegisterComponent, {
      width: '600px',
    })

  }

}
