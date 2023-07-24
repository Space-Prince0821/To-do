import Head from "next/head";
import CreateTodo from "~/components/CreateTodo";

export default function CreatePage() {

  return (
    <>
      <Head>
        <title>Create To do</title>
        <meta name="description" content="To do list tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex gap-4 min-h-screen flex-col items-center bg-white justify-center -mt-20">
        <CreateTodo />
      </main>
    </>
  );
}
