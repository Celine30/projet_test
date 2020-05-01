import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EpisodeComponent } from './episode/episode.component';
import { ActorComponent } from './actor/actor.component';


const routes: Routes = [
  { path:'', component : HomeComponent },
  { path:'home', component : HomeComponent },
  { path:'episode', component : EpisodeComponent },
  { path:'actor', component : ActorComponent },
  { path:'not-found', component : ErrorPageComponent },
  { path:'**', redirectTo : '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
