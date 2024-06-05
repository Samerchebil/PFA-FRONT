import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { VStack } from "../common/FlexBox";
import { SectionHeader } from "./Header";
import mapStyle from "../../../assets/mapStyle.json";
import {
  Corners,
  getCornerCoordinates,
  getDefaultRegion,
} from "../../utilities";
import { CollectionOrder } from "../../models";
import { UserContext } from "../../context";

interface UserLocation {
  latitude: number;
  longitude: number;
  navigation: any;
}
interface Props {
  orders: CollectionOrder[];
  loadOrders: (region: Corners | null) => void;
  navigation: any;
}

const MapSection: React.FC<Props> = ({ orders, loadOrders, navigation }) => {
  const { location } = useContext(UserContext);
  const [region, setregion] = useState(() => getDefaultRegion(location));
  useEffect(() => {
    loadOrders(getCornerCoordinates(getDefaultRegion(location)));
  }, []);

  return (
    <VStack spacing={12}>
      <SectionHeader
        sectionTitle="Near Collectors"
        moreOptiontitle="Expand"
        moreOptionAction={() => console.log("more option action")}
      />
      <View>
        <MapView
          style={{ width: "100%", height: 200 }}
          customMapStyle={mapStyle}
          initialRegion={region}
          onRegionChangeComplete={(data) => {
            setregion(data), loadOrders(getCornerCoordinates(data));
          }}
          onPress={({ nativeEvent }) =>
            navigation.navigate("UserMap", { location })
          }
        >
          {location && (
            <Marker
              pinColor="#e1dfdf"
              coordinate={{
                latitude: location?.coords.latitude as number,
                longitude: location?.coords.longitude as number,
              }}
            />
          )}
          {orders.map((order: CollectionOrder, idx: number) => (
            <Marker
              key={order.id + idx}
              coordinate={{
                latitude: order.location[0] as number,
                longitude: order.location[1] as number,
              }}
            />
          ))}
        </MapView>
      </View>
    </VStack>
  );
};

export default MapSection;
