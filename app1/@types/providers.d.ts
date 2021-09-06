/// <reference types="react" />

declare module "providers/AuthProvider" {
  const AuthProvider: React.ComponentType;

  interface IProps {
    user: string;
    setUser(value: string): void;
  }

  function useAuth(): IProps;

  export { useAuth, AuthProvider };
}
