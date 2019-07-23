import { IdeasComponent } from './ideas/ideas.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { WeddingEstimatorComponent } from './wedding-estimator/wedding-estimator.component';
import { CountdownComponent } from './countdown/countdown.component';
import { TestingComponent } from './testing/testing.component';
import { TableTestComponent } from './table-test/table-test.component';
import { MeasureConverterComponent } from './measure-converter/measure-converter.component';
import { ToldYaComponent } from './told-ya/told-ya.component';

const appRoutes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'scoreboard', component: ScoreComponent },
  { path: 'wedding-estimator', component: WeddingEstimatorComponent},
  { path: 'countdown', component:CountdownComponent},
  { path: 'testing', component:TestingComponent},
  { path: 'ideas', component: IdeasComponent},
  { path: 'testdb', component: TableTestComponent},
  { path: 'converter', component: MeasureConverterComponent},
  { path: 'toldya', component: ToldYaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
