import { Comida } from "./comida";



export class ComidaDetail extends Comida{

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    dificultad:string,
    duracion:number,
    ingredientes:string,
    categoria:string,
    imagen: string,
    estrellas:number,
    cantidadOpiniones:number,
    autorReceta:string


  ) {
    super(id, nombre, descripcion,dificultad,duracion,ingredientes,categoria,imagen,estrellas,cantidadOpiniones,autorReceta);

  }
  }
