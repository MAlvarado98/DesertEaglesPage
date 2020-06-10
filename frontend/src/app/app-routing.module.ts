import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { DocsComponent } from "./docs/docs.component";
import { WhatIsFirstComponent } from "./what-is-first/what-is-first.component";
import { TeamComponent } from "./team/team.component";

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'activities', component:ActivitiesComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'aboutUs', component:AboutUsComponent },
  { path: 'documents', component:DocsComponent },
  { path: 'whatIsFirst', component:WhatIsFirstComponent},
  { path: 'team', component:TeamComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
