import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemenComponent } from './pokemen/pokemen.component';

import { FormsModule } from "@angular/forms";
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MessageService } from "./message.service";
import { PokemonService } from "./pokemon.service";

@NgModule({
  declarations: [
    AppComponent,
    PokemenComponent,
    PokemonDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
