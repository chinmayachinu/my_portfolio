import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  {path: 'home' , component:HomeComponent},
  {path: 'resume' , component:ResumeComponent},
  {path: 'projects' , component:ProjectsComponent},
  {path: 'about' , component:AboutComponent},
  {path: 'contact' , component:ContactComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `HomeComponent`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
