import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { ModeContext } from "../../context";
import { HStack } from "../common/FlexBox";
import { Text } from "../common/Text";
interface Props {
  children: React.ReactNode;
}
const getColor = (type: "info" | "success" | "error" | "loading") => {
  const color = {
    info: "#b3e6f5",
    success: "#b7f7c4",
    error: "#ffb7b6",
    loading: "red",
  };
  return color[type];
};

const Container: React.FC<Props> = ({ children }) => {
  const { notification, setNotification } = useContext(ModeContext);
  console.log(
    "🚀 ~ file: UserNavigation.tsx:40 ~ NotifWarpper ~ notification:",
    notification,
    !!notification
  );
  useEffect(() => {
    if (notification) alert(notification.message);
    const timeout = setTimeout(() => setNotification(null), 5000);
    return () => clearTimeout(timeout);
  }, [notification]);

  return (
    <>
      {/* {!!notification && (
        <View
          // entering={FadeIn}
          // exiting={FadeOut}
          style={{
            position: "absolute",
            top: 70,
            zIndex: 9999,
            width: "100%",
            paddingHorizontal: 10,
          }}
        >
          <HStack
            style={{
              backgroundColor: getColor(notification?.type),
              padding: 20,
              borderRadius: 12,
              elevation: 5,
            }}
          >
            <Text>{notification?.message}</Text>
          </HStack>
        </View>
      )} */}
      <>{children}</>
    </>
  );
};

export default Container;
