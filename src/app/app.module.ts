import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactItemComponent } from './pages/contact/contact-item/contact-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceItemComponent } from './pages/home/service-item/service-item.component';
import { ServiceDetailsComponent } from './pages/home/service-details/service-details.component';
import { EnquiryFormComponent } from './pages/home/enquiry-form/enquiry-form.component';
import { FormsModule } from '@angular/forms';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    ContactItemComponent,
    ServiceItemComponent,
    ServiceDetailsComponent,
    EnquiryFormComponent,
    EnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
