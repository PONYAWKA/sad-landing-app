import { icon } from "leaflet";

import markerIcon from "@/assets/icons/contacts/markerIcon.svg";

export const markers = [
  {
    position: [45, 34],
    label: "Marker 0",
  },
  {
    position: [17, 39],
    label: "Marker 1",
  },
  {
    position: [43, -83],
    label: "Marker 2",
  },
];

const customMarkerIcon = icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const mapConfig = {
  icon: customMarkerIcon,
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  center: [47, 39],
  zoom: 4,
};
