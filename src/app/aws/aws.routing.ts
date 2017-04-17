import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    AwsGeneralComponent,
    AwsMethodsComponent,
    AwsAccountsComponent,
    AwsZonesComponent
} from './index';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'general'
  },
  {
    path: '',
    data: {
      title: 'AWS Module'
    },
    children: [
      {
        path: 'general',
        component: AwsGeneralComponent,
        data: {
          title: 'General'
        }
      },{
        path: 'methods',
        component: AwsMethodsComponent,
        data: {
          title: 'Methods'
        }
      },{
        path: 'zones',
        component: AwsZonesComponent,
        data: {
          title: 'Zones'
        }
      },{
        path: 'accounts',
        component: AwsAccountsComponent,
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
export class AWSRoutingModule {}
