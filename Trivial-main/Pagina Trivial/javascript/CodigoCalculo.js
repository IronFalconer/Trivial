function FbotonOn1() {
    var uno = document.getElementById('button1.1');
    if (uno.innerHTML == 'Correcto') 
      uno.innerHTML = 'respuesta a)';
    else uno.innerHTML = 'Correcto'; 
}
function FbotonOn2() {
    var uno = document.getElementById('button2.1');
    if (uno.innerHTML == 'Incorrecto') 
      uno.innerHTML = 'respuesta b)';
    else uno.innerHTML = 'Incorrecto'; 
}
function FbotonOn3() {
    var uno = document.getElementById('button3.1');
    if (uno.innerHTML == 'Incorrecto') 
      uno.innerHTML = 'respuesta c)';
    else uno.innerHTML = 'Inorrecto'; 
}