import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { WeddingEstimatorComponent } from './wedding-estimator/wedding-estimator.component';
import { CountdownComponent } from './countdown/countdown.component';

const appRoutes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'scoreboard', component: ScoreComponent },
  { path: 'wedding-estimator', component: WeddingEstimatorComponent},
   {path: 'countdown', component:CountdownComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
