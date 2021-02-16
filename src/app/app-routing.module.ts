import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { EducationPageComponent } from './content/education-page/education-page.component';
import { HomePageComponent } from './content/home-page/home-page.component';
import { AcademicProjectsPageComponent } from './content/portfolio/academic-projects-page/academic-projects-page.component';
import { ProjectsPageComponent } from './content/portfolio/projects-page/projects-page.component';
import { ResumePageComponent } from './content/resume-page/resume-page.component';
import { SkillsPageComponent } from './content/skills-page/skills-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutMeComponent,
  },
  {
    path: 'skills',
    component: SkillsPageComponent,
  },
  {
    path: 'project',
    component: ProjectsPageComponent,
  },
  {
    path: 'acproject',
    component: AcademicProjectsPageComponent,
  },
  {
    path: 'resume',
    component: ResumePageComponent,
  },
  {
    path: 'education',
    component: EducationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
