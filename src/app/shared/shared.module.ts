import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [CommonModule, SharedRoutingModule, MaterialModule],
  exports: [CommonModule, MaterialModule],
  declarations: []
})
export class SharedModule { }
