import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MWSRoutingModule } from './mws.routing';
import {
    MwsGeneralComponent,
    MwsMethodsComponent,
    MwsZonesComponent,
    MwsAccountsComponent
} from './index';

import { SharedComponentModule } from '../shared/components/shared.component.module';

@NgModule({
  declarations: [
    MwsGeneralComponent,
    MwsMethodsComponent,
    MwsZonesComponent,
    MwsAccountsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MWSRoutingModule,
    SharedComponentModule
  ],
  providers: []
})
export class MWSModule { }
