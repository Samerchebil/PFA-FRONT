import React, { useContext } from "react";
import { ColorValue, TouchableOpacity } from "react-native";
import { HStack, VStack } from "../common/FlexBox";
import { Text } from "../common/Text";
import Button from "../common/Button";
import { UserDAO } from "../../DAO";
import { ModeContext, UserContext } from "../../context";
interface Props {}
interface SwitcherTextProps {
  text: string;
  bgColor: ColorValue;
  isActive: boolean;
  onPress: () => void;
}

const SwitcherText: React.FC<SwitcherTextProps> = ({
  text,
  bgColor,
  isActive,
  onPress,
}) => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
      <Text
        style={{
          backgroundColor: isActive ? bgColor : "transparent",
          paddingVertical: 16,
          paddingHorizontal: 4,
          borderRadius: 4,
          flex: 1,
        }}
        align="center"
        color={isActive ? "white" : "black"}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawer: React.FC<Props> = () => {
  const { setUser } = useContext(UserContext);
  const { isUserMode, setuserMode } = useContext(ModeContext);
  return (
    <VStack
      justifyContent="space-between"
      style={{
        flex: 1,
        height: 20,
        paddingHorizontal: 16,
        paddingTop: 60,
        paddingBottom: 40,
      }}
    >
      <VStack spacing={40}>
        <Text variant="title">Keep Earth Green</Text>
        <HStack
          style={{
            borderWidth: 1,
            borderRadius: 6,
            padding: 2,
            height: 56,
          }}
          justifyContent="center"
        >
          <SwitcherText
            text="User Mode"
            bgColor="#000"
            onPress={() => setuserMode(true)}
            isActive={isUserMode}
          />

          <SwitcherText
            text="Collector Mode"
            bgColor="#000"
            onPress={() => setuserMode(false)}
            isActive={!isUserMode}
          />
        </HStack>
      </VStack>
      <Button
        buttonText="logout"
        onPress={() => {
          UserDAO.delete();
          setUser(null);
        }}
      />
    </VStack>
  );
};

export default CustomDrawer;
