import React, { useContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";

import {
  Button,
  Container,
  Header,
  MapSection,
  OrderHistory,
  UserStats,
  VStack,
} from "../components";
import { ScrollView, SafeAreaView } from "react-native";
import { UserDAO } from "../DAO";
import { CollectionOrderContext, ModeContext, UserContext } from "../context";
import { User } from "../models";
import { CollectionOrderService } from "../service";

interface Props {
  navigation: any;
}

const UserFeed: React.FC<Props> = ({ navigation }) => {
  const { isUserMode } = useContext(ModeContext);
  const { setNotification } = useContext(ModeContext);
  const { setUser, user, setLocation } = useContext(UserContext);
  const { orders, history, collectionHistory } = useContext(
    CollectionOrderContext
  );

  const { onRegionChange, isLoading } =
    CollectionOrderService.getNearCollectionOrders();

  const { isLoading: loadingHisotry } =
    CollectionOrderService.getOrdersHistory();
  const { isLoading: loadingCollectionHistory } =
    CollectionOrderService.getCollectionHistory();

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      (user as User).location = [
        location.coords.latitude,
        location.coords.longitude,
      ];

      setUser(user);
    })();
  }, []);

  return (
    <Container>
      <StatusBar style="inverted" />
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <ScrollView
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            flex: 1,
          }}
        >
          <VStack spacing={38}>
            <UserStats />
            <MapSection
              navigation={navigation}
              orders={orders}
              loadOrders={onRegionChange}
            />
            <OrderHistory orders={isUserMode ? history : collectionHistory} />
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default UserFeed;
