// src/app/services/filmes.service.ts

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { FilmeResumo, RespostaBuscaOMDb } from '../models/filme'; // Atualizamos os imports

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private http = inject(HttpClient);
  private apiUrl = environment.omdbApiUrl;
  private apiKey = environment.omdbApiKey;

  /**
   * Busca uma lista de filmes com base em um título.
   * @param titulo O termo a ser buscado.
   * @returns Um Observable contendo um array de Filmes (resumido).
   */
  buscarFilmes(titulo: string): Observable<FilmeResumo[]> {
    
    const url = `${this.apiUrl}?s=${titulo}&apikey=${this.apiKey}`;

    return this.http.get<RespostaBuscaOMDb>(url).pipe(
      map(resposta => {
   
        return resposta.Search || [];
      })
    );
  }
}