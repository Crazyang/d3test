var app = angular.module('highlightApp', []);

app.controller('leftTopDivCtrl', function($scope) {
  $scope.colorFlg = false;
  $scope.persistentIssuesTabledata = [{
    "Indicator": "CEM: Relationgship",
    "Severity": "Amber",
    "Contact_Person": "S&D CSat Team"
  }, {
    "Indicator": "CEM: Transactional",
    "Severity": "Amber",
    "Contact_Person": "S&D CSat Team"
  }, {
    "Indicator": "SWG ISCIP: Client Health Index",
    "Severity": "Amber",
    "Contact_Person": "SWG Client Lead"
  }];
  $scope.deterioratedTabledata = [{
    "Indicator": "None",
    "Severity": "",
    "Contact_Person": ""
  }];
});

app.controller('rightTopDivCtrl', function($scope) {
  // $scope.;
});
app.controller('leftBottomDivCtrl', function($scope) {
  $scope.assessmentData = [{
    "Assessment": "GTS Account Delivery Health (CHIP)",
    "Frequency": "Monthly",
    "Last_Data": ">12 months",
    "Contact_Person": "GTS PE/Account Leader"
  }, {
    "Assessment": "GTS Quarterly Pluse",
    "Frequency": "Quarterly",
    "Last_Data": ">12 months",
    "Contact_Person": "GTS PE/Account Leader"
  }, {
    "Assessment": "GTS Erosion Risk Assessment(ERA)",
    "Frequency": "Quarterly",
    "Last_Data": ">12 months",
    "Contact_Person": "GTS PE/Account Leader"
  }, {
    "Assessment": "GTS Strategic Account Govemance(SAG)",
    "Frequency": "Bi-Annual",
    "Last_Data": ">12 months",
    "Contact_Person": "GTS PE/Account Leader"
  }, {
    "Assessment": "SWG iPlan",
    "Frequency": "Monthly",
    "Last_Data": ">12 months",
    "Contact_Person": "SWG Client Lead"
  }];
});
app.controller('rightBottomDivCtrl', function($scope) {

});
var margin = {
    top: 5,
    right: 40,
    bottom: 20,
    left: 300
  },
  width = 960 - margin.left - margin.right,
  height = 50 - margin.top - margin.bottom;
var sectordata = [{
  "title": "**CEM: Relationgship",
  "subtitle": "US$, in thousands",
  "ranges": [0, 300],
  "sectionRangesColor": [{
    "color": "red",
    "range": [0, 100]
  }, {
    "color": "yellow",
    "range": [100, 200]
  }, {
    "color": "green",
    "range": [200, 300]
  }, ],
  "markers": [120, 160]
}, {
  "title": "SWG ISSCIP: Client Health Index",
  "subtitle": "US$, in thousands",
  "ranges": [0, 300],
  "sectionRangesColor": [{
    "color": "red",
    "range": [0, 100]
  }, {
    "color": "yellow",
    "range": [100, 200]
  }, {
    "color": "green",
    "range": [200, 300]
  }, ],
  "markers": [200, 230],
}, {
  "title": "GBS 7 Keys:Risks",
  "subtitle": "US$, in thousands",
  "ranges": [0, 300],
  "sectionRangesColor": [{
    "color": "red",
    "range": [0, 100]
  }, {
    "color": "yellow",
    "range": [100, 200]
  }, {
    "color": "green",
    "range": [200, 300]
  }, ],
  "markers": [240, 250],
}];
var sectorBulletBar = d3.bulletBar()
  .width(width)
  .height(10)
  .markersIcon([{
    "type": "circle",
    "color": "blue",
    "descript": "Mark1"
  }, {
    "type": "rect",
    "color": "black",
    "descript": "Mark2"
  }]);
// d3.json("bullets.json", function(error, data) {
//   if (error) throw error;
var sectorElement = d3.select("#sectorBarchart");

function showSectorData(element, data, bulletBar) {
  var svg = element.selectAll("svg")
    .data(data)
    .enter().append("svg")
    .attr("class", "bulletBar")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(bulletBar);

  var title = svg.append("g")
    .style("text-anchor", "end")
    .attr("transform", "translate(-70," + height / 2 + ")");

  title.append("text")
    .attr("class", "title")
    .text(function(d) {
      return d.title;
    });
}

showSectorData(sectorElement, sectordata, sectorBulletBar);
var iotdata = [{
  "title": "**CEM: Relationgship",
  "subtitle": "US$, in thousands",
  "ranges": [0, 300],
  "sectionRangesColor": [{
    "color": "red",
    "range": [0, 100]
  }, {
    "color": "yellow",
    "range": [100, 200]
  }, {
    "color": "green",
    "range": [200, 300]
  }, ],
  "markers": [120, 220]
}, {
  "title": "**CEM: Transactionnal",
  "subtitle": "US$, in thousands",
  "ranges": [0, 300],
  "sectionRangesColor": [{
    "color": "red",
    "range": [0, 100]
  }, {
    "color": "yellow",
    "range": [100, 200]
  }, {
    "color": "green",
    "range": [200, 300]
  }, ],
  "markers": [290, 210],
}, {
  "title": "GBS 7 Keys:Stakeholders",
  "subtitle": "US$, in thousands",
  "ranges": [0, 300],
  "sectionRangesColor": [{
    "color": "red",
    "range": [0, 100]
  }, {
    "color": "yellow",
    "range": [100, 200]
  }, {
    "color": "green",
    "range": [200, 300]
  }, ],
  "markers": [240, 260],
}];
var iotBulletBar = d3.bulletBar()
  .width(width)
  .height(10)
  .markersIcon([{
    "type": "circle",
    "color": "blue",
    "descript": "Mark1"
  }, {
    "type": "rect",
    "color": "black",
    "descript": "Mark2"
  }]);
// d3.json("bullets.json", function(error, data) {
//   if (error) throw error;
function showIOTData(data) {
  var svg = d3.select("#iotBarchart").selectAll("svg")
    .data(data)
    .enter().append("svg")
    .attr("class", "bulletBar")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(iotBulletBar);

  var title = svg.append("g")
    .style("text-anchor", "end")
    .attr("transform", "translate(-70," + height / 2 + ")");

  title.append("text")
    .attr("class", "title")
    .text(function(d) {
      return d.title;
    });
}

showIOTData(iotdata);



var timeLinedata = {
  valueRanges: [{
    range: [0, 100],
    color: "red"
  }, {
    range: [100, 200],
    color: "yellow"
  }, {
    range: [200, 300],
    color: "green"
  }],
  duration: {
    from: new Date([2015, 1, 15]),
    to: new Date([2015, 7, 15])
  },
  trendsData: [{
    name: "GBS 7 keys:Team",
    color: "#000",
    trend: [{
      value: 100,
      at: new Date([2015, 1, 21])
    }, {
      value: 150,
      at: new Date([2015, 2, 15])
    }, {
      value: 150,
      at: new Date([2015, 3, 10])
    }, {
      //   value: 200,
      //   at: new Date([2015, 4, 1])
      // }, {
      value: 199,
      at: new Date([2015, 5, 1])
    }, {
      value: 150,
      at: new Date([2015, 6, 1])
    }]
  }, {
    name: "GBS 7 keys:Stakeholders",
    color: "#4056F3",
    trend: [{
      value: 100,
      at: new Date([2015, 1, 22])
    }, {
      value: 150,
      at: new Date([2015, 2, 15])
    }, {
      value: 140,
      at: new Date([2015, 3, 10])
    }, {
      //   value: 200,
      //   at: new Date([2015, 4, 1])
      // }, {
      value: 199,
      at: new Date([2015, 5, 1])
    }, {
      value: 250,
      at: new Date([2015, 6, 22])
    }]
  }, {
    name: "**GBS :CERS",
    color: "#06105A",
    trend: [{
      value: 200,
      at: new Date([2015, 1, 30])
    }, {
      value: 250,
      at: new Date([2015, 2, 15])
    }, {
      value: 250,
      at: new Date([2015, 3, 10])
        // }, {
        //   value: 200,
        //   at: new Date([2015, 4, 1])
    }, {
      value: 200,
      at: new Date([2015, 5, 1])
    }, {
      value: 150,
      at: new Date([2015, 6, 25])
    }]
  }]
};
var tredsChartDiv = d3.select("#historicTimeLineChart");

function showTrendData(selectElement, data) {
  var margin = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    },
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;
  var parseDate = d3.time.format("%Y%m%d").parse;
  var maxValue = 0;
  var minValue = 0;
  data.valueRanges.forEach(function(d, i) {
    maxValue = Math.max(maxValue, Math.max(d.range[0], d.range[1]));
    minValue = Math.min(maxValue, Math.min(d.range[0], d.range[1]));
  });

  var x = d3.time.scale();

  x.range([0, width]);
  // .range([data.duration.from, data.duration.to]);

  x.domain([data.duration.from, data.duration.to]);

  var y = d3.scale.linear()
    .range([height, 0]);

  y.domain([minValue, maxValue]);
  var xAxis = d3.svg.axis()
    // .outerTickSize(15)
    .scale(x)
    // .ticks(d3.time.month)
    // .ticks()
    .tickSize(-height, 0)
    .tickFormat(function(d) {
      return d3.time.format("%b %d")(new Date(d));
    })
    .orient("bottom");

  var yAxis = d3.svg.axis()
    .scale(y)
    .ticks(d3.time.days)
    .tickSize(0)
    .orient("left");

  var svg = selectElement.append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.bottom + ")");
  // var valueRanges = data.valueRanges;


  // for (var i = 0; i < valueRanges.length; i++) {
  //   var d = valueRanges[i];
  //   svg.append("rect")
  //     .attr("class", "range rangeSection")
  //     .attr("width", width)
  //     .attr("height", function() {
  //       return Math.abs(d.range[0] - d.range[1]);
  //     })
  //     .attr("y", function() {
  //       return Math.max(d.range[0], d.range[1]);
  //     })
  //     .attr("x", 0)
  //     .attr("style", function() {
  //       console.log("range rangeSection " + d.color);
  //       return "fill:" + d.color
  //     });
  // }
  var valueRanges = svg.selectAll("rect.range").data(data.valueRanges);
  valueRanges.enter().append("rect")
    .attr("class", "range rangeSection")
    .attr("width", width)
    .attr("height", function(d, i) {
      return Math.abs(d.range[0] - d.range[1]) * height / maxValue;
    })
    .attr("y", function(d, i) {
      return Math.min(d.range[0], d.range[1]) * height / maxValue;
    })
    .attr("x", 0)
    .attr("style", function(d) {
      console.log("range rangeSection " + d.color);
      return "fill:" + d.color
    });
  // var trendsData = svg.selectAll("line.trendsData").data(data.trendsData);
  // trendsData.enter().append("rect").attr("x", 30);
  var line = d3.svg.line()
    // .interpolate("linear")
    .interpolate("linear")
    // .interpolate(function interpolateLinear(points) {
    //   return points.join("L");
    // })
    .x(function(d) {
      return x(d.at);
    })
    .y(function(d) {
      return d.value * height / maxValue;
    });

  var trendLines = svg.selectAll(".trends")
    .data(data.trendsData)
    .enter().append("g")
    .attr("class", "trends");

  trendLines.append("path")
    .attr("class", "trendLine")
    .attr("d", function(d) {
      return line(d.trend);
    })
    .style("stroke", function(d) {
      return d.color;
    });


  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
  // var markLineDescriptions = selectElement.selectAll(".markLineDescription")
  //   .data(data.trendsData);
  // markLineDescriptions.enter().append("div")
  //   .attr("class", "markLineDescription")
  //   .attr("style", "width:100px; height:2px;")
  //   .text(function(d) {
  //     return d.name;
  //   })
  //   // .style("margin-left", 100)
  //   .style("background", function(d) {
  //     return d.color;
  //   });


}
showTrendData(tredsChartDiv, timeLinedata);
