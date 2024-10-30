import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Escuela } from '../models/escuela';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {
 private apiUrl='http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getEscuelas():Observable<Escuela[]>{
    return this.http.get<Escuela[]>(this.apiUrl);
  }
}