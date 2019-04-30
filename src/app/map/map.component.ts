import { Component, OnInit } from '@angular/core';
import { ViewerConfiguration } from 'angular-cesium';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // constructor(private viewerConf: ViewerConfiguration) {
  //   viewerConf.viewerOptions = {
  //     selectionIndicator: false,
  //     timeline: false,
  //     infoBox: false,
  //     fullscreenButton: false,
  //     baseLayerPicker: false,
  //     animation: false,
  //     shouldAnimate: false,
  //     homeButton: false,
  //     geocoder: false,
  //     navigationHelpButton: false,
  //     navigationInstructionsInitiallyVisible: false
  //     // mapMode2D: Cesium.MapMode2D.ROTATE
  //   };

  //   // viewerConf.viewerModifier = (viewer: any) => {
  //   //   viewer.screenSpaceEventHandler.removeInputAction(
  //   //     Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
  //   //   );
  //   // };
  // }

  ngOnInit() {}
}
