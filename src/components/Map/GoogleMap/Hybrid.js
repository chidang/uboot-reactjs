import React from "react";
import { Card } from 'react-bootstrap';
import GoogleMapReact from "google-map-react";

const Hybrid = props => {
  const defaultProps = {
    center: {
        lat: -33.8569,
        lng: 151.2152
    },
    zoom: 14
  };

  const getMapOptions = maps => {
    return {
      fullscreenControl: true,
      mapTypeControl: true,
      mapTypeId: maps.MapTypeId.HYBRID,
      scaleControl: true,
      scrollwheel: false,
      streetViewControl: true
    };
  };

  return (
    <Card className="flex-fill w-100">
      <Card.Header>
        <Card.Title tag="h5">Hybrid</Card.Title>
      </Card.Header>
      <Card.Body>
      <div style={{ height: 300, width: "100%" }}>
          <GoogleMapReact
            options={getMapOptions}
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Hybrid;
