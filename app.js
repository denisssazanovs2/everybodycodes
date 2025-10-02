const modulePath = `./quest${process.argv[2]}/journey.js`;

import(modulePath)
    .then((module) => {
        if (typeof module.default === 'function') {
            module.default(1);
            module.default(2);
            module.default(3);
        } else {
            console.error('No default export found in journey.js');
        }
    })
    .catch((err) => {
        console.error('Failed to import:', err);
    });