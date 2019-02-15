import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { SharedRoutingModule } from './shared-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { SimplemdeModule, SIMPLEMDE_CONFIG } from 'ng2-simplemde';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    MaterialModule,
    MarkdownModule.forRoot(),
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      useValue: {}
    })
  ],
  exports: [CommonModule, ReactiveFormsModule, MaterialModule, MarkdownModule, SimplemdeModule],
  declarations: []
})
export class SharedModule {}
