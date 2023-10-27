import { Injectable } from '@angular/core';
import { Pokemon} from "./pokemon";
import { POKEMEN} from "./mock-pokemen";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private messageService: MessageService) { }

  getPokemen(): Observable<Pokemon[]> {
    const pokemen = of(POKEMEN);
    this.messageService.add('PokemonService: fetched pokemen')
    return pokemen;
  }

  getPokemon(id: Number): Observable<Pokemon> {
    const pokemon = POKEMEN.find(p => p.id === id)!;
    this.messageService.add(`PokemonService: fetched pokemon pokedexNumber=${id}`);
    return of(pokemon);
  }

}
