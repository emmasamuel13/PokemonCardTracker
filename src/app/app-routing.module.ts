import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemenComponent } from './pokemen/pokemen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";

const routes: Routes = [
  { path: 'pokemen', component: PokemenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PokemonDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
