import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

import { AppComponents } from './components.enum';
import { GasComponent } from './gas/gas.component';
import { PressComponent } from './press/press.component';
import { OilComponent } from './oil/oil.component';
import { PoresComponent } from './pores/pores.component';
import  { VolumeComponent } from './volume/volume.component';
import {  CarbonComponent } from './carbon/carbon.component';
import {  WaxComponent } from './wax/wax.component';
import { CentrifugeComponent } from './centrifuge/centrifuge.component';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      RouterOutlet, NgClass, GasComponent, 
      PressComponent, OilComponent,
      PoresComponent, VolumeComponent, WaxComponent,
      CarbonComponent, CentrifugeComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    activeTab = AppComponents.gas;
    appComponents: typeof AppComponents = AppComponents;

  // Налаштування лівого меню
  menuItems = [{
    title: 'Газопроникність',
    image: 'bg-gas',
    id: AppComponents.gas
  }, {
    title: 'Капілярний тиск',
    image: 'bg-press',
    id: AppComponents.press
  }, {
    title: 'Центрифугування',
    image: 'bg-centrifuge',
    id: AppComponents.centrifuge
  },  {
    title: 'Пористість',
    image: 'bg-pores',
    id: AppComponents.pores
  }, {
    title: 'Об\'ємна вага',
    image: 'bg-volume',
    id: AppComponents.volume
  }, {
    title: 'Карбонатність',
    image: 'bg-carbon',
    id: AppComponents.carbon
  }, {
    title: 'Нафтонасичення',
    image: 'bg-oil',
    id: AppComponents.oil
  }, {
    title: 'Об.вага в парафіні',
    image: 'bg-wax',
    id: AppComponents.wax
  }];


    setActiveTab(id: AppComponents) {
        this.activeTab = id;
    }
}
