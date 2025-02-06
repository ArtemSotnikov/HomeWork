'use strict';

// Array variant for trainings purpose.
// export function generateKey(keyLength, symbols) {
//    const randomSymbols = [];
//    for (let i = 1; i <= keyLength; i++) {
//        const randomSymbol = Math.floor(Math.random() * symbols.length);
//        randomSymbols.push(symbols[randomSymbol]);
//    }
//    return randomSymbols;
//}

//String variant
export function generateKey(keyLength, symbols) {
    let randomSymbols = "";
    for (let i = 1; i <= keyLength; i++) {
        const randomSymbol = Math.floor(Math.random() * symbols.length);
        randomSymbols = randomSymbols + symbols[randomSymbol];
    }
    return randomSymbols;
}