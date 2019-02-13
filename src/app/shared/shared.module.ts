import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { SharedRoutingModule } from './shared-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { SimplemdeModule, SIMPLEMDE_CONFIG } from 'ng2-simplemde';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    MarkdownModule.forRoot(),
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      useValue: {}
    })
  ],
  exports: [CommonModule, MaterialModule, MarkdownModule, SimplemdeModule],
  declarations: []
})
export class SharedModule {}
