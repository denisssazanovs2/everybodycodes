const path = "./quest2/input_journey_2.txt";
const file = Bun.file(path);

const text = await file.text();
const lines = text.split('\n');
const runicWords = lines[0].replace(/^WORDS:/, '').split(',').map(w => w.trim());

let finalRunicSympbols = 0;

for (let i = 2; i < lines.length; i++) {
    const runicSymbolIndexes = [];
    runicWords.forEach(word => {
        const indices = [...lines[i].matchAll(new RegExp(word, 'gi'))].map(match => match.index);
        const reverseLine = lines[i].split('').reverse().join('');
        const reverseIndices = [...reverseLine.matchAll(new RegExp(word, 'gi'))].map(match => match.index);
        indices.push(...reverseIndices.map(index => reverseLine.length - index - word.length));
        indices.forEach(index => {
            runicSymbolIndexes.push([...Array(word.length+index).keys()].slice(index));
        });
    });
    const lineResult = new Set(runicSymbolIndexes.flat());
    finalRunicSympbols += lineResult.size;
}

console.log(`Total runic symbols: ${finalRunicSympbols}`);
