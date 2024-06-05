import React from "react";
import { View } from "react-native";
import { Text } from "../components";
interface Props {}

const OrderHistory: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>OrderHistory</Text>
    </View>
  );
};

export default OrderHistory;
