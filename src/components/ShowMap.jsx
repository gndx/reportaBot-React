import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapWithAMarker = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 20.6698553, lng: -103.3824093 }}
    >
      {props.reportes.map((report) =>
        <Marker key={report.numReport} icon={`http://s3.amazonaws.com/chewiekie/img/${report.type}.png`} position={{ lat: report.lat, lng: report.long }} />
      )}
    </GoogleMap>
));

class ShowMap extends Component {

    render() {
        const { reports } = this.props;
        return (
            <div className='innerMap'>
                <MapWithAMarker
                    googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div className='responsiveMap' style={{ height: `670px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    zoom='12'
                    reportes={reports}
                />
            </div>
        )
    }
}

export default ShowMap;