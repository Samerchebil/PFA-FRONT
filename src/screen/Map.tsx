import React, { useState, useContext } from "react";
import { Text, VStack } from "../components";
import MapView, { Marker } from "react-native-maps";
import { getCornerCoordinates, getDefaultRegion } from "../utilities";
import { CollectionOrderContext, UserContext } from "../context";
import { CollectionOrder } from "../models";
import { CollectionOrderService } from "../service";
interface Props {
  navigation: any;
}

const Map: React.FC<Props> = ({ navigation }) => {
  const { location } = useContext(UserContext);
  const { orders } = useContext(CollectionOrderContext);
  const [region, setregion] = useState(() => getDefaultRegion(location));
  const { onRegionChange, isLoading } =
    CollectionOrderService.getNearCollectionOrders();

  return (
    <VStack style={{ flex: 1 }} justifyContent="center" alignItems="center">
      <MapView
        initialRegion={region}
        style={{
          flex: 1,
          width: "100%",
        }}
        onRegionChangeComplete={(data) => {
          setregion(data), onRegionChange(getCornerCoordinates(data));
        }}
        onPress={({ nativeEvent }) => console.log(nativeEvent.coordinate)}
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
            onPress={() => navigation.navigate("OrderDetail", order)}
            key={order.id + idx}
            coordinate={{
              latitude: order.location[0] as number,
              longitude: order.location[1] as number,
            }}
          />
        ))}
      </MapView>
    </VStack>
  );
};

export default Map;
