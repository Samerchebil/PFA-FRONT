import React, { createContext, useEffect, useState } from "react";
import { User } from "../models";
import { UserDAO } from "../DAO";
import { LocationObject } from "expo-location";

interface Props {
  children: React.ReactNode;
}

interface UserContextValue {
  user: User | null;
  location: LocationObject | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setLocation: React.Dispatch<React.SetStateAction<LocationObject | null>>;
  isLoading: boolean;
}

const initialUserContextValue: UserContextValue = {
  user: null,
  location: null,
  setUser: () => {},
  setLocation: () => {},
  isLoading: true,
};

export const UserContext = createContext<UserContextValue>(
  initialUserContextValue
);

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserFromStorage = async () => {
      try {
        const storedUser = await UserDAO.get();
        setUser(storedUser);
      } catch (error) {
        console.error("Error loading user from storage:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserFromStorage();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        location,
        setLocation,
        isLoading: loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
