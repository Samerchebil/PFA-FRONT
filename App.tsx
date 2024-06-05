import "react-native-gesture-handler";
import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { useAssetsLoader } from "./src/Hooks";
import {
  CollectionOrderProvider,
  ModeProvider,
  ThemeProvider,
  UserContext,
  UserProvider,
} from "./src/context";
import { AuthenticationStack, UserStack } from "./src/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justcontent: center;
  align-items: center;
`;

function InitApp() {
  const { user, isLoading } = useContext(UserContext);
  const [isLoadingAssets] = useAssetsLoader();

  if (isLoading || isLoadingAssets)
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );

  return !user ? (
    <AuthenticationStack />
  ) : (
    <ModeProvider>
      <CollectionOrderProvider>
        <UserStack />
      </CollectionOrderProvider>
    </ModeProvider>
  );
}

const queryclient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <UserProvider>
        <NavigationContainer>
          <ThemeProvider>
            <InitApp />
            <StatusBar style="auto" />
          </ThemeProvider>
        </NavigationContainer>
      </UserProvider>
    </QueryClientProvider>
  );
}
