const path = "./quest2/input_journey_1.txt";
const file = Bun.file(path);

const text = await file.text();
const lines = text.split('\n');
const runicWords = lines[0].replace(/^WORDS:/, '').split(',').map(w => w.trim());

let finalRunicSympbols = 0;

for (let i = 2; i < lines.length; i++) {
    const runicSymbolIndexes = [];
    runicWords.forEach(word => {
        const indices = [...lines[i].matchAll(new RegExp(word, 'gi'))].map(match => match.index);
        finalRunicSympbols += indices.length;
    });
}

console.log(`Total runic symbols: ${finalRunicSympbols}`);
