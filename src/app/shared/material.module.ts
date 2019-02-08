import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class MaterialModule {}
