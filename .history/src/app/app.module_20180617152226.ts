import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component'import { provideForRootGuard } from '@angular/router/src/router_module';
import { HttpModule } from '@angular/http';
import { KeyPickComponent } from './key-pick/key-pick.component';
import { KeyCertaintyDrillComponent } from './key-certainty-drill/key-certainty-drill.component';
import { MenuComponent } from './menu/menu.component';
import { KeysService } from './keys.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KeyPickComponent,
    KeyCertaintyDrillComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [KeysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
