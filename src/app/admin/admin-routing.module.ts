import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BlogComponent } from './blogs/blog/blog.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, children: [{ path: '', component: BlogComponent }] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
