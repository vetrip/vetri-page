import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, CoreRoutingModule],
  exports: [],
  declarations: []
})
export class CoreModule {}
