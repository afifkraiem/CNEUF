import { CandDetailsComponent } from './admin/cand-details/cand-details.component';
import { SoumissionComponent } from './coord/soumission/soumission.component';
import { AuthGuard } from './guards/auth.guard';
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
import { AdminComponent } from './admin/admin.component';
import { AdminDashComponent } from './admin/admin-dash/admin-dash.component';
import { ArticleComponent } from './admin/article/article.component';
import { AffCandComponent } from './admin/aff-cand/aff-cand.component';
import { ExpertComponent } from './expert/expert.component';



const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : '', component : HomeComponent},
  {path : 'Descriptif', component : DescriptifComponent},
  {path : 'Mods', component : ModsComponent},
  {path : 'Cartographie', component : CartographieComponent},
  {path : 'Acts', component : ActsComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'Profile', component: ProfileComponent},

  {path : 'Coord', component : CoordComponent,  children: [
    {path: 'candidatures', component: CandidaturesComponent},
    {path: 'soumission', component: SoumissionComponent}

    ]
  },

  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'admin-dash', component: AdminDashComponent},
      {path: 'article', component: ArticleComponent},
      {path: 'aff_cand', component: AffCandComponent},
      {path: 'cand-details/:id', component: CandDetailsComponent}

    ]
  },

  {path : 'expert', component :ExpertComponent,  children: [
   

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
