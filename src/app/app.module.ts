import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {GoogleAnalyticsService} from './google-analytics.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { ContentComponent } from './content/content.component';
import { SkillsPageComponent } from './content/skills-page/skills-page.component';
import { SvgModule } from './core/module/svg/svg.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideNavbarComponent } from './shared/side-navbar/side-navbar.component';
import { ProjectsPageComponent } from './content/portfolio/projects-page/projects-page.component';
import { AcademicProjectsPageComponent } from './content/portfolio/academic-projects-page/academic-projects-page.component';
import { ResumePageComponent } from './content/resume-page/resume-page.component';
import { ContactPageComponent } from './content/contact-page/contact-page.component';
import { PublicationsPageComponent } from './content/publications-page/publications-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavbarComponent,
    ContentComponent,
    AboutMeComponent,
    SkillsPageComponent,
    ProjectsPageComponent,
    AcademicProjectsPageComponent,
    ResumePageComponent,
    ContactPageComponent,
    PublicationsPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent],
})


export class AppModule {}
