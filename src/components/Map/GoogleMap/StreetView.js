import React from "react";
import ReactDOM from "react-dom";
import { Card } from 'react-bootstrap';
import GoogleMapReact from "google-map-react";

class Streetview extends React.Component {
  static defaultProps = {
    center: {
      lat: 42.345573, lng: -71.098326
    },
    zoom: 8
  };

  getMapOptions = () => {
    return {
      fullscreenControl: true,
      mapTypeControl: true,
      scaleControl: true,
      scrollwheel: false,
      streetViewControl: true
    };
  };

  apiIsLoaded = (map, maps) => {
    if (map) {
      const panorama = new maps.StreetViewPanorama(
        ReactDOM.findDOMNode(this.refs.panorama),
        {
          position: {
            lat: 42.345573, lng: -71.098326
          },
          pov: {
            heading: 1200,
            pitch: 1
          },
          visible: true
        }
      );
      map.setStreetView(panorama);
    }
  };

  render = () => (
    <Card className="flex-fill w-100">
        <Card.Header>
            <Card.Title tag="h5">Street View</Card.Title>
        </Card.Header>
        <Card.Body>
            <div style={{ height: 300, width: "100%" }}>
                <GoogleMapReact
                    ref={"panorama"}
                    options={this.getMapOptions}
                    bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps)}
                    yesIWantToUseGoogleMapApiInternals={true}
                />
            </div>
        </Card.Body>
    </Card>
  );
}

export default Streetview;
