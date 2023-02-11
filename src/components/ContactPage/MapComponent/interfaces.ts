import { Icon, IconOptions, LatLngExpression } from "leaflet";

export interface IMap {
  mapConfig: {
    icon: Icon<IconOptions>;
    url: string;
    center: LatLngExpression;
    zoom: number;
  };
  markers: { position: LatLngExpression; label: string }[];
}
