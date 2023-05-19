import { Component, Input, OnInit } from '@angular/core';
import { ComidaDetail } from '../comidaDetail';
import { ActivatedRoute } from '@angular/router';
import { ComidaService } from '../comida.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() comidaDetail!: ComidaDetail
  constructor(private route: ActivatedRoute) { }



  ngOnInit() {

  }

}
