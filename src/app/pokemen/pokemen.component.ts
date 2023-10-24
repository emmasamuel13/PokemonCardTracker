import { Component } from '@angular/core';
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-pokemen',
  templateUrl: './pokemen.component.html',
  styleUrls: ['./pokemen.component.css']
})
export class PokemenComponent {
  pokemon: Pokemon = {
    id: 1,
    name: 'Cubone'
  };
}
