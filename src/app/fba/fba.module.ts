import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FBARoutingModule } from './fba.routing';
import {
    FbaGeneralComponent,
    FbaMethodsComponent,
    FbaZonesComponent,
    FbaAccountsComponent
} from './index';

import { SharedComponentModule } from '../shared/components/shared.component.module';

@NgModule({
  declarations: [
    FbaGeneralComponent,
    FbaMethodsComponent,
    FbaZonesComponent,
    FbaAccountsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FBARoutingModule,
    SharedComponentModule
  ],
  providers: []
})
export class FBAModule { }
