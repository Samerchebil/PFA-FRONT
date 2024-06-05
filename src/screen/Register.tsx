import React from "react";
import { styled } from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { HStack, RegisterForm, Text } from "../components";
interface Props {
  navigation: any;
}

const Container = styled.View`
  padding: 80px 20px;
  justify-content: space-between;
  flex: 1;
`;

const Register: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <Container>
        <View>
          <Text variant="title">Register now</Text>
          <Text variant="hint" color="hint">
            keep the plant clean
          </Text>
        </View>
        <RegisterForm navigation={navigation} />
        <HStack justifyContent="center">
          <Text variant="hint" align="center">
            already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text variant="hint" style={{ fontWeight: "bold" }}>
              login now
            </Text>
          </TouchableOpacity>
        </HStack>
      </Container>
    </>
  );
};

export default Register;
