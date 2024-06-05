import React from "react";
import { styled } from "styled-components/native";
import { View } from "react-native";
import { RegisterStep2Form, Text } from "../components";
interface Props {
  navigation: any;
  route: any;
}

const Container = styled.View`
  padding: 100px 20px;
  justify-content: space-between;
  flex: 1;
`;

const Register: React.FC<Props> = ({ navigation, route }) => {
  return (
    <>
      <Container>
        <View>
          <Text variant="title">Tell us more about yourself</Text>
          <Text variant="hint" color="hint">
            keep the plant clean
          </Text>
        </View>
        <RegisterStep2Form navigation={navigation} route={route} />
      </Container>
    </>
  );
};

export default Register;
