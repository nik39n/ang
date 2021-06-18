import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { StudentComponent } from './student/student.component';
import { ItemComponent } from './item/item.component';
import { RouterModule, Routes } from '@angular/router';
import { IteComponent } from './item/ite/ite.component';
import { ProductServiceservise } from './services/ProductService.servise';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutdetComponent } from './aboutdet/aboutdet.component';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StudentComponent,
    ItemComponent,
    IteComponent,
    AboutdetComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // ProductServiceservise
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
