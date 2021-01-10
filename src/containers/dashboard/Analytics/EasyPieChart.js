import React, { useEffect } from 'react';

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("../../../vendor/easy-pie-chart/easypiechart");

const EasyPieChart = props => {
    const defaultTheme = { color: { primaryColor: '#4285f4' } };
    const theme =  Object.assign( defaultTheme, props.theme);

    const drawPieChart = (theme) => {
        $('.easy-pie-chart').easyPieChart({
            easing: 'easeOutBounce',
            barColor: theme.color.primaryColor,
            scaleLength: 6,
            trackColor: '#ccc',
            scaleColor: false,
            lineWidth: 4,
            trackWidth: 4,
            lineCap: 'butt',
            size: 40,
            onStep: function(from, to, percent) {
                //props.percent.text(Math.round(percent) + '%');
            }
        });
    }

    useEffect(() => {
        drawPieChart(theme);
    }, [theme]);

    return (
        <div className="easy-pie-chart position-relative d-inline-flex align-items-center justify-content-center" data-percent="86">
            <div className="d-flex flex-column align-items-center justify-content-center position-absolute pos-left pos-right pos-top pos-bottom fw-300 fs-sm">
            <span className="percent d-block"></span>
            </div>
        </div>
    );
};
    
export default EasyPieChart;
