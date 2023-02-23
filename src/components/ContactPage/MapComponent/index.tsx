import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

import { IMap } from "./interfaces";
import { Body } from "./styled";

export const MapComponent = ({
  mapConfig: { zoom, center, icon, url },
  markers,
}: IMap) => {
  return (
    <Body>
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer url={url} />
        {markers.map(({ position, label }) => (
          <Marker position={position} key={label} icon={icon} />
        ))}
      </MapContainer>
    </Body>
  );
};
