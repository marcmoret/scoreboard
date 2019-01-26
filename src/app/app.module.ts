import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';

import { HeadComponent } from './head/head.component';
import { FormsModule } from '@angular/forms';
import { ChooseNameComponent } from './score/choose-name/choose-name.component';
import { WeddingEstimatorComponent } from './wedding-estimator/wedding-estimator.component';
import { WeddingSelectComponent } from './wedding-estimator/wedding-select/wedding-select.component';
import { WeddingOptionsComponent } from './wedding-estimator/wedding-select/wedding-options/wedding-options.component';
import { HomeComponent } from './home/home.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { TestingComponent } from './testing/testing.component';
import { HttpModule } from '@angular/http';
import { IdeasComponent } from './ideas/ideas.component';
import { ServerService } from './ideas/ideas.service';
import { IdeasResultComponent } from './ideas/ideas-result/ideas-result.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    ChooseNameComponent,
    HeadComponent,
    WeddingEstimatorComponent,
    WeddingOptionsComponent,
    WeddingSelectComponent,
    HomeComponent,
    CountdownComponent,
    TestingComponent,
    IdeasComponent,
    IdeasResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CountdownTimerModule.forRoot(),
    NgbModule,
    HttpModule    
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}