import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticamenuPageRoutingModule } from './politicamenu-routing.module';

import { PoliticamenuPage } from './politicamenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticamenuPageRoutingModule
  ],
  declarations: [PoliticamenuPage]
})
export class PoliticamenuPageModule {}
