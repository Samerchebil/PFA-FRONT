import React from "react";
import styled from "styled-components/native";
import { useTheme } from "../../context";

interface ButtonProps {
  buttonText: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonText, onPress, ...rest }) => {
  const { theme } = useTheme();
  const ButtonContainer = styled.TouchableOpacity`
    background-color: ${theme.colors.buttonBackground};
    padding: 10px 15px;
    border-radius: 16px;
    align-items: center;
    width: 100%;
    padding: 20px 16px;
    justify-content: center;
  `;

  const ButtonText = styled.Text`
    color: ${theme.colors.white};
    font-size: 18px;
    font-weight: bold;
  `;
  return (
    <ButtonContainer {...rest} onPress={onPress}>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
