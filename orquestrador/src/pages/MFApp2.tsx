import React, { lazy } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const App2 = lazy(() => import("app2/App"));

const MFApp2: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>Não foi possivel carregar o app2</div>}>
      <App2 />
    </ErrorBoundary>
  );
};

export default MFApp2;
