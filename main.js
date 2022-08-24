const idade = 27;
const idade1 = 0;
const idade2 = null;


document.body.innerText = 'Sua idade é: ' + idade;
document.body.innerText = 'Sua idade é: ' + idade1;
document.body.innerText = 'Sua idade é: ' + idade2;


// Nullish Coalescing Operator

document.body.innerText = 'Sua idade é: ' +  (idade2 || 'Não informado');

// 0, '', {}, false, undefined, null => falsy (no caso do operador ou - || )

document.body.innerText = 'Sua idade é: ' +  (idade2 ?? 'Não informado');
