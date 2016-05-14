(function() {

  d3.bulletBar = function() {
    var orient = "left", // TODO top & bottom
      reverse = false,
      duration = 0,
      ranges = bulletBarRanges,
      sectionRangesColor = bulletSectionRangesColor,
      markers = bulletBarMarkers,
      markersIcon = [{
        "type": "circle",
        "color": "blue",
        "descript": "Mark1"
      }, {
        "type": "rect",
        "color": "black",
        "descript": "Mark2"
      }],
      width = 380,
      height = 30,
      tickFormat = null;

    // For each small multiple…
    function bulletBar(g) {
      g.each(function(d, i) {
        var rangez = ranges.call(this, d, i).slice().sort(d3.descending),
          sectionRangeColorz = bulletSectionRangesColor(d),
          // markerz = markers.call(this, d, i).slice().sort(d3.descending),
          markerz = bulletBarMarkers(d),
          g = d3.select(this);

        // Compute the new x-scale.
        var x1 = d3.scale.linear()
          .domain(rangez)
          .range(reverse ? [width, 0] : [0, width]);

        // Retrieve the old x-scale, if this is an update.
        var x0 = this.__chart__ || d3.scale.linear()
          .domain([0, Infinity])
          .range(x1.range());

        // Stash the new scale.
        this.__chart__ = x1;

        // Derive width-scales from the x-scales.
        var w0 = bulletBarWidth(x0),
          w1 = bulletBarWidth(x1);

        // Update the range rects.
        var range = g.selectAll("rect.range")
          .data(rangez);

        range.enter().append("rect")
          .attr("class", "range s0")
          .attr("width", rangez[0])
          .attr("height", height)
          .attr("x", reverse ? x0 : 0)
          .transition()
          .duration(duration)
          .attr("width", rangez[0])
          .attr("x", reverse ? x1 : 0);

        var sectionRangeColor = g.selectAll("rect.rangeSectionColor")
          .data(sectionRangeColorz);

        sectionRangeColor.enter().append("rect")
          .attr("class", "range rangeSectionColor")
          .attr("width", function(d, i) {
            var lwidth = Math.abs(d.range[0] -
              d.range[1]);
            console.log("range rangeSectionColor width" + lwidth);
            // if (rangez[0] > 0) {
            //   lwidth = lwidth / rangez[0] * w0;
            // }
            console.log("range rangeSectionColor width" + lwidth);
            return lwidth;
          })
          .attr("height", height)
          .attr("x", function(d, i) {
            var lx = Math.min(d.range[0],
              d.range[1]);
            console.log("range rangeSectionColor lx" + lx);
            // if (rangez[0] > 0) {
            //   lx = lx / rangez[0] * w0;
            // }
            console.log("range rangeSectionColor lx" + lx);
            return lx;
          })
          .attr("style", function(d) {
            console.log("range rangeSectionColor lx" + d.color);
            return "fill:" + d.color
          });
        // range.transition()
        //   .duration(duration)
        //   .attr("x", reverse ? x1 : 0)
        //   .attr("width", w1)
        //   .attr("height", height);


        // Update the marker lines.
        var marker = g.selectAll("rect.marker")
          .data(markerz);

        marker.enter().append("rect")
          .attr("x", function(d, i) {
            var xi = markerz[i];
            return xi;
          })
          .attr("rx", function(d, i) {
            var iconStr = markersIcon[i].type;
            if (iconStr != null) {
              if (iconStr == "circle") {
                return height / 2;
              }
            }
            return 0;
          })
          .attr("ry", function(d, i) {
            var iconStr = markersIcon[i].type;
            if (iconStr != null) {
              if (iconStr == "circle") {
                return height / 2;
              }
            }
            return 0;
          })
          .attr("style", function(d, i) {
            var colorStr = markersIcon[i].color;
            if (colorStr != null) {
              return "fill:" + colorStr;
            }
            return "fill:" + "black";
          })
          .attr("height", height)
          .attr("width", height);
        // var marker = g.selectAll("rect.marker");
        // for (var i = 0; i < markerz.length; ++i) {
        //   var iconStr = markersIcon[i];
        //   if (iconStr != null) {
        //     if (iconStr == "rect") {
        //       marker.enter().append("rect")
        //         .attr("x", function(d, i) {
        //           var xi = markerz[i];
        //           return xi;
        //         })
        //         .attr("style", function(d) {
        //           return "fill:" + "black";
        //         })
        //         .attr("height", height)
        //         .attr("width", height);
        //     }
        //   }
        // }


        // marker.enter().append("rect")
        //   .attr("class", "marker")
        //   .attr("x1", x0)
        //   .attr("x2", x0 + 2)
        //   .attr("y1", height / 6)
        //   .attr("y2", height * 5 / 6)
        //   .transition()
        //   .duration(duration)
        //   .attr("x1", x1)
        //   .attr("x2", x1);
        //
        // marker.transition()
        //   .duration(duration)
        //   .attr("x1", x1)
        //   .attr("x2", x1)
        //   .attr("y1", height / 6)
        //   .attr("y2", height * 5 / 6);

        // Compute the tick format.
        var format = tickFormat || x1.tickFormat(8);

        // Update the tick groups.
        // var tick = g.selectAll("g.tick")
        //   .data(x1.ticks(8), function(d) {
        //     return this.textContent || format(d);
        //   });
        //
        // // Initialize the ticks with the old scale, x0.
        // var tickEnter = tick.enter().append("g")
        //   .attr("class", "tick")
        //   .attr("transform", bulletBarTranslate(x0))
        //   .style("opacity", 1e-6);
        //
        // tickEnter.append("line")
        //   .attr("y1", height)
        //   .attr("y2", height * 7 / 6);

        // tickEnter.append("text")
        //   .attr("text-anchor", "middle")
        //   .attr("dy", "1em")
        //   .attr("y", height * 7 / 6)
        //   .text(format);
        //
        // // Transition the entering ticks to the new scale, x1.
        // tickEnter.transition()
        //   .duration(duration)
        //   .attr("transform", bulletBarTranslate(x1))
        //   .style("opacity", 1);

        // Transition the updating ticks to the new scale, x1.
        // var tickUpdate = tick.transition()
        //   .duration(duration)
        //   .attr("transform", bulletBarTranslate(x1))
        //   .style("opacity", 1);
        //
        // tickUpdate.select("line")
        //   .attr("y1", height)
        //   .attr("y2", height * 7 / 6);
        //
        // tickUpdate.select("text")
        //   .attr("y", height * 7 / 6);

        // Transition the exiting ticks to the new scale, x1.
        // tick.exit().transition()
        //   .duration(duration)
        //   .attr("transform", bulletBarTranslate(x1))
        //   .style("opacity", 1e-6)
        //   .remove();
      });
      // var markerDescription = d3.selectAll("rect.markerDescription")
      //   .data(markersIcon);
      //
      // markerDescription.enter().append("rect")
      //   .attr("x", function(d, i) {
      //     return 0;
      //   })
      //   .attr("rx", function(d, i) {
      //     var iconStr = markersIcon[i].type;
      //     if (iconStr != null) {
      //       if (iconStr == "circle") {
      //         return height / 2;
      //       }
      //     }
      //     return 0;
      //   })
      //   .attr("rx", function(d, i) {
      //     var iconStr = markersIcon[i].type;
      //     if (iconStr != null) {
      //       if (iconStr == "circle") {
      //         return height / 2;
      //       }
      //     }
      //     return 0;
      //   })
      //   .attr("style", function(d) {
      //     return "fill:" + "black";
      //   })
      //   .attr("height", height)
      //   .attr("width", height);
      d3.timer.flush();
    }

    // left, right, top, bottom
    bulletBar.orient = function(x) {
      if (!arguments.length) return orient;
      orient = x;
      reverse = orient == "right" || orient == "bottom";
      return bulletBar;
    };

    // ranges (bad, satisfactory, good)
    bulletBar.ranges = function(x) {
      if (!arguments.length) return ranges;
      ranges = x;
      return bulletBar;
    };

    // markers (previous, goal)
    bulletBar.markers = function(x) {
      if (!arguments.length) return markers;
      markers = x;
      return bulletBar;
    };



    bulletBar.width = function(x) {
      if (!arguments.length) return width;
      width = x;
      return bulletBar;
    };

    bulletBar.height = function(x) {
      if (!arguments.length) return height;
      height = x;
      return bulletBar;
    };

    bulletBar.tickFormat = function(x) {
      if (!arguments.length) return tickFormat;
      tickFormat = x;
      return bulletBar;
    };

    bulletBar.duration = function(x) {
      if (!arguments.length) return duration;
      duration = x;
      return bulletBar;
    };

    bulletBar.markersIcon = function(x) {
      if (!arguments.length) return markersIcon;
      markersIcon = x;
      return bulletBar;
    };

    return bulletBar;
  };

  function bulletBarRanges(d) {
    return d.ranges;
  }


  function bulletSectionRangesColor(d) {
    console.log("bulletSectionRangesColor" + d.sectionRangesColor);
    return d.sectionRangesColor;
  }

  function bulletBarMarkers(d) {
    return d.markers;
  }


  function bulletBarTranslate(x) {
    return function(d) {
      return "translate(" + x(d) + ",0)";
    };
  }

  function bulletBarWidth(x) {
    var x0 = x(0);
    return function(d) {
      console.log("bulletBarWidth" + Math.abs(x(d) - x0));
      return Math.abs(x(d) - x0);
    };
  }

})();
