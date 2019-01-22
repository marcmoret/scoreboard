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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CountdownTimerModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}