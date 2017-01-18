import React from 'react';
import GoogleMap from './lib/GoogleMap';
import { ReactiveVar } from 'meteor/reactive-var'
import { Tracker } from 'meteor/tracker'

function handleMapOptions() {
  return {
    center: new google.maps.LatLng(-37.8136, 144.9631),
    zoom: 8,
  }; 
//    var latLng = Geolocation.latLng();
//    return {
//        center: new google.maps.LatLng(latLng.lat, latLng.lng),
//        zoom: 8,
//    }; 
}

function handleOnReady(name) {
  GoogleMaps.ready(name, map => {
    const marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance,
    });
  });
}

function MyMap() {
  return (
    <GoogleMap onReady={handleOnReady} mapOptions={handleMapOptions}>
      Loading!
    </GoogleMap>
  );
}

export default MyMap;
