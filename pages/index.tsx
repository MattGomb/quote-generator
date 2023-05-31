import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between px-24 py-6 ${inter.className}`}
      >
        <div>hello world</div>
        <h3>great job running next js</h3>
      <Footer />
      </main>
    </>
  );
}
