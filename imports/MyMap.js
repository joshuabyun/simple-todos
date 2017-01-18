import React from 'react';
import GoogleMap from './lib/GoogleMap';
import { ReactiveVar } from 'meteor/reactive-var'
import { Tracker } from 'meteor/tracker'
import { Geolocation } from 'meteor/mdg:geolocation';

function handleMapOptions() {
  //var latLng = Geolocation.latLng();
  var latLng = new ReactiveVar({lat: -37.8136, lng: 144.9631});
  var originalLatLng = latLng;    
  //console.log('reactiveVar',latLng.get());
  Tracker.autorun(function(computation){
        if (latLng.get() != originalLatLng.get()) {
            computation.stop();
            console.log(latLng.get());
            var lat = latLng.curValue.lat;
            var lng = latLng.curValue.lng;
        }
    });
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
