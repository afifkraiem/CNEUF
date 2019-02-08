import { ModsComponent } from './utilisateur/Mods/Mods.component';
import { ActsComponent } from './utilisateur/Acts/Acts.component';
import { CoordComponent } from './coord/coord.component';
import { CartographieComponent } from './utilisateur/Cartographie/Cartographie.component';
import { DescriptifComponent } from './utilisateur/Descriptif/Descriptif.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CandidaturesComponent } from './coord/Candidatures/Candidatures.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : '', component : HomeComponent},
  {path : 'Descriptif', component : DescriptifComponent},
  {path : 'Mods', component : ModsComponent},
  {path : 'Coord', component : CoordComponent},
  {path : 'Cartographie', component : CartographieComponent},
  {path : 'Acts', component : ActsComponent},
  {path: 'candidatures', component: CandidaturesComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'Profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
