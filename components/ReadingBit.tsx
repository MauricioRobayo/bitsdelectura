import { clsx } from "clsx";

interface ReadingBitProp {
  word: string;
  letter?: string;
}

export function ReadingBit({ word, letter }: ReadingBitProp) {
  return (
    <div className="text-8xl font-display font-bold">
      {letter && word.includes(letter)
        ? word.split("").map((l, i) => (
            <span key={i} className={clsx({ "text-red-600": letter === l })}>
              {l}
            </span>
          ))
        : word}
    </div>
  );
}
