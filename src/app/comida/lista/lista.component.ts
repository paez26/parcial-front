import { Component, OnInit } from '@angular/core';
import { ComidaService } from '../comida.service';
import { Comida } from '../comida';
import { ComidaDetail } from '../comidaDetail';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  comidas: Array<ComidaDetail> = [];
  selected: Boolean = false;
  selectedComida!:ComidaDetail
  constructor(private servicio: ComidaService) { }

  getComidas():void {
    this.servicio.getComidas().subscribe((comidas => {
      this.comidas = comidas

    }));
  }
  onSelected(comida: ComidaDetail): void {
    this.selected = true;
    this.selectedComida = comida;
  }

  ngOnInit() {
    this.getComidas();
  }

}
