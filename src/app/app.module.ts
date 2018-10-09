import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TabsModule } from './tabs/tabs.module';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, TabsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
