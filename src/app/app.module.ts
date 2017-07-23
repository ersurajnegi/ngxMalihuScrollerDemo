import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MalihuCustomScrollerModule } from 'ngx-malihu-scroller';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MalihuCustomScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
