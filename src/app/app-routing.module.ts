
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { ServiceDetailsComponent } from './pages/home/service-details/service-details.component';
import { LoginComponent } from './common/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'enquiries',component:EnquiryComponent},
  {path:'login',component:LoginComponent},
  {path:'services/:id',component:ServiceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
