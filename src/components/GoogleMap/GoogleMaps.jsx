import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Here } from "../../components/layout/Hero/HeroStyles";

const AnyReactComponent = ({ text }) => (
  <div>
    <Here />
    {text}
  </div>
);

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 400,
      zoom: 18,
      mapPosition: {
        lat: props.location[0],
        lng: props.location[1],
      },
      markerPosition: {
        lat: props.location[0],
        lng: props.location[1],
      },
    };
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: this.state.height, width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
          defaultCenter={this.state.mapPosition}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.state.mapPosition.lat}
            lng={this.state.mapPosition.lng}
            text="We are here"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;
