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
        let mateCount = 0;
        for (const match of MATCHES) {
            if (MATRIX[rowIndex + match[0]]?.[cellIndex + match[1]] === "B") {
                mateCount++;
            }
        }
    }
}

function App() {
  return (
    <main className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]">buscamates</header>
        <section className="py-8">
            {MATRIX.map((row, rowIndex) => (
            <article key={String(rowIndex)} className="flex">
                {row.map((cell, cellIndex) => (
                    <div key={`${rowIndex}-${cellIndex}`} className="h-8 w-8 border flex items-center justify-center" >
                        {cell === 'M' ? "🧉" : cell === 0 ? null : cell}
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
