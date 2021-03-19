import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import data from '../../../vendor/jvectormap/data/us-unemployment.json';

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jvectormap/jquery-jvectormap-us-aea");

const UsaMap = props => {
    var val = 2009;
    const defaultTheme = { color: { primaryColor: '#4285f4' } };
    const theme = Object.assign(defaultTheme, props.theme);

    const drawMap = () => {
        $("#usa_map").empty().vectorMap({ 
            map: "us_aea",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: "#28a745"
                }
            },
            markers: data.metro.coords,
            series: {
                markers: [{
                    attribute: 'fill',
                    scale: ['#FEE5D9', theme.color.primaryColor],
                    values: data.metro.unemployment[val]
                },{
                    attribute: 'r',
                    scale: [5, 20],
                    values: data.metro.population[val]
                }],
                regions: [{
                    scale: ['#DEEBF7', theme.color.primaryColor],
                    attribute: 'fill',
                    values: data.states[val]
                }]
            },
        });
    }

    useEffect(() => {
        drawMap();
    });

    return (
        <Card className="flex-fill w-100">
            <Card.Header>
                <Card.Title tag="h5">USA unemployment</Card.Title>
            </Card.Header>
            <Card.Body>
                <div id="usa_map" style={{ height: 340 }} />
            </Card.Body>
        </Card>
    );
};

export default UsaMap;
