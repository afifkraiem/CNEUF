import { TokenStorageService } from './auth/token-storage.service';
import { AuthService } from './auth/auth.service';
import { CandDetailsComponent } from './admin/cand-details/cand-details.component';
import { SoumissionComponent } from './coord/soumission/soumission.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DescriptifComponent } from './utilisateur/Descriptif/Descriptif.component';
import { CandidaturesComponent } from './coord/Candidatures/Candidatures.component';
import { CartographieComponent } from './utilisateur/Cartographie/Cartographie.component';
import { ActsComponent } from './utilisateur/Acts/Acts.component';
import { ModsComponent } from './utilisateur/Mods/Mods.component';
import { AdminComponent } from './admin/admin.component';
import { CoordComponent } from './coord/coord.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { SidebarCoordComponent } from './coord/sidebar-coord/sidebar-coord.component';
import { ArticleComponent } from './admin/article/article.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDashComponent } from './admin/admin-dash/admin-dash.component';
import { httpInterceptorProviders, AuthInterceptor } from './auth/auth-interceptor';
import { AffCandComponent } from './admin/aff-cand/aff-cand.component';
import { ExpertComponent } from './expert/expert.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      DescriptifComponent,
      CandidaturesComponent,
      CartographieComponent,
      ActsComponent,
      ModsComponent,
      AdminComponent,
      CoordComponent,
      UtilisateurComponent,
      SidebarCoordComponent,
      ArticleComponent,
      SignInComponent,
      SignUpComponent,
      ProfileComponent,
      AdminDashComponent,
      SoumissionComponent,
      AffCandComponent,
      CandDetailsComponent,
      ExpertComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule
     // AngularFontAwesomeModule normalement pr lr moment kol chay c haka wale ?oui normlmnet
   ],
   providers: [httpInterceptorProviders, AuthInterceptor, AuthService, TokenStorageService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
