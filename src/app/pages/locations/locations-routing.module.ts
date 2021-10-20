import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsContentComponent } from './locations-content/locations-content.component';

const routes: Routes = [
 {
  path: '', component: LocationsContentComponent,
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
