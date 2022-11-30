import { MarkerData } from "../types/map";

const generateRandomNumber = () => Math.floor(Math.random() * 100);

export const mapData: MarkerData[] = [
  {
    id: 1,
    name: "Infinity Mall",
    coordinate: {
      latitude: 19.08153239644127,
      longitude: 72.88496575593064,
    },
    image: `https://picsum.photos/50?random=${generateRandomNumber()}`,
  },
  {
    id: 2,
    name: "R City Mall",
    coordinate: {
      latitude: 19.097105679261368,
      longitude: 72.86470971417256,
    },
    image: `https://picsum.photos/50?random=${generateRandomNumber()}`,
  },
  {
    id: 3,
    name: "Phoenix Market City",
    coordinate: {
      latitude: 19.1111110101001,
      longitude: 72.9111110101001,
    },
    image: `https://picsum.photos/50?random=${generateRandomNumber()}`,
  },
  {
    id: 4,
    name: "Inorbit Mall",
    coordinate: {
      latitude: 19.06238823019832,
      longitude: 72.87947259206405,
    },
    image: `https://picsum.photos/50?random=${generateRandomNumber()}`,
  },
];
