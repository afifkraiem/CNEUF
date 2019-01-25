import { ModsComponent } from './Mods/Mods.component';
import { ActsComponent } from './Acts/Acts.component';
import { CandidaturesComponent } from './Candidatures/Candidatures.component';
import { CartographieComponent } from './Cartographie/Cartographie.component';
import { DescriptifComponent } from './Descriptif/Descriptif.component';
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
