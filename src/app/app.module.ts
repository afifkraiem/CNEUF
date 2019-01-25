import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DescriptifComponent } from './Descriptif/Descriptif.component';
import { CandidaturesComponent } from './Candidatures/Candidatures.component';
import { CartographieComponent } from './Cartographie/Cartographie.component';
import { ActsComponent } from './Acts/Acts.component';
import { ModsComponent } from './Mods/Mods.component';


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
      ModsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFontAwesomeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
