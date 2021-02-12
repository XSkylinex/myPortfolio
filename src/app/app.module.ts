import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { ContentComponent } from './content/content.component';
import { HomePageComponent } from './content/home-page/home-page.component';
import { SkillsPageComponent } from './content/skills-page/skills-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideNavbarComponent } from './shared/side-navbar/side-navbar.component';
import { SvgSwordComponent } from './shared/svg/svg-sword/svg-sword.component';
import { SvgHtml5Component } from './shared/svg/svg-html5/svg-html5.component';
import { SvgJsxComponent } from './shared/svg/svg-jsx/svg-jsx.component';
import { SvgBootstrapComponent } from './shared/svg/svg-bootstrap/svg-bootstrap.component';
import { SvgAngularComponent } from './shared/svg/svg-angular/svg-angular.component';
import { SvgReactComponent } from './shared/svg/svg-react/svg-react.component';
import { SvgCComponent } from './shared/svg/svg-c/svg-c.component';
import { SvgCppComponent } from './shared/svg/svg-cpp/svg-cpp.component';
import { SvgJsComponent } from './shared/svg/svg-js/svg-js.component';
import { SvgTypeScriptComponent } from './shared/svg/svg-type-script/svg-type-script.component';
import { SvgJqueryComponent } from './shared/svg/svg-jquery/svg-jquery.component';
import { SvgCss3Component } from './shared/svg/svg-css3/svg-css3.component';
import { SvgNodejsComponent } from './shared/svg/svg-nodejs/svg-nodejs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavbarComponent,
    HomePageComponent,
    ContentComponent,
    AboutMeComponent,
    SkillsPageComponent,
    SvgSwordComponent,
    SvgHtml5Component,
    SvgJsxComponent,
    SvgBootstrapComponent,
    SvgAngularComponent,
    SvgReactComponent,
    SvgCComponent,
    SvgCppComponent,
    SvgJsComponent,
    SvgTypeScriptComponent,
    SvgJqueryComponent,
    SvgCss3Component,
    SvgNodejsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
