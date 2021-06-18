import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { StudentComponent } from '../student/student.component';
import { ItemComponent } from '../item/item.component';
import { AboutdetComponent } from '../aboutdet/aboutdet.component';

const routes: Routes=[
  {path: '', component:MainComponent},
  {path: 'students', component:StudentComponent},
  {path: 'item', component: ItemComponent,
    children:[
      {path:'det',component:AboutdetComponent}
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
