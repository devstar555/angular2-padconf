import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    SqsGeneralComponent,
    SqsAccountsComponent,
    SqsMethodsComponent,
    SqsZonesComponent
} from './index';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'general'
  },
  {
    path: '',
    data: {
      title: 'SQS Module'
    },
    children: [
      {
        path: 'general',
        component: SqsGeneralComponent,
        data: {
          title: 'General'
        }
      },{
        path: 'methods',
        component: SqsMethodsComponent,
        data: {
          title: 'Methods'
        }
      },{
        path: 'zones',
        component: SqsZonesComponent,
        data: {
          title: 'Zones'
        }
      },{
        path: 'accounts',
        component: SqsAccountsComponent,
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
export class SQSRoutingModule {}
