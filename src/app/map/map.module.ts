import { NgModule } from '@angular/core';

import { AngularCesiumModule, ViewerConfiguration } from 'angular-cesium';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [MapComponent],
  imports: [AngularCesiumModule.forRoot()],
  providers: [ViewerConfiguration]
})
export class MapModule {}
