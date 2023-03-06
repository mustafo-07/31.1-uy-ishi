// const form = document.querySelector('.form'),
//     input = document.querySelector('.input'),
//     dolar = document.querySelector('.dolar'),
//     Yevro = document.querySelector('.Yevro'),
//     rubl = document.querySelector('.rubl'),
//     btn = document.querySelector('.btn'),
//     select = document.querySelector('.select'),
//     text = document.querySelector('.text');

// // input.value = Number(input.value)

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (select.value === 'dolar') {
//         text.textContent = `${input.value * 11000} so'mda`;
//     } else if (select.value === 'Yevro') {
//         text.textContent = `${input.value * 12000} so'mda`;
//     }
//     if (select.value === 'rubl') {
//         text.textContent = `${input.value * 128.44} so'mda`;
//     } else {

//         text.textContent = 'suma kiritin';
//     }

// })



// ikkinch uyga vazifa


const pattern = /^\d{5}-\d{3}-\d{2}-\d{2}/;

const nomer = '99899-873-53-00'

console.log(pattern.test(nomer));