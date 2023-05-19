import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListaComponent],
  declarations: [ListaComponent]

})
export class ComidaModule { }
