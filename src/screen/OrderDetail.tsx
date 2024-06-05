import React from "react";
import { View } from "react-native";
import { Text, VStack } from "../components";
import QRCode from "react-native-qrcode-svg";
interface Props {
  navigation: any;
  route: any;
}

const OrderDetail: React.FC<Props> = ({ navigation, route }) => {
  const order = route.params;
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <VStack spacing={10} justifyContent="center">
        <QRCode value={order.id} size={200} />
        <Text>Order detail</Text>
      </VStack>
    </View>
  );
};

export default OrderDetail;
