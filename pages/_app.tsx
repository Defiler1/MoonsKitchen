import type { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";
import Layout from "components/Layout";
import { Storage } from "util/firebase";

const App = ({ Component, pageProps }: AppProps) => {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
  document.getElementsByTagName("head")[0].appendChild(meta);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
