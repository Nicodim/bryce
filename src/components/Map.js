import React from 'react'
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import MapContainer from './MapContainer'

const mapState = {
  controls: ['default']
};

const Maps = () => {
    
        return (
          // <Map loadOptions={{lang: 'ru', apikey: "bed6e62d-5604-4f55-9048-12fa5c2ee8ce"}} width='100%' height='500px' onAPIAvailable={function () { console.log('API loaded'); }}  state={mapState} center={[55.754734, 37.583314]} zoom={10}>
          // </Map>
          <MapContainer/>
        );
}

export default Maps;
