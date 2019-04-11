import { HttpClientModule } from '@angular/common/http';
import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { HeadComponent } from './head/head.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
   MatCheckboxModule, MatTableModule, MatPaginatorModule, 
   MatSortModule, MatExpansionModule, MatInputModule, 
   MatSnackBarModule, MatCardModule, MatSidenavModule, 
   MatDialogModule, MatGridListModule, MatListModule, 
   MatOptionModule, MatSelectModule} from '@angular/material';
import { TableTestComponent } from './table-test/table-test.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DatabaseComponent } from './table-test/database/database.component';
import { AgmCoreModule } from '@agm/core';
import { Lvl2Component } from './testing/lvl2/lvl2.component';
import { Lvl1Component } from './testing/lvl1/lvl1.component';
import { Lvl3Component } from './testing/lvl3/lvl3.component';
import { Lvl4Component } from './testing/lvl4/lvl4.component';
import { Lvl5Component } from './testing/lvl5/lvl5.component';
import { PopupComponent } from './testing/lvl5/popup/popup.component';
import { Lvl6Component } from './testing/lvl6/lvl6.component';
import { SubIdeaComponent } from './ideas/sub-idea/sub-idea.component';
import { MeasureConverterComponent } from './measure-converter/measure-converter.component';
import { WeatherService } from './testing/lvl4/lvl4.service';



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
    TableTestComponent,
    DatabaseComponent,
    Lvl2Component,
    Lvl1Component,
    Lvl3Component,
    Lvl4Component,
    Lvl5Component,
    PopupComponent,
    Lvl6Component,
    SubIdeaComponent,
    MeasureConverterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBFyRsf2UhHNwioJc5NaXfbblvGV4Afh0s'
    }),

    CountdownTimerModule.forRoot(), // for countdown component
    NgbModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MatButtonModule, MatOptionModule, MatSelectModule,
    MatCheckboxModule, MatTableModule, MatGridListModule, MatListModule,
    MatPaginatorModule, MatSortModule, MatExpansionModule, MatSidenavModule,
    MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule, MatDialogModule
  ],
  entryComponents: [
    PopupComponent
  ],
  providers: [ServerService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}