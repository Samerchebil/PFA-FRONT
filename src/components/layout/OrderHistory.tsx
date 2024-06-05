import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { HStack, VStack } from "../common/FlexBox";
import { SectionHeader } from "./Header";
import { Text } from "../common/Text";
import { ModeContext, useTheme } from "../../context";
import { LocationIcon, PositionIcon } from "../common/icons";
import { CollectionOrder } from "../../models";
import { QrCodeSm } from "../common/icons/QRcode";
import { useNavigation } from "@react-navigation/native";

interface OrderItemProps {
  type: string;
  address: string;
  isCollected: boolean;
}

const OrderItem: React.FC<OrderItemProps> = ({
  type,
  address,
  isCollected,
}) => {
  const {
    theme: { colors },
  } = useTheme();

  const itemStyle = isCollected
    ? {
        titleColor: "white",
        addressColor: "hint",
        background: colors.buttonBackground,
        icons: colors.white,
      }
    : {
        titleColor: colors.text,
        addressColor: "hint",
        background: "#ededed",
        icons: colors.black,
      };

  return (
    <HStack
      justifyContent="space-between"
      style={{
        backgroundColor: itemStyle.background,
        padding: 16,
        alignItems: "center",
        borderRadius: 16,
      }}
    >
      <HStack spacing={10} alignItems="center">
        <LocationIcon color={itemStyle.icons} />
        <VStack>
          <Text variant="h1" color={itemStyle.titleColor}>
            {type}
          </Text>
          <Text variant="hint" color={itemStyle.addressColor}>
            {address}
          </Text>
        </VStack>
      </HStack>
      {!isCollected && <QrCodeSm color={itemStyle.icons} />}
    </HStack>
  );
};

interface Props {
  orders: CollectionOrder[];
}
const OrderHisotry: React.FC<Props> = ({ orders }) => {
  const navigation = useNavigation();
  const { isUserMode } = useContext(ModeContext);
  return (
    <VStack spacing={16} style={{ paddingBottom: 40 }}>
      <SectionHeader
        moreOptiontitle="Expands"
        sectionTitle="Recent Orders"
        moreOptionAction={() => console.log("more option action")}
      />
      <VStack spacing={8}>
        {orders.length === 0 ? (
          <Text align="center" variant="hint" style={{ padding: 20 }}>
            {isUserMode
              ? "You don't have any Orders yet"
              : "No Order Collected yet"}
          </Text>
        ) : (
          orders.map((order, idx) =>
            order.openOrder ? (
              <TouchableOpacity
                key={`histroy_${order.id}_${idx}`}
                onPress={() => {
                  order.openOrder && navigation.push("OrderDetail", order);
                }}
              >
                <OrderItem
                  type={order.trashType.name}
                  address={"2547 Marion Street"}
                  isCollected={!order.openOrder}
                />
              </TouchableOpacity>
            ) : (
              <OrderItem
                key={`histroy_${order.id}_${idx}`}
                type={order.trashType.name}
                address={"2547 Marion Street"}
                isCollected={!order.openOrder}
              />
            )
          )
        )}
      </VStack>
    </VStack>
  );
};

export default OrderHisotry;
