import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent
  implements OnInit {
  pokemen: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemen();
  }

  getPokemen(): void {
    this.pokemonService.getPokemen().subscribe(pokemen => this.pokemen = pokemen.slice(1, 5));
  }
}
