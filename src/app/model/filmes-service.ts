import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Filme } from './filme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private http = inject(HttpClient) // objeto de serviço 

  obterFilme(titulo: string): Observable<Filme>{ // lógica da consulta // vai retornar um json
    return this.http.get<Filme>(" ")
  }
}
