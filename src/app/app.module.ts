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
import { SvgJsComponent } from './shared/svg/svg-js/svg-js.component';
import { SvgTypeScriptComponent } from './shared/svg/svg-type-script/svg-type-script.component';
import { SvgJqueryComponent } from './shared/svg/svg-jquery/svg-jquery.component';
import { SvgCss3Component } from './shared/svg/svg-css3/svg-css3.component';
import { SvgNodejsComponent } from './shared/svg/svg-nodejs/svg-nodejs.component';
import { SvgExpressjsComponent } from './shared/svg/svg-expressjs/svg-expressjs.component';
import { SvgMongodbComponent } from './shared/svg/svg-mongodb/svg-mongodb.component';
import { SvgRestapiComponent } from './shared/svg/svg-restapi/svg-restapi.component';
import { SvgAwsComponent } from './shared/svg/svg-aws/svg-aws.component';
import { SvgMysqlComponent } from './shared/svg/svg-mysql/svg-mysql.component';
import { SvgEC2Component } from './shared/svg/svg-ec2/svg-ec2.component';
import { SvgCloudfrontComponent } from './shared/svg/svg-cloudfront/svg-cloudfront.component';
import { SvgRoute53Component } from './shared/svg/svg-route53/svg-route53.component';
import { SvgS3Component } from './shared/svg/svg-s3/svg-s3.component';
import { SvgCodepiplineComponent } from './shared/svg/svg-codepipline/svg-codepipline.component';

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
    SvgJsComponent,
    SvgTypeScriptComponent,
    SvgJqueryComponent,
    SvgCss3Component,
    SvgNodejsComponent,
    SvgExpressjsComponent,
    SvgMongodbComponent,
    SvgRestapiComponent,
    SvgAwsComponent,
    SvgMysqlComponent,
    SvgEC2Component,
    SvgCloudfrontComponent,
    SvgRoute53Component,
    SvgS3Component,
    SvgCodepiplineComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
