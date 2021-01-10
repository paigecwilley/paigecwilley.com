import Head from "next/head";

export default function WorkLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/paige_icon.png" />
      </Head>

      <main className="flex flex-col justify-center items-center bg-gray-100 font-sans pt-20 px-8">
        <section>{children}</section>
      </main>
    </>
  );
}
