
/* Labels */
var energyData = [
    0.1,0.2,0,0.4,0.5,0.6,0.7,0.8,0.9,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,0.1,0.2,0.3,0.4,0.5,0.6,
    0.7,0.8,0.9,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,0.1,0.2,0.3,
    0.4,0.5,0.6,0.7,0.8,0.9
   ];
var chart = circularHeatChart()
	.innerRadius(8)
    .segmentHeight(50)
	.numSegments(18)
    .range(["white", "red"])
    .radialLabels([""])
    .segmentLabels(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]);
/*var data = [];
for(var i=0; i<72; i++) {
    data[i] = Math.random();
}*/
d3.select('#chart3')
    .selectAll('svg')
    .data([energyData])
    .enter()
    .append('svg')
    .call(chart);

/*------------ end-------- */
/* An array of objects */
data = [];
for(var i=0; i<240; i++) {
    data[i] = {title: "Segment "+i, value: Math.round(Math.random()*100)};
}

chart.accessor(function(d) {return d.value;})
    .radialLabels(null)
    .segmentLabels(null);
d3.select('#chart4')
    .selectAll('svg')
    .data([data])
    .enter()
    .append('svg')
    .call(chart);

/* Add a mouseover event */
d3.selectAll("#chart4 path").on('mouseover', function() {
	var d = d3.select(this).data()[0];
    d3.select("#info").text(d.title + ' has value ' + d.value);
});
d3.selectAll("#chart4 svg").on('mouseout', function() {
    d3.select("#info").text('');	
});

