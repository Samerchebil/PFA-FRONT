import React from "react";
import styled from "styled-components/native";
import { QrCodeIcon } from "../common/icons";
interface Props {}

const MainIconContainer = styled.TouchableOpacity`
  top: -30px;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 27px;
  background: #000;
`;

const QrCodeScanner: React.FC<Props> = () => {
  return (
    <MainIconContainer>
      <QrCodeIcon />
    </MainIconContainer>
  );
};

export default QrCodeScanner;
