import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import iconBank from "../../../assets/images/icon-bank.png";
import iconFactory from "../../../assets/images/icon-factory.png";
import bgRedGreen from "../../../assets/images/bg-red-green.png";
import bgYellowBlue from "../../../assets/images/bg-yellow-blue.png";

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jvectormap/jquery-jvectormap-us-aea");

const MapLegends = props => {
    var val = 2009;

    const drawMap = () => {
        $("#usa_map_legend").empty().vectorMap({
            map: "us_aea",
            markers: [
                [61.18, -149.53],
                [21.18, -157.49],
                [40.66, -73.56],
                [41.52, -87.37],
                [35.22, -80.84],
                [31.52, -87.37]
            ],
            series: {
                markers: [{
                    attribute: 'fill',
                    scale: ['#C8EEFF', '#0071A4'],
                    normalizeFunction: 'polynomial',
                    values: [408, 512, 550, 781],
                    legend: {
                        vertical: true
                    }
                }, {
                    attribute: 'image',
                    scale: {
                        bank: iconBank,
                        factory: iconFactory
                    },
                    values: {
                        '4': 'bank',
                        '5': 'factory'
                    },
                    legend: {
                        horizontal: true,
                        cssClass: 'jvectormap-legend-icons',
                        title: 'Business type'
                    }
                }],
                regions: [{
                    scale: {
                        red: '#ff0000',
                        green: '#00ff00'
                    },
                    attribute: 'fill',
                    values: {
                        "US-KS": 'red',
                        "US-MO": 'red',
                        "US-IA": 'green',
                        "US-NE": 'green'
                    },
                    legend: {
                        horizontal: true,
                        title: 'Color'
                    }
                }, {
                    scale: {
                        redGreen: 'https://jvectormap.com/img/bg-red-green.png',
                        yellowBlue: 'https://jvectormap.com/img/bg-yellow-blue.png'
                    },
                    values: {
                        "US-TX": 'redGreen',
                        "US-CA": 'yellowBlue'
                    },
                    attribute: 'fill',
                    legend: {
                        horizontal: true,
                        cssClass: 'jvectormap-legend-bg',
                        title: 'Pattern',
                        labelRender: function (v) {
                            return {
                                redGreen: 'low',
                                yellowBlue: 'high'
                            }[v];
                        }
                    }
                }]
            }
        });
    }

    useEffect(() => {
        drawMap();
    }, []);

    return (
        <Card className="flex-fill w-100">
            <Card.Header>
                <Card.Title tag="h5">Map Legends</Card.Title>
            </Card.Header>
            <Card.Body>
                <div id="usa_map_legend" style={{ height: 340 }} />
            </Card.Body>
        </Card>
    );
};

export default MapLegends;
