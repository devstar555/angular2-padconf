import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    MwsGeneralComponent,
    MwsMethodsComponent,
    MwsZonesComponent,
    MwsAccountsComponent
} from './index';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'general'
  },
  {
    path: '',
    data: {
      title: 'MWS Module'
    },
    children: [
      {
        path: 'general',
        component: MwsGeneralComponent,
        data: {
          title: 'General'
        }
      },{
        path: 'methods',
        component: MwsMethodsComponent,
        data: {
          title: 'Methods'
        }
      },{
        path: 'zones',
        component: MwsZonesComponent,
        data: {
          title: 'Zones'
        }
      },{
        path: 'accounts',
        component: MwsAccountsComponent,
        data: {
          title: 'Accounts'
        }
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MWSRoutingModule {}
