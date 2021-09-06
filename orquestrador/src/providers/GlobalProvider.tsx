import React from "react";
import { AuthProvider } from "providers/AuthProvider";

const GlobalProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <>{children}</>
    </AuthProvider>
  );
};

export default GlobalProvider;
