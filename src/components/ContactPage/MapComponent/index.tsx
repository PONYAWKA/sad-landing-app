import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

import { IMap } from "./interfaces";
import { Body } from "./styled";

export const MapComponent = ({ mapConfig, markers }: IMap) => {
  return (
    <Body>
      <MapContainer
        center={mapConfig.center}
        zoom={mapConfig.zoom}
        scrollWheelZoom={true}
      >
        <TileLayer url={mapConfig.url} />
        {markers.map(({ position, label }) => (
          <Marker position={position} key={label} icon={mapConfig.icon} />
        ))}
      </MapContainer>
    </Body>
  );
};
