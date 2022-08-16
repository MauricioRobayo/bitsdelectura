import { useEffect, useState } from "react";
import { ReadingBit } from "../components/ReadingBit";

interface ReadingBitsProps {
  words: string[];
  letter?: string;
  intervalMs?: number;
  onFinish: () => void;
}

export function ReadingBits({
  words,
  letter,
  intervalMs = 3000,
  onFinish,
}: ReadingBitsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => {
        const nextIndex = currentIndex + 1;
        if (nextIndex >= words.length) {
          clearInterval(interval);
          onFinish();
        }
        return nextIndex;
      });
    }, intervalMs);
    return () => {
      clearInterval(interval);
    };
  }, [intervalMs, words.length]);

  const word = words[currentIndex];

  if (!word) {
    return null;
  }

  return (
    <div className="grid place-items-center h-screen">
      <ReadingBit word={word} letter={letter} />
    </div>
  );
}
