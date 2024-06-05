import React from "react";
import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";
import { View } from "react-native";
import { HStack, LoginForm, Text } from "../components";
import {} from "react";
interface Props {
  navigation: any;
}

const Container = styled.View`
  padding: 100px 20px;
  justify-content: space-between;
  flex: 1;
`;

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <Container>
        <View>
          <Text variant="title">Welcome back</Text>
          <Text variant="hint" color="hint">
            keep the plant clean
          </Text>
        </View>
        <LoginForm />
        <HStack justifyContent="center">
          <Text variant="hint" align="center">
            Don’t have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text variant="hint" style={{ fontWeight: "bold" }}>
              Register now
            </Text>
          </TouchableOpacity>
        </HStack>
      </Container>
    </>
  );
};

export default Login;
