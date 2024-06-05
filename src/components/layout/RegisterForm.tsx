import React, { useState, useRef } from "react";
import { View, TextInput, Text as RNText } from "react-native";

import { useTheme } from "../../context";
import { useForm, FormErrors, FormFields, FormField } from "../../Hooks";

import { InputFieldEmail, InputFieldPassword } from "../common/InputFieldText";
import { Text } from "../common/Text";
import Button from "../common/Button";
import { VStack } from "../common/FlexBox";

const initialValues: FormFields = {
  email: {
    name: "email",
    value: "email@example.com",
  },
  password: {
    name: "password",
    value: "superpassword",
  },
  cpassword: {
    name: "cpassword",
    value: "superpassword",
  },
};

const validate = (fields: FormFields) => {
  const errors: FormErrors = {};

  if (!fields.email.value) {
    errors.email = "Email is required";
  } else if (!isValidEmail(fields.email.value)) {
    errors.email = "Invalid email";
  }

  if (!fields.password.value) {
    errors.password = "Password is required";
  } else if (fields.password.value.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  if (!fields.cpassword.value) {
    errors.password = "Confirm your password";
  } else if (fields.password.value !== fields.cpassword.value) {
    errors.password = "Passwords doesn't match";
  }

  return errors;
};

const isValidEmail = (email: string) => {
  // Implement your own email validation logic here
  // This is a basic example, you can use a library or a regex pattern for more comprehensive validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

interface Props {
  navigation: any;
}

export const RegisterForm: React.FC<Props> = ({ navigation }) => {
  const {
    theme: { spacing },
  } = useTheme();

  const { formFields, formErrors, handleChange, handleSubmit } = useForm(
    initialValues,
    validate
  );
  const passwordRef = useRef<TextInput>(null);
  const cpasswordRef = useRef<TextInput>(null);

  return (
    <View
      style={{
        gap: 40,
      }}
    >
      <View>
        <VStack spacing={spacing.xs}>
          <Text color="error">{formErrors.email}</Text>
          <InputFieldEmail
            placeholder="Email"
            returnKeyType="next"
            value={formFields.email.value}
            onChangeText={(value) => handleChange("email", value)}
            onSubmitEditing={() => {
              if (passwordRef.current) passwordRef.current.focus();
            }}
            blurOnSubmit={false}
          />
        </VStack>
        <VStack spacing={spacing.xs}>
          <Text color="error">{formErrors.password}</Text>
          <InputFieldPassword
            ref={passwordRef}
            placeholder="Password"
            returnKeyType="next"
            onSubmitEditing={() => {
              if (cpasswordRef.current) cpasswordRef.current.focus();
            }}
            blurOnSubmit={false}
            value={formFields.password.value}
            onChangeText={(value) => handleChange("password", value)}
          />
          <InputFieldPassword
            ref={cpasswordRef}
            placeholder="Confirm password"
            value={formFields.cpassword.value}
            onChangeText={(value) => handleChange("cpassword", value)}
          />
        </VStack>
      </View>
      <Button
        buttonText="next"
        onPress={() => {
          handleSubmit((data) => {
            navigation.navigate("RegisterStep2", {
              email: data.email.value,
              password: data.password.value,
            });
          });
        }}
      />
    </View>
  );
};
