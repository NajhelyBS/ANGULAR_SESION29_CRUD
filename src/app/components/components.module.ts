import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class ComponentsModule { }
