import Head from "next/head";
// import ParticlesLayout from "~/components/ParticlesLayout";
import { Todos } from "~/components/Todos";

export default function Home() {

  return (
    <>
      <Head>
        <title>To do</title>
        <meta name="description" content="To do list tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex gap-4 mt-5 min-h-screen flex-col items-center bg-white">
        <Todos />
      </main>
    </>
  );
}
