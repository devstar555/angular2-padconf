import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    FbaGeneralComponent,
    FbaMethodsComponent,
    FbaZonesComponent,
    FbaAccountsComponent
} from './index';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'general'
  },
  {
    path: '',
    data: {
      title: 'FBA Module'
    },
    children: [
      {
        path: 'general',
        component: FbaGeneralComponent,
        data: {
          title: 'General'
        }
      },{
        path: 'methods',
        component: FbaMethodsComponent,
        data: {
          title: 'Methods'
        }
      },{
        path: 'zones',
        component: FbaZonesComponent,
        data: {
          title: 'Zones'
        }
      },{
        path: 'accounts',
        component: FbaAccountsComponent,
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
export class FBARoutingModule {}
