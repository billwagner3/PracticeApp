import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KeyPickComponent } from './key-pick/key-pick.component';
import { KeyCertaintyDrillComponent } from './key-certainty-drill/key-certainty-drill.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    KeyPickComponent,
    KeyCertaintyDrillComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
