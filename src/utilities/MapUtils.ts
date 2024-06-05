import { LocationObject } from "expo-location";

export function getDefaultRegion(location: LocationObject | null) {
  const defaultLocation = {
    latitude: 35.8291366,
    latitudeDelta: 0.00480159288114379,
    longitude: 10.6200906,
    longitudeDelta: 0.009475238621234894,
  };
  if (location) {
    defaultLocation.latitude = location?.coords.latitude as number;
    defaultLocation.latitude = location?.coords.latitude as number;
  }
  return defaultLocation;
}

type Location = {
  latitude: number;
  longitude: number;
};
export type Corners = {
  topLeft: Location;
  topRight: Location;
  bottomLeft: Location;
  bottomRight: Location;
};

export function getCornerCoordinates(region: any): Corners | null {
  if (!region) {
    return null;
  }

  const { latitude, longitude, latitudeDelta, longitudeDelta } = region;
  const topLeft = {
    latitude: latitude + latitudeDelta / 2,
    longitude: longitude - longitudeDelta / 2,
  };
  const topRight = {
    latitude: latitude + latitudeDelta / 2,
    longitude: longitude + longitudeDelta / 2,
  };
  const bottomLeft = {
    latitude: latitude - latitudeDelta / 2,
    longitude: longitude - longitudeDelta / 2,
  };
  const bottomRight = {
    latitude: latitude - latitudeDelta / 2,
    longitude: longitude + longitudeDelta / 2,
  };

  return { topLeft, topRight, bottomLeft, bottomRight };
}
