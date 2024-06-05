import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ModeContextValue {
  isUserMode: boolean;
  setuserMode: React.Dispatch<React.SetStateAction<boolean>>;
  notification: null | INotification;
  setNotification: React.Dispatch<React.SetStateAction<null | INotification>>;
}

const initialModeContextValue: ModeContextValue = {
  isUserMode: true,
  setuserMode: () => {},
  notification: null,
  setNotification: () => {},
};

export const ModeContext = createContext<ModeContextValue>(
  initialModeContextValue
);

interface INotification {
  type: "info" | "error" | "success" | "loading";
  message: string;
}

export const ModeProvider: React.FC<Props> = ({ children }) => {
  const [isUserMode, setuserMode] = useState<boolean>(false);
  const [notification, setNotification] = useState<null | INotification>({
    type: "error",
    message: "this is an error",
  });

  return (
    <ModeContext.Provider
      value={{
        isUserMode,
        setuserMode,
        notification,
        setNotification,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};
