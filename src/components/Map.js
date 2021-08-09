import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../styles/Map.css'
import API from '../constants/MapsAPI'
import Marker from './Marker';
// import location from '../constants/Location'

class Map extends Component {
    
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    
    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'API' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <Marker
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          );
    }
}

export default Map