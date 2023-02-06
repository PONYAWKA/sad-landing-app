import "leaflet/dist/leaflet.css";

import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import { mapConfig, markers } from "./mock";
import { Body } from "./styled";
export const MapComponent = () => {
  return (
    <Body>
      <MapContainer
        center={mapConfig.center as LatLngExpression}
        zoom={mapConfig.zoom}
        scrollWheelZoom={true}
      >
        <TileLayer url={mapConfig.url} />
        {markers.map(({ position, label }) => (
          <Marker
            position={position as LatLngExpression}
            key={label}
            icon={mapConfig.icon}
          />
        ))}
      </MapContainer>
    </Body>
  );
};
