import { Injectable } from '@angular/core';
import { Pokemon} from "./pokemon";
import { POKEMEN} from "./mock-pokemen";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private pokemonUrl = 'api/pokemen';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getPokemen(): Observable<Pokemon[]> {
    // const pokemen = of(POKEMEN);
    // this.messageService.add('PokemonService: fetched pokemen')
    // return pokemen;
    return this.http.get<Pokemon[]>(this.pokemonUrl)
      .pipe(
        tap(_ => this.log('fetched pokemen')),
        catchError(this.handleError<Pokemon[]>('getPokemen', []))
      );
  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `$\{this.pokemenUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add('PokemonService: $(message)');
  }


}
