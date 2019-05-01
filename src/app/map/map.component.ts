import { Component, OnInit } from '@angular/core';
import { ViewerConfiguration } from 'angular-cesium';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private viewerConf: ViewerConfiguration) {
    this.viewerConf.viewerOptions = {
      selectionIndicator: true,
      timeline: true,
      infoBox: true,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      shouldAnimate: false,
      homeButton: true,
      geocoder: false,
      navigationHelpButton: true,
      navigationInstructionsInitiallyVisible: true,
      mapMode2D: Cesium.MapMode2D.ROTATE
    };

    this.viewerConf.viewerModifier = (viewer: any) => {
      viewer.screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      );
    };
  }

  ngOnInit() {}
}
