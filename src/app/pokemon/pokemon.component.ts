import { Component } from '@angular/core';
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemon: Pokemon = {
    id: 1,
    name: 'Cubone',
  };
}
