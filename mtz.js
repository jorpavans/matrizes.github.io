var matriz1 = [];
alert("Esse programa faz multiplicação de uma matriz (4x4) por escalar, e os números (de 0 a 10) dela sendo geradas de maneira aleatória.");
matriz1 = prompt("Digite um número: ");

document.write("<br><br><br><br>");

document.write("<center>&nbsp [" + matriz1 + "]");

document.write("&nbsp&nbsp × &nbsp&nbsp");

console.table(matriz1);

var matriz2 = [];
matriz2.push([Math.round(Math.random() * 10),Math.round(Math.random() * 10),Math.round(Math.random() * 10),Math.round(Math.random() * 10)]);
matriz2.push([Math.round(Math.random() * 10),Math.round(Math.random() * 10),Math.round(Math.random() * 10),Math.round(Math.random() * 10)]);
matriz2.push([Math.round(Math.random() * 10),Math.round(Math.random() * 10),Math.round(Math.random() * 10),Math.round(Math.random() * 10)]);
matriz2.push([Math.round(Math.random() * 10),Math.round(Math.random() * 10),Math.round(Math.random() * 10),Math.round(Math.random() * 10)]);
console.table(matriz2); 

document.write( "<table border=1 class=tables>");
for (i = 0; i < matriz2.length; i++) {
var linha = '<tr align="center">';
for (j = 0; j < matriz2[i].length; j++) {
linha = linha + "<td id=tablemtz>" + matriz2[i][j] + "</td>";
}
linha=linha+"</tr>";
document.write(linha);
}
document.write( "</table>");


document.write("&nbsp&nbsp = &nbsp&nbsp");

var matriz3 = [];
//var Mtz3 = new Array();

/*for (f = 0; f < 4; f++){
    Mtz3[f] = [];
    for (g = 0; g < 4; g++){
        Mtz3[f][g] = matriz3[f][g] * eba; 
    }
}*/

matriz3.push([matriz2[0][0]*matriz1, matriz2[0][1]*matriz1, matriz2[0][2]*matriz1, matriz2[0][3]*matriz1]);
matriz3.push([matriz2[1][0]*matriz1, matriz2[1][1]*matriz1, matriz2[1][2]*matriz1, matriz2[1][3]*matriz1]);
matriz3.push([matriz2[2][0]*matriz1, matriz2[2][1]*matriz1, matriz2[2][2]*matriz1, matriz2[2][3]*matriz1]);
matriz3.push([matriz2[3][0]*matriz1, matriz2[3][1]*matriz1, matriz2[3][2]*matriz1, matriz2[3][3]*matriz1]);

document.write( "<table border=1 class=tables>");
for (i = 0; i < matriz3.length; i++) {
var linha = '<tr align="center">';
for (j = 0; j < matriz3[i].length; j++) {
linha = linha + "<td id=tablemtz>" + matriz3[i][j] + "</td>";
}
linha=linha+"</tr>";
document.write(linha);
}
document.write( "</table></center>");

console.table(matriz3);