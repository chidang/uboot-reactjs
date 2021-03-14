import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jvectormap/jquery-jvectormap-in-mill");

const IndiaMap = props => {
    const defaultTheme = { color: { primaryColor: '#4285f4' } };
    const theme = Object.assign(defaultTheme, props.theme);

    const drawMap = (theme) => {
        $("#india-map").empty().vectorMap({ 
            map: "in_mill",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: theme.color.primaryColor
                }
            }
        });
    }

    useEffect(() => {
        drawMap(theme);
    }, [theme]);

    return (
        <Card className="flex-fill w-100">
            <Card.Header>
                <Card.Title tag="h5">India Map</Card.Title>
            </Card.Header>
            <Card.Body>
                <div id="india-map" style={{ height: 340 }} />
            </Card.Body>
        </Card>
    );
};

export default IndiaMap;
