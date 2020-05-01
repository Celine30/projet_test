import {NgModule} from '@angular/core';
import {MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
    exports: [
        MatSliderModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,

        MatTableModule,
        MatCheckboxModule,


    ]
})

export class MaterialModule {
}