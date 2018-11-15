import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { PhotograpyComponent } from './photograpy/photograpy.component';

import { SimplemdeModule, SIMPLEMDE_CONFIG } from 'ng2-simplemde';

import { MarkdownModule } from 'ngx-markdown';
import { AboutComponent } from './about/about.component';
@NgModule({
  imports: [
    SharedModule,

    MarkdownModule.forRoot(),
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      useValue: {}
    }),
    DashboardRoutingModule
  ],
  declarations: [HomeComponent, TravelComponent, PhotograpyComponent, AboutComponent]
})
export class DashboardModule {}
