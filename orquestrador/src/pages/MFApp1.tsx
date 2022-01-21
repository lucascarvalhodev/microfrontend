import React, { lazy } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const App1 = lazy(() => import("app1/App"));

const MFApp1: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>Não foi possivel carregar o app1</div>}>
      <App1 />
    </ErrorBoundary>
  );
};

export default MFApp1;
