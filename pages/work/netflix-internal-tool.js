import Head from "next/head";
import Image from "next/image";

import { NFInternal } from "../../src/components/ProjectDetail";

export default function NFJobs() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center bg-gray-100 font-sans">
        <section>
          <NFInternal />
        </section>
      </main>

      <footer></footer>
    </>
  );
}