import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AWSRoutingModule } from './aws.routing';

import {
  AwsGeneralComponent,
  AwsMethodsComponent,
  AwsAccountsComponent,
  AwsZonesComponent
} from './index';

import { SharedComponentModule } from '../shared/components/shared.component.module';

@NgModule({
  declarations: [
    AwsGeneralComponent,
    AwsMethodsComponent,
    AwsAccountsComponent,
    AwsZonesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AWSRoutingModule,
    SharedComponentModule
  ],
  providers: []
})
export class AWSModule { }
