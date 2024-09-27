import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMenuComponent } from './button-menu/button-menu.component';



@NgModule({
  declarations: [
    ButtonMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonMenuComponent
  ]
})
export class SharedModule { }
