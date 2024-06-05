import React, { useRef } from "react";
import { View, TextInput } from "react-native";

import { useTheme } from "../../context";

import { InputFieldEmail, InputFieldPassword } from "../common/InputFieldText";
import { Text } from "../common/Text";
import Button from "../common/Button";
import { VStack } from "../common/FlexBox";
import { AuthenticationService } from "../../service";
import { useForm, Controller } from "react-hook-form";

export const LoginForm: React.FC = () => {
  const { onLogin } = AuthenticationService.useLogin();
  const {
    theme: { spacing },
  } = useTheme();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "email@example.com",
      password: "superpassword",
    },
  });
  const passwordRef = useRef<TextInput>(null);

  return (
    <View
      style={{
        gap: 40,
      }}
    >
      <View>
        <VStack spacing={spacing.xs}>
          <Text color="error">{errors.email?.message}</Text>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Username is Required",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputFieldEmail
                placeholder="Username"
                returnKeyType="next"
                value={value}
                onChangeText={onChange}
                onSubmitEditing={() => {
                  if (passwordRef.current) passwordRef.current.focus();
                }}
                onBlur={onBlur}
                blurOnSubmit={false}
              />
            )}
          />
        </VStack>
        <VStack spacing={spacing.xs}>
          <Text color="error">{errors.password?.message}</Text>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "password is Required",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputFieldPassword
                ref={passwordRef}
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />

          <Text variant="hint" align="right">
            Forget password?
          </Text>
        </VStack>
      </View>
      <Button buttonText="Login" onPress={handleSubmit(onLogin)} />
    </View>
  );
};
