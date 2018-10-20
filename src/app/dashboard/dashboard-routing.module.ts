import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { PhotograpyComponent } from './photograpy/photograpy.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'photography', component: PhotograpyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
