import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductoService } from 'src/app/services/producto.service';
import { Productos } from 'src/app/interfaces/interface';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public RegistroProducto!: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>, 
    private productosservice:ProductoService,
    private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.RegistroProducto = this.formBuilder.group({
      producto:['',[
        Validators.required,
        Validators.minLength(4)
      ]] ,
      costo:['',[
        Validators.required,
      ]] ,
      imagen:['',[
        Validators.required,
      ]]
    })

  }


  async onSubmit() {
    this.productosservice.addProducto(this.RegistroProducto.value).then(response => {
      console.log(response)
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'El producto ha sido añadido a la lista.'
      });
    })
    .catch( error => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Lo lamentamos!',
        text: 'Ha ocurrido un error al intentar añadir el producto.'
      });
    });
  }





  onNoClick(): void {
    this.dialogRef.close();
  }

}
