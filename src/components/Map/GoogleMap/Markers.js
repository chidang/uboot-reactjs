import React from "react";
import { Card } from 'react-bootstrap';
import GoogleMapReact from "google-map-react";
import IconMarker from './IconMarker';

const Markers = (props) => {
    const mapOptionsCreator = (map) => {
        return {
            zoomControl: true,
            fullscreenControl: true,
            styles: [
                {
                    featureType: "water",
                    elementType: "labels.text",
                    stylers: [
                        {
                            color: "#959595",
                        },
                    ],
                },
                {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#d3d3d3",
                        },
                    ],
                },
                {
                    featureType: "transit",
                    stylers: [
                        {
                            color: "#808080",
                        },
                        {
                            visibility: "off",
                        },
                    ],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            visibility: "on",
                        },
                        {
                            color: "#b3b3b3",
                        },
                    ],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ffffff",
                        },
                    ],
                },
                {
                    featureType: "road.local",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            visibility: "on",
                        },
                        {
                            color: "#ffffff",
                        },
                        {
                            weight: 1.8,
                        },
                    ],
                },
                {
                    featureType: "road.local",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            color: "#d7d7d7",
                        },
                    ],
                },
                {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            visibility: "on",
                        },
                        {
                            color: "#ebebeb",
                        },
                    ],
                },
                {
                    featureType: "administrative",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#a7a7a7",
                        },
                    ],
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ffffff",
                        },
                    ],
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ffffff",
                        },
                    ],
                },
                {
                    featureType: "landscape",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            visibility: "on",
                        },
                        {
                            color: "#efefef",
                        },
                    ],
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#696969",
                        },
                    ],
                },
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            visibility: "on",
                        },
                        {
                            color: "#999999",
                        },
                    ],
                },
                {
                    featureType: "poi",
                    elementType: "labels.icon",
                    stylers: [
                        {
                            visibility: "off",
                        },
                    ],
                },
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                        {
                            visibility: "off",
                        },
                    ],
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            color: "#d6d6d6",
                        },
                    ],
                },
                {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [
                        {
                            visibility: "off",
                        },
                    ],
                },
                {},
                {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#dadada",
                        },
                    ],
                },
            ],
        }
    }
    console.log(props.markersData)
    let markers = Object.keys(props.markersData).map( adKey => {
        return [...Array(props.markersData[adKey])].map( ( _, i ) => {
          return <IconMarker
            key={adKey + i}
            lat={props.markersData[adKey].location.lat}
            lng={props.markersData[adKey].location.lng}
            text="iQ"
          />
        } );
      } )
      .reduce( (arr, el) => {
        return arr.concat(el);
      }, []);

    const maxLat =  props.markersData.map(mkr => mkr.location.lat).reduce((a, b) => Math.max(a, b));
    const maxLng =  props.markersData.map(mkr => mkr.location.lng).reduce((a, b) => Math.max(a, b));  
    const minLat = props.markersData.map(mkr => mkr.location.lat).reduce((a, b) => Math.min(a, b));
    const minLng = props.markersData.map(mkr => mkr.location.lng).reduce((a, b) => Math.min(a, b));
    const center = {
        lat: (maxLat + minLat) / 2,
        lng: (maxLng + minLng) / 2
    };

    return (
        <Card className="flex-fill w-100">
        <Card.Header>
            <Card.Title tag="h5">Marker</Card.Title>
        </Card.Header>
        <Card.Body>
            <div style={{ height: 300, width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    hoverDistance={30}
                    options={mapOptionsCreator}
                    defaultZoom={10}
                    defaultCenter={center}
                    {...props}
                >
                    {markers}
                </GoogleMapReact>
            </div>
        </Card.Body>
    </Card>
    )
}

export default Markers;
