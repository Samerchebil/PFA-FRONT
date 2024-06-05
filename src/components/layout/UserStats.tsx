import React from "react";
import { StyleSheet } from "react-native";
import { HStack, VStack } from "../common/FlexBox";
import { Text } from "../common/Text";
import { styled } from "styled-components/native";
interface Props {}

const HBar = styled.View`
  background-color: #000;
  padding: 2px;
  border-radius: 60px;
`;

const UserStats: React.FC<Props> = () => {
  return (
    <HStack justifyContent="space-between">
      <VStack>
        <Text style={style.number}>520</Text>
        <Text style={style.text}>points</Text>
      </VStack>
      <HBar />
      <VStack style={{ width: 120 }}>
        <Text style={style.number}>36</Text>
        <Text style={style.text}>recycle request</Text>
      </VStack>
    </HStack>
  );
};

const style = StyleSheet.create({
  number: {
    fontSize: 86,
  },
  text: {
    fontSize: 22,
  },
});

export default UserStats;
