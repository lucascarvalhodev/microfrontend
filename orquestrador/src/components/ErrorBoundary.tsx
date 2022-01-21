import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public render() {
    const { fallback = null, children } = this.props;
    const { hasError } = this.state;

    return hasError ? fallback : children;
  }
}

export default ErrorBoundary;
