import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { PersonFormComponent } from './Authentication/perosn/person-form/person-form.component';
import { PersonListComponent } from './Authentication/perosn/person-list/person-list.component';
 

const routes: Routes = [
  {
    path:"",
    component:PersonListComponent
    
  },
  {
    path:"Add",
    component:PersonFormComponent


  } ,
  {
    path:"Edit/:Id",
    data: { mode: "edit" },
    component:PersonFormComponent


  } 
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
