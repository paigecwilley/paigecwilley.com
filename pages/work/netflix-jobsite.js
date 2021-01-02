import Head from "next/head";
import Image from "next/image";

import { NFJobsDetail } from "../../src/components/ProjectDetail";

export default function NFJobs() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center bg-gray-100 font-sans pt-20 px-8">
        <section>
          <NFJobsDetail />
        </section>
      </main>

      <footer></footer>
    </>
  );
}
