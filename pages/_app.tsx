import type { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";
import Layout from "components/Layout";

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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
