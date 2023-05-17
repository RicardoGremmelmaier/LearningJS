///Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
//ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
//triângulo).


function classificaTriangulo(a,b,c){
    if(a != b && a != c && b != c)
        console.log('Triangulo escaleno')
    else if(a == b && a == c && b == c)
        console.log('Triangulo equilatero')
    else
        console.log('Triangulo isósceles')
}

classificaTriangulo(3,3,3)
classificaTriangulo(3,3,4)
classificaTriangulo(3,4,5)
classificaTriangulo(4,3,3)
classificaTriangulo(5,4,3)
classificaTriangulo(3,4,3)

