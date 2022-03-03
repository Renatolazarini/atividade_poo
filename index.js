class Retangulo{
  constructor(altura, largura){
    this.altura= altura;
    this.largura= largura;
  }
  calcularArea(altura, largura){
    return this.altura*this.largura
  }
  area(){
    return this.calcularArea()
  }
}

let retangulo = new Retangulo(15, 15);
let retangulox = new Retangulo(12, 20);

retangulo.calcularArea()
retangulox.calcularArea()

console.log(retangulo.calcularArea()+"cm²")
console.log(retangulox.calcularArea()+"cm²")
console.log("--------------")
console.log(retangulo.area()+"cm²")
console.log(retangulox.area()+"cm²")
