import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-pokemen',
  templateUrl: './pokemen.component.html',
  styleUrls: ['./pokemen.component.css']
})
export class PokemenComponent implements OnInit {
  selectedPokemon?: Pokemon;
  pokemen: Pokemon[] = [];
  constructor(private pokemonService: PokemonService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getPokemen()
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
    this.messageService.add(`PokemenComponent: Selected pokemon pokedex number = ${pokemon.pokedexNumber}`)
  }

  getPokemen(): void {
    this.pokemonService.getPokemen()
      .subscribe(pokemen => this.pokemen = pokemen);
  }
}
