import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { PhotograpyComponent } from './photograpy/photograpy.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  imports: [SharedModule, DashboardRoutingModule],
  declarations: [HomeComponent, TravelComponent, PhotograpyComponent, AboutComponent]
})
export class DashboardModule {}
