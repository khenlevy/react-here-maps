import * as React from "react";

import HEREMap, { Circle } from "../../src/main";

interface MovableCircleMapState {
  center: H.geo.IPoint;
  radius: number;
}

export default class MovableCircleMap extends React.Component<object, MovableCircleMapState> {
  public static subtitle = "This example shows you how to create an interactive map" +
    " centred in London, England, with a circle of radius 1km displayed over the top of it." +
    " The circle's position can be toggled between two possible locations by clicking a " +
    "provided button, and toggled between two possible radii with another.";

  public static title = "Movable and Resizable Circle Map";

  public static code = "import React, { Component } from \"react\";\n" +
    "import HEREMap from \"react-here-maps\";\n" +
    "\n" +
    "export default class Map extends Component {\n" +
    "   render() {\n" +
    "       // center the map somewhere in London\n" +
    "       const center = {\n" +
    "           lat: 51.5,\n" +
    "           lng: 0,\n" +
    "       };\n" +
    "       \n" +
    "       return (\n" +
    "           <div>\n" +
    "               <HEREMap\n" +
    "                   appId={your_app_id}\n" +
    "                   appCode={your_app_code}\n" +
    "                   center={center}\n" +
    "                   zoom={8}\n" +
    "                   hidpi={true}\n" +
    "               >\n" +
    "                   <Circle\n" +
    "                       {...center}\n" +
    "                       strokeColor=\"#1275E8\"\n" +
    "                       fillColor=\"rgba(212, 92, 91, 0.2)\"\n" +
    "                       lineWidth={2}\n" +
    "                       radius={10000}\n" +
    "                   />\n" +
    "               </HEREMap>\n" +
    "               \n" +
    "               <button>\n" +
    "                   Change Position\n" +
    "               </button>\n" +
    "               \n" +
    "               <button>\n" +
    "                   Change Radius\n" +
    "               </button>\n" +
    "           </div>\n" +
    "       )\n" +
    "   }\n" +
    "}\n";

  public state: MovableCircleMapState = {
    center: {
      lat: 51.5,
      lng: 0,
    },

    radius: 10000,
  };

  constructor(props: any, context: any) {
    super(props, context);
    this.togglePosition = this.togglePosition.bind(this);
    this.toggleRadius = this.toggleRadius.bind(this);
  }

  public render() {
    // center the map somewhere in London
    const {
      center,
      radius,
    } = this.state;

    return (
      <div>
        <HEREMap
          center={center}
          zoom={8}
          hidpi={true}
          secure={true}
          appId="NoiW7CS2CC05ppu95hyL"
          appCode="28L997fKdiJiY7TVVEsEGQ"
        >
          <Circle
            {...center}
            strokeColor="#1275E8"
            fillColor="rgba(18, 117, 232, 0.2)"
            lineWidth={2}
            radius={radius}
          />
        </HEREMap>

        <button onClick={this.togglePosition}>
          Change Position
        </button>

        <button onClick={this.toggleRadius}>
          Change Radius
        </button>
      </div>
    );
  }

  private togglePosition() {
    const {
      center,
    } = this.state;

    center.lng = center.lng ? 0 : 0.2;

    this.setState({
      center,
    });
  }

  private toggleRadius() {
    let {
      radius,
    } = this.state;

    radius = radius === 10000 ? 5000 : 10000;

    this.setState({
      radius,
    });
  }
}
