import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { HomePageComponent } from './content/home-page/home-page.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
