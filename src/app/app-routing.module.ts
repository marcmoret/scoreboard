import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { ScoreComponent } from './score/score.component';
import { WeddingEstimatorComponent } from './wedding-estimator/wedding-estimator.component';

const appRoutes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'scoreboard', component: ScoreComponent },
  { path: 'wedding-estimator', component: WeddingEstimatorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
