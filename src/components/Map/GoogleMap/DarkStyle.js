import React from "react";
import { Card } from 'react-bootstrap';
import GoogleMapReact from "google-map-react";

const DarkStyle = () => {
  const defaultProps = {
    center: {
        lat: -33.8569,
        lng: 151.2152
    },
    zoom: 14
  };

  const getMapOptions = () => {
    return {
      fullscreenControl: true,
      mapTypeControl: true,
      scaleControl: true,
      scrollwheel: false,
      streetViewControl: true,
      styles: [
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36
            },
            {
              color: "#000000"
            },
            {
              lightness: 40
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#000000"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 17
            },
            {
              weight: 1.2
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 21
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 29
            },
            {
              weight: 0.2
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 17
            }
          ]
        }
      ]
    };
  };

  return (
    <Card className="flex-fill w-100">
      <Card.Header>
        <Card.Title tag="h5">Dark Style</Card.Title>
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

export default DarkStyle;
