(function() {}

  d3.bartChart = function() {
    var orient = "left", // TODO top & bottom
      reverse = false,
      duration = 0,
      range = [0, ],
      colorsRange = [{
        color: "red",
        range: [0, 10]
      }, {
        color: "black",
        range: [10, 20]
      }, {
        color: "green",
        range: [20, 30]
      }, ],
      markers = [{
        type: "rect",
        value: 9
      }, {
        color: "rect",
        value: 25
      }, ],
      width = 380,
      height = 30,
      tickFormat = null;

    function sectionBarWidth(_colorsRange) {
      if (_colorsRange.range == null) {
        return 0;
      }
      var _sectionBarWidth = Math.abs(_colorsRange.range[0] - _colorsRange.range[
        0]);
      console.log("_sectionBarWidth" + _sectionBarWidth);
      return _sectionBarWidth;
    }

    function sectionBarColor(_colorsRange) {
      console.log("_colorsRange.color" + _colorsRange.color);
      return _colorsRange.color;
    }

    function bartChart(g) {
      g.each(function(d, i) {
          var g = d3.select(this);

          var barWidth = 0;
          var colorrangeArr = d.colorsRange;
          colorrangeArr.each(function(_colorsRange, i) {
              console.log("barWidth.color" + barWidth);
              barWidth = barWidth + sectionBarWidth(_colorsRange);
            }
            var x1 = d3.scale.linear()
              .domain([0, barWidth)
                .range(reverse ? [width, 0] : [0, width]);

                var range = g.selectAll("rect.range")
                  .data(colorrangeArr);
              }
            range.enter().append("rect")
            .attr("class", function(d, i) {
              return "range s" + i;
            })
            .attr("width", function(d, i) {
              return sectionBarWidth(d.colorsRange);
            })
            .attr("height", height)
            .attr("x", function(d, i) {
              return "range s" + i;
            });
          }


        }


      )();
