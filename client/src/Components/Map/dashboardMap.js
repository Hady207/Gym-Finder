import React, { useState, useEffect, useContext, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
// import ReactMapGL from 'react-map-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ3ltLWZpbmRlcjEiLCJhIjoiY2tkbmJiOHVvMDlqdTMwcGFydnlibWpjNSJ9.K-fvwbCEK9N-ax5CzwwgJA';

const Map = ({ locations }) => {
  // const { coordinate } = locations;
  const mapContainerRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [48.091771, 29.347441],
      zoom: 12.5,
    });
    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-left');

    const marker = new mapboxgl.Marker()
      .setLngLat([48.091771, 29.347441])
      .addTo(map);

    // const marker = new mapboxgl.Marker()
    //   .setLngLat([48.091771, 29.347441])
    //   .addTo(map);
    // clean up on unmount
    return () => map.remove();
  }, [mapContainerRef]);

  return <div className="gymbox gymbox__map" ref={mapContainerRef} />;
};

export default Map;
