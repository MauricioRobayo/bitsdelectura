import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export const defaultWords = [
  "casa",
  "carro",
  "computador",
  "circo",
  "catapulta",
  "cancelar",
];

const Home: NextPage = () => {
  const aCharCode = "a".charCodeAt(0);
  const zCharCode = "z".charCodeAt(0);
  const alphabet = Array.from({ length: zCharCode - aCharCode + 1 }, (_, i) =>
    String.fromCharCode(i + aCharCode)
  );

  return (
    <div>
      <Head>
        <title>Bits de Lectura</title>
        <meta name="description" content="Bits de Lectura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Bits de Lectura</h1>
      </header>
      <main>
        <div className="font-display">
          {alphabet.map((letter) => (
            <div
              key={letter}
              className="px-4 inline-block text-2xl text-blue-600 hover:underline"
            >
              <Link href={`/bits/${letter}`}>{letter}</Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
