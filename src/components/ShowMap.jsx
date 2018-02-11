import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MapWithAMarker = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 20.6698553, lng: -103.3824093 }}
    >
      {props.reportes.map((report) =>
        <Marker key={report.numReport} position={{ lat: report.lat, lng: report.long }}>
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div><img src={`https://s3.amazonaws.com/chewiekie/img/${report.type}-icon.png`} alt=""/></div>
          </InfoWindow>
        </Marker>
      )}
    </GoogleMap>
));

class ShowMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animal: null, 
      bump: null,
      luminary: null
    };
  }

    render() {
        const { reports } = this.props;
        console.log()
        return (
            <div className='innerMap'>
                <MapWithAMarker
                    googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw&v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div className='responsiveMap' style={{ height: `670px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    zoom='14'
                    reportes={reports}
                />
            </div>
        )
    }
}

export default ShowMap;