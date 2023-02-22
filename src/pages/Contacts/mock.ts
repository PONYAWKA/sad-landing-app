import L, { icon } from "leaflet";

import location from "@/assets/icons/contacts/location.svg";
import mail from "@/assets/icons/contacts/mail.svg";
import markerIcon from "@/assets/icons/contacts/markerIcon.svg";
import phone from "@/assets/icons/contacts/phone.svg";

export const breadCrumb = {
  curPage: "Contacts",
  links: [{ name: "Home", to: "/" }],
};

export const contacts = [
  {
    icon: mail,
    title: "Email",
    description: "ensome@info.co.us",
    to: "mailto:ensome@info.co.us",
  },
  {
    icon: phone,
    title: "Phone",
    description: "+1 601-201-5580",
    to: "tel:1231231234",
  },
  {
    icon: location,
    title: "Address",
    description: "1642 Washington Ave, Jackson, MS",
    to: null,
  },
];

export const mapConfig = {
  mapConfig: {
    icon: icon({
      iconUrl: markerIcon,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    }),
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    center: L.latLng(47, 39),
    zoom: 3,
  },

  markers: [
    {
      position: L.latLng(45, 34),
      label: "Marker 0",
    },
    {
      position: L.latLng(17, 39),
      label: "Marker 1",
    },
    {
      position: L.latLng(43, -83),
      label: "Marker 2",
    },
  ],
};
