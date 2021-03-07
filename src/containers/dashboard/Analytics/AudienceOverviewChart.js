import * as d3 from "d3";
import nv from 'nvd3';

const AudienceOverviewChart = () => {
    const getDateData = function(minusDate) {
      var d = new Date();
      d = d.setDate(d.getDate() - minusDate);
      return d;
    };
    const audienceOverviewAreaChartData = [{
        key: "This Year",
        color: 'blue',
        values: [
          [getDateData(0), 21],
        ],
      }, ];
      nv.addGraph(function() {
        var areaChart = nv.models
          .stackedAreaChart()
          .useInteractiveGuideline(true)
          .x(function(d) {
            return d[0];
          })
          .y(function(d) {
            return d[1];
          })
          .pointSize(0.5)
          .margin({ left: 35, right: 25, top: 20, bottom: 20 })
          .controlLabels({ stacked: "Stacked" })
          .showControls(false)
          .showLegend(false)
          .duration(300);
        areaChart.xAxis.tickFormat(function(d) {
          var monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          d = new Date(d);
          d = monthsName[d.getMonth()] + " " + d.getDate();
          return d;
        });
        areaChart.yAxis.tickFormat(d3.format(",.0f"));
        d3.select("#audience-overview-chart")
          .append("svg")
          .datum(audienceOverviewAreaChartData)
          .transition()
          .duration(1000)
          .call(areaChart)
          .each("start", function() {
            setTimeout(function() {
              d3.selectAll("#dashboard-area-chart *").each(function() {
                if (this.__transition__) this.__transition__.duration = 1;
              });
            }, 0);
          });
        nv.utils.windowResize(areaChart.update);
        return areaChart;
      });
    return <div id="audience-overview-chart" style={{height: "270px"}}></div>
}

export default AudienceOverviewChart;