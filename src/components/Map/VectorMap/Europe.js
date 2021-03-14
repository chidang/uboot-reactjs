import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jvectormap/jquery-jvectormap-europe-mill");

const EuropeMap = props => {
    const defaultTheme = { color: { primaryColor: '#4285f4' } };
    const theme = Object.assign(defaultTheme, props.theme);

    const drawMap = (theme) => {
        $("#europe-map").empty().vectorMap({ 
            map: "europe_mill",
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
                <Card.Title tag="h5">Europe Map</Card.Title>
            </Card.Header>
            <Card.Body>
                <div id="europe-map" style={{ height: 340 }} />
            </Card.Body>
        </Card>
    );
};

export default EuropeMap;
