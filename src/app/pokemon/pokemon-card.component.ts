import { Component } from '@angular/core';
import {PokemonCard} from "./pokemon-card";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  pokemonCard: PokemonCard = {
    id: 1,
    pokemonName: 'Cubone',
    cardLanguage: 'English',
    setName: 'Hidden Fates',
    setReleaseDate: '23/08/2019',
    cardNumber: 37,
    cardsInSet: 68,
    inCollection: true
  }
}
