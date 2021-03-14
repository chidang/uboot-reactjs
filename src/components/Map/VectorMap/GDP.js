import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import gdpData from "../../../vendor/jvectormap/data/gdp";

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jvectormap/jquery-jvectormap-world-mill");

const GDP = () => {
    const drawMap = () => {
        $("#world_gdp_map").empty().vectorMap({
            map: 'world_mill',
            backgroundColor: "transparent",
            series: {
                regions: [{
                    values: gdpData,
                    scale: ['#C8EEFF', '#0071A4'],
                    normalizeFunction: 'polynomial'
                }]
            },
            onRegionTipShow: function (e, el, code) {
                el.html(el.html() + ' (GDP - ' + gdpData[code] + ')');
            }
        });
    }

    useEffect(() => {
        drawMap();
    }, []);

    return (
        <Card className="flex-fill w-100">
            <Card.Header>
                <Card.Title tag="h5">GDP by country visualization</Card.Title>
            </Card.Header>
            <Card.Body>
                <div id="world_gdp_map" style={{ height: 340 }} />
            </Card.Body>
        </Card>
    );
};

export default GDP;
