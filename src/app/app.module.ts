import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StressComponent } from './stress/stress.component';
import { HomeComponent } from './home/home.component';
import { IndividualsComponent } from './individuals/individuals.component';
import { CorporatesComponent } from './corporates/corporates.component';
import { StudentsComponent } from './students/students.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
const routes : Routes=
[
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full',
  },
{
  path:'stress',
  component : StressComponent
},

{
  path : 'home',
  component : HomeComponent
},

{
  path : 'individuals',
  component : IndividualsComponent
},

{
  path : 'corporates',
  component : CorporatesComponent
},
{
  path : 'toolbox',
  component : ToolboxComponent
},
{
  path : 'students',
  component : StudentsComponent
},
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StressComponent,
    HomeComponent,
    IndividualsComponent,
    CorporatesComponent,
    StudentsComponent,
    ToolboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
