import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPComponent } from './main/mainp.component';
import { SidebarComponents } from './sidebar/sidebar.component';
import { MenuComponent} from './menu/menu.component';
import { ItemComponent } from './main/item/item.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Routes}from "@angular/router";

const appRoutes: Routes=[
  {path: 'add', component:AddComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPComponent,
    SidebarComponents,
    MenuComponent,
    ItemComponent,
    AddComponent,

  ],
  imports: [

    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
