import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { ReadingBits } from "../components/ReadingBits";

export const defaultWords = [
  "casa",
  "carro",
  "computador",
  "circo",
  "catapulta",
  "cancelar",
];

export function ReadingBitsContainer() {
  const { query } = useRouter();
  const letter = query.letter as string | undefined;
  const [words, setWords] = useState(defaultWords.join(" "));
  const [isReading, setIsReading] = useState(false);

  const onWordsChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setWords(e.target.value);

  const start = () => {
    setIsReading(true);
  };

  if (isReading) {
    return (
      <div className="grid place-items-center h-screen">
        <ReadingBits
          words={words.trim().split(" ")}
          letter={letter}
          onFinish={() => setIsReading(false)}
        />
      </div>
    );
  }

  return (
    <>
      <textarea value={words} onChange={onWordsChange} />
      <button onClick={start}>Iniciar</button>
    </>
  );
}
