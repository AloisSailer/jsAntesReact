// Objetos

const user = {
  name: 'Alois',
  // lastName: 'Hans', -> vai mostrar esse 
  age: 52,
  address: {
    street: 'Rua Miguel Cervantes',
    number: 458,
  },
}

document.body.innerText = ('name' in user)
document.body.innerText = ('nickname' in user)

document.body.innerText = Object.keys(user)
document.body.innerText = Object.values(user)
document.body.innerText = JSON.stringify(Object.values(user))
document.body.innerText = JSON.stringify(Object.entries(user))


<<<<<<< HEAD
// Desestruturação

// const address = user.address -> fica assim:
// const { address } = user

// document.body.innerText = JSON.stringify(address)

// ou com duas:
// const { address, age } = user
// document.body.innerText = JSON.stringify({address, age})

// ou renomeando variáveis: 
// const { address, age: idade } = user
// document.body.innerText = JSON.stringify({ address, idade})

// const { address, age: idade, lastName = 'Sailer' } = user
// document.body.innerText = JSON.stringify({ address, idade, lastName})

// function mostrarIdade(user) {
//   return user.age
// } -> ou desestruturando 

// function mostrarIdade({ age }) { 
//   return age
// }

// document.body.innerText = mostrarIdade(user)
=======
document.body.innerText = 'Sua idade é: ' + idade;
document.body.innerText = 'Sua idade é: ' + idade1;
document.body.innerText = 'Sua idade é: ' + idade2;
>>>>>>> b11bcf65ea772178f87aeb60e13268e71b8a9df4


// Rest operator

<<<<<<< HEAD
const { name, age, ...rest } = user
document.body.innerText = JSON.stringify(rest)
// não vai retornar name e idade
=======
document.body.innerText = 'Sua idade é: ' +  (idade2 || 'Não informado');
>>>>>>> b11bcf65ea772178f87aeb60e13268e71b8a9df4

