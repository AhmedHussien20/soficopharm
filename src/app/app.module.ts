import { NgModule, NO_ERRORS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { UserLoginService } from './Services/UserLoginService';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {PanelModule} from 'primeng/panel';
import {CalendarModule} from 'primeng/calendar';

import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { PersonFormComponent } from './Authentication/perosn/person-form/person-form.component';
import { PersonListComponent } from './Authentication/perosn/person-list/person-list.component';
@NgModule({
  declarations: [
    AppComponent,
 
    HomePageComponent,
    PersonFormComponent,
    PersonListComponent,
    
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    InputTextModule,
    AppRoutingModule,CardModule,ButtonModule,CheckboxModule,
    RadioButtonModule,DropdownModule,InputTextareaModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ToolbarModule,
    PanelModule,
    CalendarModule,
  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
