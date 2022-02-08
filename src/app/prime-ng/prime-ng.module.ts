import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  declarations: [],
  exports: [
    FormsModule,
    ButtonModule,
    RippleModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    FieldsetModule,
    ToggleButtonModule,
  ],
})
export class PrimeNgModule {}
