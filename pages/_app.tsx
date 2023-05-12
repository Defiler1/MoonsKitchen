import type { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
