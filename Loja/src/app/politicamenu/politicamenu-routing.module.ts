import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticamenuPage } from './politicamenu.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticamenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticamenuPageRoutingModule {}
