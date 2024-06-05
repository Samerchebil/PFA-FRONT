import React, { forwardRef, useState } from "react";
import {
  TextInputProps,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import { EyeIcon, EyeOffIcon } from "./icons";
import { LightTheme } from "../../theme";
import { useTheme } from "../../context";

interface InputFieldProps extends TextInputProps {
  Icon?: React.ReactNode;
  variant?: keyof typeof LightTheme.TextInputVariants;
  style?: StyleProp<ViewStyle>;
}

const InputContainer = styled.View`
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 10px;
  background-color: #e1dfdf;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InputField = styled.TextInput`
  font-size: 16px;
  flex: 1;
`;

const InputFieldText = forwardRef<TextInput, InputFieldProps>(
  ({ Icon, variant = "default", style, ...rest }, ref) => {
    const {
      theme: { TextInputVariants },
    } = useTheme();
    const containerStyle = StyleSheet.flatten([
      TextInputVariants[variant],
      style,
    ]);
    return (
      <View style={containerStyle}>
        <InputField ref={ref} {...rest} selectionColor="#222" />
        {Icon}
      </View>
    );
  }
);
const InputFieldEmail: React.FC<InputFieldProps> = ({
  placeholder,
  ...rest
}) => {
  return (
    <InputFieldText
      placeholder={placeholder}
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="email-address"
      {...rest}
    />
  );
};
const InputFieldPassword = forwardRef<TextInput, InputFieldProps>(
  (props, ref) => {
    const [isVisible, setisVisible] = useState<boolean>(false);

    const GetIcon = () => {
      if (isVisible)
        return (
          <TouchableOpacity onPress={() => setisVisible(false)}>
            <EyeOffIcon width={24} height={24} color="#4D4D4D" />
          </TouchableOpacity>
        );
      return (
        <TouchableOpacity
          onPress={() => {
            setisVisible(true);
            console.log(isVisible);
          }}
        >
          <EyeIcon width={24} height={24} color="#4D4D4D" />
        </TouchableOpacity>
      );
    };

    return (
      <InputFieldText
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={!isVisible}
        Icon={GetIcon()}
        ref={ref}
        {...props}
      />
    );
  }
);

export { InputFieldEmail, InputFieldPassword, InputFieldText };
