function puntoUno(){
    let cadena=document.getElementById("cadena").value;
    if (cadena.length>2 && cadena.length<11){
        alert("correcto")
        boton1.removeAttribute("disabled");
    }else{
        alert("incorrecto")
        boton1.disabled = true;

    }
}
function mayuscula(){
    var cadena=document.getElementById("cadena").value;
    let resultado=document.getElementById("resultado")
    var charArray = cadena.toLowerCase().split("");
    for (var i = 1; i < charArray.length; i += 2) {
        charArray[i] = charArray[i].toUpperCase();
    }
    union=charArray.join("");
    resultado.innerHTML=`El resultado es ${union}`
}


function puntoDos(){
    let nacimiento=document.getElementById("nacimiento").value;
    let date=new Date(nacimiento);
    if(date.getFullYear()<1899){
        alert("edad no valida");
        boton2.disabled = true;
    }else{
        alert("fecha de nacimiento valida");
        boton2.removeAttribute("disabled");
    }

}
function edad(){
    let nacimiento=document.getElementById("nacimiento").value;
    let date=new Date(nacimiento);
    let actual=new Date();
    let anios=actual.getFullYear()-date.getFullYear();
    let meses=actual.getMonth()-date.getMonth();
    let dias=actual.getDate()-date.getDate();
    let resultado2=document.getElementById("resultado2")
    if(dias<0){
        meses--;
        let ultimoMes=new Date(actual.getFullYear(), actual.getMonth(), 0);
        dias +=ultimoMes.getDate();
    }
    if(meses<0){
        anios--;
        meses+=12;
    }
    resultado2.innerHTML=`su edad es ${anios} años,con ${meses} meses y ${dias-1} dias `


}


function puntoTres(){
    let valor_x=parseFloat(document.getElementById("x").value);
    let div=document.getElementById("puntotres_");
    let numerador=valor_x-1;
    let denominador=(valor_x+2)*(valor_x-2);
    let resultado=numerador/denominador;
    div.innerHTML=`
    <div class="card" style="width: 18rem;">
  <div class="card-body text-center">
    <h5 class="card-title">Resultado</h5>
    <p class="card-text">El resultado es ${resultado}</p>
  </div>
</div>`


}

function filas_columnas(){
    let fila=document.getElementById("filas").value;
    let columna=document.getElementById("columnas").value;
    if (fila<1 || columna<1){
        alert("valores no validos");
        boton4.disabled = true;
    }else{
        alert("valores validos")
        boton4.removeAttribute("disabled");

    }
}


function puntoCuatro(){
    let fila=parseInt(document.getElementById("filas").value);
    let columna=parseInt(document.getElementById("columnas").value);
    
    let matriz=matrizAleatoria(fila,columna);
    let inversa=inversa1(matriz);
    let transpuesta=transpuesta1(matriz);
    resultados1(inversa,transpuesta);

}





function matrizAleatoria(filas,columnas){
    let matriz=[];
    for(let i=0; i<filas; i++){
        let fila=[];
        for(let j=0;j<columnas;j++){
            fila.push(Math.floor(Math.random()*10)+1);
        }
        matriz.push(fila);
    }
    return matriz;
}


function inversa1(matriz){
    let filas=matriz.length;
    let columnas=matriz[0].length;

    if(filas !== columnas){
        return null;//matriz no cuadrada
    }
    try{
        let inversa=math.inv(matriz);
        return inversa;
    }catch(error){
        return null;
    }

}

function transpuesta1(matriz){
    let transpuesta=[];
    for(let i=0;i<matriz[0].length;i++){
        let fila=[];
        for(let j=0;j<matriz.length;j++){
            fila.push(matriz[j][i]);
        }
        transpuesta.push(fila);
    }
    return transpuesta;
}

function resultados1(inversa,transpuesta){
    let resultados=document.getElementById("puntocuatro")
    resultados.innerHTML=`
        <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
        
        <li class="list-group-item">su inversa es ${inversa}</li>
        <li class="list-group-item">su transpuesta es ${transpuesta}</li>
    </ul>
    </div>`
}

