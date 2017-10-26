import { MalihuCustomScrollerModule } from 'ngx-malihu-scroller';
import { Test2Component } from './test2/test2.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';

import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
  { path: 'test1', component: Test1Component, },
  { path: 'test2', component: Test2Component, },
  { path: '',
    redirectTo: '/test1',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
    Test1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MalihuCustomScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
