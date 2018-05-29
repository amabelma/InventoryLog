import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemSearchBarComponent } from './item-search-bar/item-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemSearchBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
