import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header/header.component';

@NgModule({
  imports: [SharedModule, CoreRoutingModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class CoreModule {}
