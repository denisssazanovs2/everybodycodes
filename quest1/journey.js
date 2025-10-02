import { readFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const potionMap = new Map([['A', 0], ['B', 1], ['C', 3], ['D', 5]]);

const solve = (part) => {
    const fileName = `input_journey_${part}.txt`;
    const filePath = path.join(__dirname, fileName);

    readFile(filePath, 'utf8', (err, data) => {
        let potionQuantity = 0;
        if (err) {
            console.error(`Error reading ${fileName}:`, err);
            return;
        }

        const dataPairs = [];
        for (let i = 0; i < data.length; i += part) {
            dataPairs.push(data.slice(i, i + part));
        }

        for (const monsterPair of dataPairs) {
            const cleanedPair = monsterPair.replace(/x/g, '');
            potionQuantity += [...cleanedPair].reduce((sum, monster) => {
                return sum + (potionMap.get(monster));
            }, 0);
            potionQuantity += (cleanedPair.length) * (cleanedPair.length - 1);
        }

        console.log(`Total potions collected for journey ${part}: ${potionQuantity}`);
    });
}

export default solve;