import { Component } from '@angular/core';
import { Pokemon } from "../pokemon";
import { POKEMEN } from "../mock-pokemen";

@Component({
  selector: 'app-pokemen',
  templateUrl: './pokemen.component.html',
  styleUrls: ['./pokemen.component.css']
})
export class PokemenComponent {
  pokemen = POKEMEN;
  selectedPokemon?: Pokemon;
  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
