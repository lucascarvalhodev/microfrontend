import React, { createContext, useState, useContext } from "react";

interface AuthContextData {
  user: string | undefined;
  setUser(value: string | undefined): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<string>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
