import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';

import { HeadComponent } from './head/head.component';
import { NgForm, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChooseNameComponent } from './score/choose-name/choose-name.component';

const appRoutes: Routes = [
  { path: 'scoreboard', component: ScoreComponent },
  { path: '', component: HeadComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    ChooseNameComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }