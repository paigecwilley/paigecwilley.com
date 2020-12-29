import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import MainLayout from "../src/layouts/mainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider>
      {" "}
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </MDXProvider>
  );
}

export default MyApp;
