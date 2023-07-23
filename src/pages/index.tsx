import Head from "next/head";
import CreateTodo from "~/components/CreateTodo";
import { Todos } from "~/components/Todos";

export default function Home() {

  return (
    <>
      <Head>
        <title>To do</title>
        <meta name="description" content="To do list tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <Todos />
        <CreateTodo />
      </main>
    </>
  );
}
