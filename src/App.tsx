import { useState } from "react";

const GRID_SIZE = 8;

const MATRIX = Array.from({length: GRID_SIZE},() => Array.from({length: 8}, () => 0 as number | string,));

const MATCHES = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
];


for (let count = GRID_SIZE; count > 0; count--) {
    const rowRandom = Math.floor(Math.random() * GRID_SIZE);
    const cellRandom = Math.floor(Math.random() * GRID_SIZE);

    MATRIX[rowRandom] [cellRandom] = 'M';
}

for (let rowIndex = 0; rowIndex < MATRIX.length; rowIndex++) {
    for (let cellIndex = 0; cellIndex < MATRIX[rowIndex].length; cellIndex++) {

        if (MATRIX[rowIndex][cellIndex] === 'M') continue;

        let mateCount = 0;
        for (const match of MATCHES) {
            if (MATRIX[rowIndex + match[0]]?.[cellIndex + match[1]] === "M") {
                mateCount++;
            }
        }
        MATRIX[rowIndex][cellIndex] = mateCount;
    }
}

function App() {

    const [clicked, setClicked] = useState<string[]>([]);

    function handleClick(id: string) {
        setClicked((clicked) => clicked.concat(id));
    }

  return (
    <main className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]">buscamates</header>
        <section className="py-8">
            {MATRIX.map((row, rowIndex) => (
            <article key={String(rowIndex)} className="flex">
                {row.map((cell, cellIndex) => (
                    <div 
                    key={`${rowIndex}-${cellIndex}`} 
                    className="h-8 w-8 border flex items-center justify-center"
                    >
                        {clicked.includes(`${rowIndex}-${cellIndex}`) ? (
                        <span>{cell === 'M' ? "🧉" : cell === 0 ? null : cell}</span>
                        ) : (
                            <button
                            className="h-full w-full"
                            type="button"
                            onClick={() => { handleClick(`${rowIndex}-${cellIndex}`)}}
                            />
                        )}
                    </div>))}
            </article>
        ))}</section>
        <footer className="text-center leading-[3rem] opacity-70">
            © {new Date().getFullYear()} buscamates
        </footer>
    </main>
  )
}

export default App;
