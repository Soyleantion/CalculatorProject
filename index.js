const displayValorAnterior= document.getElementById('valorAnterior');
const displayValorActual= document.getElementById('valorActual');
const botonesNumeros=document.querySelectorAll('.Numero');
const botonesOperadores=document.querySelectorAll('.Operador');



const display= new Display(displayValorAnterior,displayValorActual);

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click', () =>
    display.AgregarNumero(boton.innerHTML))
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () =>
    display.computar(boton.value))
});
    