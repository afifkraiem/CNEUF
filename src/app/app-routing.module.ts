import { ModsComponent } from './utilisateur/Mods/Mods.component';
import { ActsComponent } from './utilisateur/Acts/Acts.component';
import { CandidaturesComponent } from './coord/Candidatures/Candidatures.component';
import { CartographieComponent } from './utilisateur/Cartographie/Cartographie.component';
import { DescriptifComponent } from './utilisateur/Descriptif/Descriptif.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : '', component : HomeComponent},
  {path : 'Descriptif', component : DescriptifComponent},
  {path : 'Mods', component : ModsComponent},
  {path : 'Candidatures', component : CandidaturesComponent},
  {path : 'Cartographie', component : CartographieComponent},
  {path : 'Acts', component : ActsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
