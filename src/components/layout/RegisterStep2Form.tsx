import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, useColorScheme } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useForm, Controller } from "react-hook-form";

import { useTheme } from "../../context";
import { FormErrors, FormFields, FormField } from "../../Hooks";

import {
  InputFieldEmail,
  InputFieldPassword,
  InputFieldText,
} from "../common/InputFieldText";
import { Text } from "../common/Text";
import Button from "../common/Button";
import { VStack } from "../common/FlexBox";
import { CalendarIcon } from "../common/icons";
import { AuthenticationService } from "../../service";

const validate = (fields: FormFields) => {
  const errors: FormErrors = {};

  if (!fields.name.value) {
    errors.name = "Name is required";
  }
  if (!fields.birthday.value) {
    errors.birthday = "Birthday is required";
  } else if (new Date(fields.birthday.value) > new Date(2020, 1, 1)) {
    errors.birthday = "Birthday must be at before 2020/1/1";
  }

  return errors;
};
interface Props {
  route: any;
  navigation: any;
}

export const RegisterStep2Form: React.FC<Props> = ({ navigation, route }) => {
  const {
    theme: { spacing },
  } = useTheme();
  const theme = useColorScheme();
  const [showDatePicker, setshowdatePicker] = useState(false);
  const { onRegister, data } = AuthenticationService.useRegister();
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "ali",
      lastName: "ben ali",
      birthday: new Date().toDateString(),
    },
  });
  const birthdayRef = useRef<TextInput>(null);

  useEffect(() => {
    if (data) navigation.replace("Login");
  }, [data]);

  return (
    <View
      style={{
        gap: 40,
      }}
    >
      <View>
        <VStack spacing={spacing.xs}>
          <Text color="error">{errors.firstName?.message}</Text>
          <Controller
            control={control}
            name="firstName"
            rules={{ required: "First name is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputFieldText
                placeholder="name"
                returnKeyType="next"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                onSubmitEditing={() => {
                  if (birthdayRef.current) birthdayRef.current.focus();
                }}
                blurOnSubmit={false}
              />
            )}
          />
        </VStack>
        <VStack spacing={spacing.xs}>
          <Text color="error">{errors.firstName?.message}</Text>
          <Controller
            control={control}
            name="lastName"
            rules={{ required: "Last name is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputFieldText
                placeholder="name"
                returnKeyType="next"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                onSubmitEditing={() => {
                  if (birthdayRef.current) birthdayRef.current.focus();
                }}
                blurOnSubmit={false}
              />
            )}
          />
        </VStack>
        {/* <VStack spacing={spacing.xs}>
          <Text color="error">{errors.birthday?.message}</Text>
          <Controller
            control={control}
            name="birthday"
            rules={{ required: "birthday is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <InputFieldText
                  editable={false}
                  ref={birthdayRef}
                  placeholder="Birthday"
                  value={value}
                  onFocus={() => setshowdatePicker(true)}
                  Icon={<CalendarIcon />}
                />
                {showDatePicker && (
                  <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display="spinner"
                    onChange={(e, date) => {
                      setshowdatePicker(false);
                      onChange(date ? date.toDateString() : "");
                    }}
                  />
                )}
              </>
            )}
          />
        </VStack> */}
      </View>
      <Button
        buttonText="let’s start"
        onPress={handleSubmit(async (data) => {
          await onRegister({ ...data, ...route.params });
        })}
      />
    </View>
  );
};
