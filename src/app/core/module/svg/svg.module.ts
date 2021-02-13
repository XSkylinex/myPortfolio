import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgAngularComponent } from 'src/app/shared/svg/svg-angular/svg-angular.component';
import { SvgAwsComponent } from 'src/app/shared/svg/svg-aws/svg-aws.component';
import { SvgBootstrapComponent } from 'src/app/shared/svg/svg-bootstrap/svg-bootstrap.component';
import { SvgCloudfrontComponent } from 'src/app/shared/svg/svg-cloudfront/svg-cloudfront.component';
import { SvgCodepiplineComponent } from 'src/app/shared/svg/svg-codepipline/svg-codepipline.component';
import { SvgCss3Component } from 'src/app/shared/svg/svg-css3/svg-css3.component';
import { SvgEC2Component } from 'src/app/shared/svg/svg-ec2/svg-ec2.component';
import { SvgExpressjsComponent } from 'src/app/shared/svg/svg-expressjs/svg-expressjs.component';
import { SvgHtml5Component } from 'src/app/shared/svg/svg-html5/svg-html5.component';
import { SvgJqueryComponent } from 'src/app/shared/svg/svg-jquery/svg-jquery.component';
import { SvgJsComponent } from 'src/app/shared/svg/svg-js/svg-js.component';
import { SvgJsxComponent } from 'src/app/shared/svg/svg-jsx/svg-jsx.component';
import { SvgMongodbComponent } from 'src/app/shared/svg/svg-mongodb/svg-mongodb.component';
import { SvgMysqlComponent } from 'src/app/shared/svg/svg-mysql/svg-mysql.component';
import { SvgNodejsComponent } from 'src/app/shared/svg/svg-nodejs/svg-nodejs.component';
import { SvgReactComponent } from 'src/app/shared/svg/svg-react/svg-react.component';
import { SvgRestapiComponent } from 'src/app/shared/svg/svg-restapi/svg-restapi.component';
import { SvgRoute53Component } from 'src/app/shared/svg/svg-route53/svg-route53.component';
import { SvgS3Component } from 'src/app/shared/svg/svg-s3/svg-s3.component';
import { SvgSwordComponent } from 'src/app/shared/svg/svg-sword/svg-sword.component';
import { SvgTypeScriptComponent } from 'src/app/shared/svg/svg-type-script/svg-type-script.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
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
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
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
})
export class SvgModule {}
