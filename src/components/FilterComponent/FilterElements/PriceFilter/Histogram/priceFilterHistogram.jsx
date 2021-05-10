import React, { PureComponent } from 'react';
import ReactDOM from "react-dom";
import Surface from "./surface";
import { scaleLinear, scaleBand } from "d3-scale";
import { ascending, max } from "d3-array";


// **************************************************
//  SVG Layout
// **************************************************
const view = [1000, 450]; // [width, height]
const trbl = [10, 10, 30, 10]; // [top, right, bottom, left] margins

const dims = [
  // Adjusted dimensions [width, height]
  view[0] - trbl[1] - trbl[3],
  view[1] - trbl[0] - trbl[2]
];

// **************************************************
//  Mock Data
// **************************************************
// const ranges = [
//   { range:'1', frequency: 2 },
//   { range:'2', frequency: 4 },
//   { range:'3', frequency: 16 },
//   { range:'4', frequency: 20 },
//   { range:'5', frequency: 24 },
//   { range:'6', frequency: 54 },
//   { range:'7', frequency: 21 },
//   { range:'8', frequency: 13 },
//   { range:'9', frequency: 2 },
//   { range:'10', frequency: 22},
//   { range:'11', frequency: 32 },
//   { range:'12', frequency: 22 },
//   { range:'13', frequency: 24 },
//   { range:'14', frequency: 11 },
//   { range:'15', frequency: 2 }
// ];

const ranges = [
    { min:0, max:20, frequency: 2 },
    { min:21, max:40, frequency: 4 },
    { min:41, max:60, frequency: 16 },
    { min:61, max:80, frequency: 20 },
    { min:81, max:100, frequency: 24 },
    { min:101, max:120, frequency: 54 },
    { min:121, max:140, frequency: 21 },
    { min:141, max:160, frequency: 13 },
    { min:161, max:180, frequency: 2 },
    { min:181, max:200, frequency: 22},
    { min:201, max:220, frequency: 32 },
    { min:221, max:240, frequency: 22 },
    { min:241, max:260, frequency: 24 },
    { min:261, max:280, frequency: 11 },
    { min:281, max:300, frequency: 2 }
  ];

const y = scaleLinear()
  .range([dims[1], 0])
  .domain([0, max(ranges, d => d.frequency)]);

class PriceFilterHistogram extends PureComponent {
    state = {
        sortAlpha: true
      };

      render() {
        const { sortAlpha } = this.state;
        const sliderValue = this.props.sliderVal
        const sorted = ranges
          .sort(
              (a, b) => ascending(a.min, b.min)
          )
          .slice(0);
    
        const scale = scaleBand()
          .rangeRound([0, dims[0]])
          .domain(sorted.map(d => d.min))
          .padding(0.1);
    
        const width = scale.bandwidth();
    
        return (
          <div style={{ width: "100%" }}>
            <Surface view={view} trbl={trbl}>
              <g>
                {sorted.map(({ min, max, frequency }) => {
                  const x = scale(min);
                  return (
                    <g key={min} transform={`translate(${x},0)`}>
                      <rect
                        height={dims[1] - y(frequency)}
                        y={y(frequency)}
                        fill={(min>sliderValue[1] || max<sliderValue[0])? "gray" : "coral"}
                        opacity={0.75}
                        width={width}
                      />
                    </g>
                  );
                })}
              </g>
               
            </Surface>
          </div>
        );
      }
}

export default PriceFilterHistogram;