import React, { useContext } from "react";
import { styled } from "styled-components/native";
import { UserContext, useTheme } from "../../context";
import { HStack } from "../common/FlexBox";
import { MenuIcon } from "../common/icons";
import { Text } from "../common/Text";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {}

const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 16px;
`;
const Container = styled.View`
  padding: 50px 20px 15px 20px;
`;

const Header: React.FC<Props> = () => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation() as any;
  const {
    theme: { colors },
  } = useTheme();
  return (
    <Container>
      <HStack style={{}} alignItems="center" justifyContent="space-between">
        <HStack alignItems="center" spacing={12}>
          <Avatar source={require("../../../assets/images/avatar_3.jpg")} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Hi, {user?.first_name} {user?.last_name}
          </Text>
        </HStack>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <MenuIcon color={colors.black} />
        </TouchableOpacity>
      </HStack>
    </Container>
  );
};

interface SectionHeaderProps {
  sectionTitle: string;
  moreOptiontitle: string;
  moreOptionAction: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionTitle,
  moreOptiontitle,
  moreOptionAction,
}) => {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <Text variant="h1">{sectionTitle}</Text>
      <Text variant="hint">{moreOptiontitle}</Text>
    </HStack>
  );
};

export default Header;
