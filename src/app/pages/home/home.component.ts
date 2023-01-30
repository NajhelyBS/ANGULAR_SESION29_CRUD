import { Component, OnInit } from '@angular/core';

//imports para que funcione el dialog
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { RegisterComponent } from 'src/app/components/register/register.component';

//imports para mostrar datos
import { Productos } from 'src/app/interfaces/interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  productos!:Productos[];

  constructor(
    private dialog:MatDialog,
    private productosservice:ProductoService){}

  openDialog():void {
    let dialogRef = this.dialog.open(RegisterComponent, {
      width: '600px',
    });
  }

  ngOnInit(): void {
    this.productosservice.getProducto().subscribe(Productos => {
      this.productos = Productos;
    });
  }


  Delete(producto: Productos){
    const response =this.productosservice.deleteProducto(producto);
    console.log(response);
    
  }

}
