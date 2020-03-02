import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { Mongoose } from 'mongoose';

import { KeysService } from './keys.service';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { KeyPickComponent } from './key-pick/key-pick.component';
import { KeyCertaintyDrillComponent } from './key-certainty-drill/key-certainty-drill.component';
import { FlashDrillComponent } from './flash-drill/flash-drill.component';
import { PitchTrainingComponent } from './pitch-training/pitch-training.component';


@NgModule({
  declarations: [
    AppComponent,
    KeyPickComponent,
    KeyCertaintyDrillComponent,
    MenuComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [KeysService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
