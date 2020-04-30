import {NgModule} from '@angular/core';
import {MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
    exports: [
        MatSliderModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatSlideToggleModule,
    ]
})

export class MaterialModule {
}