import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Play1Component } from './play1/play1.component';
import { Play2Component } from './play2/play2.component';
import { Play3Component } from './play3/play3.component';
import { Play4Component } from './play4/play4.component';
import { Play5Component } from './play5/play5.component';
import { Play6Component } from './play6/play6.component';
import { Play7Component } from './play7/play7.component';
import { Play8Component } from './play8/play8.component';
import { Play9Component } from './play9/play9.component';
import { Play10Component } from './play10/play10.component';

@NgModule({
  declarations: [
    AppComponent,
    Play1Component,
    Play2Component,
    Play3Component,
    Play4Component,
    Play5Component,
    Play6Component,
    Play7Component,
    Play8Component,
    Play9Component,
    Play10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
