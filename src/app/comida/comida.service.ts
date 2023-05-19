import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Comida} from './comida';
import { ComidaDetail } from './comidaDetail';
import { environment } from '../environments/environments';



@Injectable({
  providedIn: 'root'
 })
 export class ComidaService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getComidas(): Observable<Comida[]> {
    return this.http.get<ComidaDetail[]>(this.apiUrl);
  }

 }
