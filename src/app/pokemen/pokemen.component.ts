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
  pokemen: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemen()
  }

  getPokemen(): void {
    this.pokemonService.getPokemen()
      .subscribe(pokemen => this.pokemen = pokemen);
  }
}
