import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BlogComponent } from './blogs/blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [BlogComponent, AdminComponent],
  imports: [SharedModule, AdminRoutingModule]
})
export class AdminModule {}
