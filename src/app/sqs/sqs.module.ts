import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SQSRoutingModule } from './sqs.routing';

import {
    SqsGeneralComponent,
    SqsAccountsComponent,
    SqsMethodsComponent,
    SqsZonesComponent
} from './index';

import { SharedComponentModule } from '../shared/components/shared.component.module';

@NgModule({
  declarations: [
    SqsGeneralComponent,
    SqsAccountsComponent,
    SqsMethodsComponent,
    SqsZonesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SQSRoutingModule,
    SharedComponentModule
  ],
  providers: []
})
export class SQSModule { }
