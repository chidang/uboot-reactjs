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
          // [getDateData(95), 3],
          // [getDateData(94), 4],
          // [getDateData(93), 2],
          // [getDateData(92), 4],
          // [getDateData(91), 3],
          // [getDateData(90), 5],
          // [getDateData(89), 6],
          // [getDateData(88), 4],
          // [getDateData(87), 6],
          // [getDateData(86), 5],
          // [getDateData(85), 4],
          // [getDateData(84), 3],
          // [getDateData(83), 2],
          // [getDateData(82), 3],
          // [getDateData(81), 4],
          // [getDateData(80), 5],
          // [getDateData(79), 3],
          // [getDateData(78), 4],
          // [getDateData(77), 5],
          // [getDateData(76), 6],
          // [getDateData(75), 5],
          // [getDateData(74), 4],
          // [getDateData(73), 3],
          // [getDateData(72), 5],
          // [getDateData(71), 6],
          // [getDateData(70), 4],
          // [getDateData(69), 5],
          // [getDateData(68), 3],
          // [getDateData(67), 8],
          // [getDateData(66), 5],
          // [getDateData(65), 7],
          // [getDateData(64), 6],
          // [getDateData(63), 5],
          // [getDateData(62), 6],
          // [getDateData(61), 7],
          // [getDateData(60), 6],
          // [getDateData(59), 5],
          // [getDateData(58), 6],
          // [getDateData(57), 7],
          // [getDateData(56), 8],
          // [getDateData(55), 7],
          // [getDateData(54), 6],
          // [getDateData(53), 5],
          // [getDateData(52), 7],
          // [getDateData(51), 6],
          // [getDateData(50), 4],
          // [getDateData(49), 5],
          // [getDateData(48), 6],
          // [getDateData(47), 5],
          // [getDateData(46), 4],
          // [getDateData(45), 3],
          // [getDateData(44), 4],
          // [getDateData(43), 6],
          // [getDateData(42), 8],
          // [getDateData(41), 7],
          // [getDateData(40), 5],
          // [getDateData(39), 6],
          // [getDateData(38), 7],
          // [getDateData(37), 8],
          // [getDateData(36), 6],
          // [getDateData(35), 7],
          // [getDateData(34), 9],
          // [getDateData(33), 7],
          // [getDateData(32), 8],
          // [getDateData(31), 9],
          // [getDateData(30), 10],
          // [getDateData(29), 9],
          // [getDateData(28), 10],
          // [getDateData(27), 8],
          // [getDateData(26), 7],
          // [getDateData(25), 9],
          // [getDateData(24), 7],
          // [getDateData(23), 6],
          // [getDateData(22), 9],
          // [getDateData(21), 6],
          // [getDateData(20), 5],
          // [getDateData(19), 9],
          // [getDateData(18), 6],
          // [getDateData(17), 11],
          // [getDateData(16), 12],
          // [getDateData(15), 10],
          // [getDateData(14), 9],
          // [getDateData(13), 11],
          // [getDateData(12), 12],
          // [getDateData(11), 15],
          // [getDateData(10), 14],
          // [getDateData(9), 17],
          // [getDateData(8), 18],
          // [getDateData(7), 15],
          // [getDateData(6), 17],
          // [getDateData(5), 16],
          // [getDateData(4), 16],
          // [getDateData(3), 17],
          // [getDateData(2), 18],
          // [getDateData(1), 20],
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