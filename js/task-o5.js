console.log("js_hw_t5");

function checkForSpam(str) {
 return str.toLowerCase().includes('sPam'.toLowerCase()) || str.toLowerCase().includes('sALe'.toLowerCase())
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true