import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mws',
    pathMatch: 'full',
  },  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'mws',
        loadChildren: './mws/mws.module#MWSModule'
      }, {
        path: 'aws',
        loadChildren: './aws/aws.module#AWSModule'
      }, {
        path: 'fba',
        loadChildren: './fba/fba.module#FBAModule'
      }, {
        path: 'sqs',
        loadChildren: './sqs/sqs.module#SQSModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
