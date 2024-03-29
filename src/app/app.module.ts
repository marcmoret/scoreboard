import { HttpClientModule } from '@angular/common/http';
import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { HeadComponent } from './head/head.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChooseNameComponent } from './score/choose-name/choose-name.component';
import { WeddingEstimatorComponent } from './wedding-estimator/wedding-estimator.component';
import { WeddingSelectComponent } from './wedding-estimator/wedding-select/wedding-select.component';
import { WeddingOptionsComponent } from './wedding-estimator/wedding-select/wedding-options/wedding-options.component';
import { HomeComponent } from './home/home.component';
import { CountdownComponent } from './countdown/countdown.component';
import { TestingComponent } from './testing/testing.component';
import { HttpModule } from '@angular/http';
import { IdeasComponent } from './ideas/ideas.component';
import { ServerService } from './ideas/ideas.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableTestComponent } from './table-test/table-test.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
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
import { CollageWallComponent } from './countdown/collage-wall/collage-wall.component';
import { CollageModalComponent } from './countdown/collage-modal/collage-modal.component';
import { CollageModalWelcomeComponent } from './countdown/collage-modal/collage-modal-welcome/collage-modal-welcome.component';
import { CollageModalGeneralComponent } from './countdown/collage-modal/collage-modal-general/collage-modal-general.component';
import { GalleryModalComponent } from './common/gallery-modal/gallery-modal.component';
import { PasswordComponent } from './countdown/collage-wall/collage-wall-password.component';
import { PhonePipe } from './common/phonepipe';
import { FutTrackerComponent } from './fut-tracker/fut-tracker.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    ChooseNameComponent,
    HeadComponent,
    GalleryModalComponent,
    WeddingEstimatorComponent,
    WeddingOptionsComponent,
    WeddingSelectComponent,
    HomeComponent,
    CountdownComponent,
    TestingComponent,
    PasswordComponent,
    IdeasComponent,
    TableTestComponent,
    DatabaseComponent,
    Lvl2Component,
    Lvl1Component,
    Lvl3Component,
    Lvl4Component,
    Lvl5Component,
    PopupComponent,
    PhonePipe,
    Lvl6Component,
    SubIdeaComponent,
    MeasureConverterComponent,
    CollageWallComponent,
    CollageModalComponent,
    CollageModalWelcomeComponent,
    CollageModalGeneralComponent,
    FutTrackerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBFyRsf2UhHNwioJc5NaXfbblvGV4Afh0s'
    }),
    NgbModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MatButtonModule, MatOptionModule, MatSelectModule, MatTooltipModule, MatStepperModule,
    MatCheckboxModule, MatTableModule, MatGridListModule, MatListModule,
    MatPaginatorModule, MatSortModule, MatExpansionModule, MatSidenavModule, MatInputModule, MatIconModule,
    MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule, MatDialogModule
  ],
  entryComponents: [
    PopupComponent,
    CollageModalComponent,
    GalleryModalComponent,
    PasswordComponent
  ],
  providers: [ServerService, WeatherService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}