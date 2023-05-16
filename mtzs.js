var matriz1 = [];
var matriz2 = [];
var matriz3 = [];

alert("Esse programa faz a soma de duas matrizes(4x4). Na primeira matriz é necessário que o usuário determine os números, na segunda são gerados números aleatórios.");

document.write("<br><br><br><br>");

document.write("<center><table border=1 class=tables>");
for (var i = 0; i < 4; i++) {
  var linha = [];
  document.write("<tr align='center'>");
  for (var j = 0; j < 4; j++) {
    var numero = prompt("Digite o número da posição [" + i + "][" + j + "] da primeira matriz:");
    linha.push(numero);
    document.write("<td id=tablemtz>" + numero + "</td>");
  }
  document.write("</tr>");
  matriz1.push(linha);
}
document.write("</table> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");

document.write("&nbsp&nbsp + &nbsp&nbsp");

// Preenchendo a matriz2 com números aleatórios entre 0 e 10
document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<table border=1 class=tables>");
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
document.write("</table> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");

// Realizando a soma das matrizes
for (var i = 0; i < 4; i++) {
  var linha = [];
  for (var j = 0; j < 4; j++) {
    var resultado = parseInt(matriz1[i][j]) + parseInt(matriz2[i][j]);
    linha.push(resultado);
  }
  matriz3.push(linha);
}

document.write("&nbsp&nbsp = &nbsp&nbsp");

// Exibindo a matriz3 na página HTML
document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<table border=1 class=tables>");
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

/*var matriz1 = [];
var matriz2 = [];
var matriz3 = [];

alert("Esse programa faz a soma de duas matrizes(4x4). Na primeira matriz é necessário que o usuário determine os números, na segunda são gerados números aleatórios.");

// Preenchendo a matriz1 com os números informados pelo usuário
document.write( "<center><table border=1>");
for (var i = 0; i < 4; i++) {
  var linha = [];
  for (var j = 0; j < 4; j++) {
    var numero = prompt("Digite o número da posição [" + i + "][" + j + "] da primeira matriz:");
    linha.push(numero);
  }
  matriz1.push(linha);
}

// Preenchendo a matriz2 com números aleatórios entre 0 e 10
for (var i = 0; i < 4; i++) {
  var linha = [];
  for (var j = 0; j < 4; j++) {
    var numero = Math.floor(Math.random() * 11);
    linha.push(numero);
  }
  matriz2.push(linha);
}

// Realizando a soma das matrizes
/*for (var i = 0; i < 4; i++) {
  var linha = [];
  for (var j = 0; j < 4; j++) {
    var resultado = matriz1[i][j] + matriz2[i][j];
    linha.push(resultado);
  }
  matrizResultado.push(linha);
}*/

/*matriz3.push([matriz2[0][0]+matriz1[0][0], matriz2[0][1]+matriz1[0][1], matriz2[0][2]+matriz1[0][2], matriz2[0][3]+matriz1[0][3]]);
matriz3.push([matriz2[1][0]+matriz1[1][0], matriz2[1][1]+matriz1[1][1], matriz2[1][2]+matriz1[1][2], matriz2[1][3]+matriz1[1][3]]);
matriz3.push([matriz2[2][0]+matriz1[2][0], matriz2[2][1]+matriz1[2][1], matriz2[2][2]+matriz1[2][2], matriz2[2][3]+matriz1[2][3]]);
matriz3.push([matriz2[3][0]+matriz1[3][0], matriz2[3][1]+matriz1[3][1], matriz2[3][2]+matriz1[3][2], matriz2[3][3]+matriz1[3][3]]);

document.write( "<table border=1>");
for (i = 0; i < matriz3.length; i++) {
var linha = '<tr>';
for (j = 0; j < matriz3[i].length; j++) {
linha = linha + "<td id=tablemtz>" + matriz3[i][j] + "</td>";
}
linha=linha+"</tr>";
document.write(linha);
}
document.write( "</table></center>");

console.table(matriz3);*/

// Exibindo as matrizes na tabela
/*document.write("<table border=1>");
document.write("<tr><td>Matriz 1</td><td>Matriz 2</td><td>Resultado</td></tr>");
for (var i = 0; i < 4; i++) {
  var linha = '<tr>';
  for (var j = 0; j < 3; j++) {
    linha = linha + "<td>" + matriz1[i][j] + "</td>";
  }
  for (var j = 0; j < 3; j++) {
    linha = linha + "<td>" + matriz2[i][j] + "</td>";
  }
  for (var j = 0; j < 3; j++) {
    linha = linha + "<td>" + matrizResultado[i][j] + "</td>";
  }
  linha = linha + "</tr>";
  document.write(linha);
}
document.write("</table>");*/
