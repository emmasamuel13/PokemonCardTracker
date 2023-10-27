import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pokemen = [
      { id: 10, name: 'Cubone' },
      { id: 11, name: 'Eevee' },
      { id: 12, name: 'Dragonite' },
      { id: 13, name: 'Roselia' },
      { id: 14, name: 'Spheal' },
      { id: 15, name: 'Jirachi' },
      { id: 16, name: 'Piplup' },
      { id: 17, name: 'Combee' },
      { id: 18, name: 'Leafeon' },
      { id: 19, name: 'Deerling' },
      { id: 20, name: 'Litleo' },
      { id: 21, name: 'Rockruff' },
      { id: 22, name: 'Applin' },
      { id: 23, name: 'Appletun' },
      { id: 24, name: 'Snom' },
      { id: 25, name: 'Eiscue' },
      { id: 26, name: 'Sprigatito' },
      { id: 27, name: 'Lechonk' },
      { id: 28, name: 'Fidough' },
      { id: 29, name: 'Miraidon' }
    ];
    return {pokemen};
  }

  genId(pokemen: Pokemon[]): number {
    return pokemen.length > 0 ? Math.max(...pokemen.map(pokemon => pokemon.id)) + 1 : 11;
  }
}
