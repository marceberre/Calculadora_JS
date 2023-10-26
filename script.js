// Agregar a la pantalla lo que se presiona 
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

// Borrar la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}

// Calcular
function calcular(){
    const resultado = eval(document.getElementById('pantalla').value)
    document.getElementById('pantalla').value = resultado
}

