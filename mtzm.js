var matriz1 = [];
var matriz2 = [];
var matriz3 = [];

alert("O primeiro exemplo é de uma multiplicação de duas matrizes(4x4). Os números das matrizes são gerados aleatoriamente. O segundo exemplo faz com que o usuário digite as dimensões da matriz 1 e 2, os números nelas são gerados aleatoriamente, e assim é feita a multiplicação(ele não pede as colunas da matriz 2 por conta de ter que ser da mesma quantidade de linhas da matriz 1).");

document.write("<br><br><br><br>");

// Preenchendo a matriz1 com números aleatórios entre 0 e 10
document.write("<center><table border=1 class=tables>");
for (var i = 0; i < 4; i++) {
  var linha = [];
  document.write("<tr align='center'>");
  for (var j = 0; j < 4; j++) {
    var numero = Math.floor(Math.random() * 11);
    linha.push(numero);
    document.write("<td id=tablemtz>" + numero + "</td>");
  }
  document.write("</tr>");
  matriz1.push(linha);
}
document.write("</table>");

document.write("&nbsp&nbsp × &nbsp&nbsp");

// Preenchendo a matriz2 com números aleatórios entre 0 e 10
document.write("<table border=1 class=tables>");
for (var i = 0; i < 4; i++) {
  var linha = [];
  document.write("<tr align='center'>");
  for (var j = 0; j < 4; j++) {
    var numero = Math.floor(Math.random() * 11);
    linha.push(numero);
    document.write("<td id=tablemtz>" + numero + "</td>");
  }
  document.write("</tr>");
  matriz2.push(linha);
}
document.write("</table>");

// Realizando a multiplicação das matrizes
for (var i = 0; i < 4; i++) {
  var linha = [];
  for (var j = 0; j < 4; j++) {
    var resultado = 0;
    for (var k = 0; k < 4; k++) {
      resultado += parseInt(matriz1[i][k]) * parseInt(matriz2[k][j]);
    }
    linha.push(resultado);
  }
  matriz3.push(linha);
}

document.write("&nbsp&nbsp = &nbsp&nbsp");

// Exibindo a matriz3 na página HTML
document.write("<table border=1 class=tables>");
for (i = 0; i < matriz3.length; i++) {
  var linha = '<tr align="center">';
  for (j = 0; j < matriz3[i].length; j++) {
    linha = linha + "<td id=tablemtz>" + matriz3[i][j] + "</td>";
  }
  linha = linha + "</tr>";
  document.write(linha);
}
document.write("</table></center>");

console.table(matriz3);

document.write("<br><br><br><br>");

var matriz1 = [];
var matriz2 = [];
var matriz3 = [];

//dimensões m1
var linhas1 = prompt("Digite o número de linhas da primeira matriz:");
var colunas1 = prompt("Digite o número de colunas da primeira matriz:");

//aleatorios m1
document.write("<center><table border=1 class=tables>");
for (var i = 0; i < linhas1; i++) {
  var linha = [];
  document.write("<tr align='center'>");
  for (var j = 0; j < colunas1; j++) {
    var numero = Math.floor(Math.random() * 11);
    linha.push(numero);
    document.write("<td id=tablemtz>" + numero + "</td>");
  }
  document.write("</tr>");
  matriz1.push(linha);
}
document.write("</table>");

document.write("&nbsp&nbsp × &nbsp&nbsp");

//dimensões m2
var linhas2 = colunas1;
var colunas2 = prompt("Digite o número de colunas da segunda matriz:");

//aleatorios m2
document.write("<table border=1 class=tables>");
for (var i = 0; i < linhas2; i++) {
  var linha = [];
  document.write("<tr align='center'>");
  for (var j = 0; j < colunas2; j++) {
    var numero = Math.floor(Math.random() * 11);
    linha.push(numero);
    document.write("<td id=tablemtz>" + numero + "</td>");
  }
  document.write("</tr>");
  matriz2.push(linha);
}
document.write("</table>");

document.write("&nbsp&nbsp = &nbsp&nbsp");

//multiplicação
for (var i = 0; i < linhas1; i++) {
  var linha = [];
  for (var j = 0; j < colunas2; j++) {
    var resultado = 0;
    for (var k = 0; k < colunas1; k++) {
      resultado += parseInt(matriz1[i][k]) * parseInt(matriz2[k][j]);
    }
    linha.push(resultado);
  }
  matriz3.push(linha);
}

//exibição m3
document.write("<table border=1 class=tables>");
for (i = 0; i < matriz3.length; i++) {
  var linha = '<tr align="center">';
  for (j = 0; j < matriz3[i].length; j++) {
    linha = linha + "<td id=tablemtz>" + matriz3[i][j] + "</td>";
  }
  linha = linha + "</tr>";
  document.write(linha);
}
document.write("</table></center>");

console.table(matriz3);

