import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ActorComponent } from './actor/actor.component';
import { EpisodeComponent } from './episode/episode.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import { ActorService } from './services/actor.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ErrorPageComponent,
    ActorComponent,
    EpisodeComponent 
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [
    ActorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
