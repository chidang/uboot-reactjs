import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jvectormap/jquery-jvectormap-us-aea");

const RegionLabel = props => {

    const drawMap = () => {
        $("#usa_region_label").empty().vectorMap({
            map: "us_aea",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: "#ccc"
                }
            },
            regionLabelStyle: {
                initial: {
                    fill: '#B90E32'
                },
                hover: {
                    fill: 'black'
                }
            },
            labels: {
                regions: {
                    render: function (code) {
                        var doNotShow = ['US-RI', 'US-DC', 'US-DE', 'US-MD'];

                        if (doNotShow.indexOf(code) === -1) {
                            return code.split('-')[1];
                        }
                    },
                    offsets: function (code) {
                        return {
                            'CA': [-10, 10],
                            'ID': [0, 40],
                            'OK': [25, 0],
                            'LA': [-20, 0],
                            'FL': [45, 0],
                            'KY': [10, 5],
                            'VA': [15, 5],
                            'MI': [30, 30],
                            'AK': [50, -25],
                            'HI': [25, 50]
                        }[code.split('-')[1]];
                    }
                }
            }
        });
    }

    useEffect(() => {
        drawMap();
    }, []);

    return (
        <Card className="flex-fill w-100">
            <Card.Header>
                <Card.Title tag="h5">USA Region labels</Card.Title>
            </Card.Header>
            <Card.Body>
                <div id="usa_region_label" style={{ height: 340 }} />
            </Card.Body>
        </Card>
    );
};

export default RegionLabel;
