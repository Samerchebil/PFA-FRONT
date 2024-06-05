import { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  MapScreen,
  OrderDetailScreen,
  ScannerScreen,
  UserFeed,
} from "../screen";
import { CompassIcon, HomeIcon, QrCodeIcon } from "../components/common/icons";
import {
  CustomDrawer,
  MakeOrderModel,
  QrCodeScanner,
  Text,
  VStack,
} from "../components";
import { ModeContext } from "../context";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Feed" component={UserStack} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const UserOrderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={UserFeed} />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="OrderDetail"
        component={OrderDetailScreen}
      />
    </Stack.Navigator>
  );
};
const CollectorStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={UserFeed} />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="OrderDetail"
        component={OrderDetailScreen}
      />
    </Stack.Navigator>
  );
};

const RecycleModel = () => {
  return null;
};

const UserModeStack = () => (
  <Tab.Navigator
    initialRouteName="UserFeed"
    screenOptions={({ route }) => ({
      tabBarStyle: {
        height: 80,
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: ({ focused, color, size }) => {
        const NavIcons = {
          UserFeed: <HomeIcon />,
          UserMap: <CompassIcon />,
        };

        return route.name in NavIcons ? (
          NavIcons[route.name as keyof typeof NavIcons]
        ) : (
          <></>
        );
      },
    })}
  >
    <Tab.Screen name="UserFeed" component={UserOrderStack} />
    <Tab.Screen
      name="Recycle"
      component={RecycleModel}
      options={{
        tabBarButton: (props) => <MakeOrderModel />,
      }}
    />
    {/* <Tab.Screen name="UserOrderHisotry" component={OrderHistoryScreen} /> */}
    <Tab.Screen name="UserMap" component={MapScreen} />
  </Tab.Navigator>
);

const CollectorModeStack = () => (
  <Tab.Navigator
    initialRouteName="UserFeed"
    screenOptions={({ route }) => ({
      tabBarStyle: {
        height: 80,
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: ({ focused, color, size }) => {
        const NavIcons = {
          UserFeed: <HomeIcon />,
          UserMap: <CompassIcon />,
          Scanner: <QrCodeIcon />,
        };

        return route.name in NavIcons ? (
          NavIcons[route.name as keyof typeof NavIcons]
        ) : (
          <></>
        );
      },
    })}
  >
    <Tab.Screen name="UserFeed" component={CollectorStack} />
    <Tab.Screen
      name="Scanner"
      component={ScannerScreen}
      // options={{
      //   tabBarButton: (props) => <QrCodeScanner />,
      // }}
    />
    {/* <Tab.Screen name="UserOrderHisotry" component={OrderHistoryScreen} /> */}
    <Tab.Screen name="UserMap" component={MapScreen} />
  </Tab.Navigator>
);

const UserStack = () => {
  const { isUserMode } = useContext(ModeContext);
  return isUserMode ? <UserModeStack /> : <CollectorModeStack />;
};

export default MyDrawer;
