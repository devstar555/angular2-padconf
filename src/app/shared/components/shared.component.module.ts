import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
    GeneralFormComponent,
    MethodFormComponent,
    ZoneFormComponent,
    AccountFormComponent,
    AccountEditFormComponent
} from './index';

@NgModule({
    declarations: [
        GeneralFormComponent,
        MethodFormComponent,
        ZoneFormComponent,
        AccountFormComponent,
        AccountEditFormComponent
    ],
    providers: [
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        GeneralFormComponent,
        MethodFormComponent,
        ZoneFormComponent,
        AccountFormComponent,
        AccountEditFormComponent
    ]
})

export class SharedComponentModule { }
