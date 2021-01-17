
///////////////////////////////// foreach BUG NO FINAL

  Array.prototype.newForEach = function (callback, thisArg = this){
    for (let i = 0; i <= thisArg.length; i++){
        let valor = thisArg[i]
       callback(valor, i, thisArg)
    }
}
  
console.log('newForeach -' + [1, 2, 3, 4, 5].forEach(i=>{console.log(i)}));



///////////////////////////////// map
Array.prototype.newMap = function(callback, thisArg){
    let novoArray = [];
    for (let i = 0; i < this.length; i++){
      let resultado = callback(this[i], i, thisArg);
      novoArray.push(resultado)
    }
    return novoArray;
  }
  

        console.log('add 1 em cada: ' + [1, 2, 3, 4, 5].newMap(n => n + 1))



        //////////////////////////////////// some // retornar boll

Array.prototype.newSome = function (callback, thisArg = this){
    let resultado = false
    for (let i = 0; i < thisArg.length; i++){
        let valor = thisArg[i];
        if (callback(valor, i, thisArg) == true){
            resultado = true;
            break;
        } 
    }
    return resultado;
}

console.log('newsome ' + [12, 5, 8, 1, 4].newSome(element => element > 10)); // true


////////////////////////////////////// newFind

Array.prototype.newFind = function (callback, thisArg = this){
    let resultado = undefined
    for (let i = 0; i < thisArg.length; i++){
        let valor = thisArg[i];
        if (callback(valor, i, thisArg) == true){
            resultado = valor;
            break;
        } 
    }
    return resultado;
}

console.log('newfind ' + [1,2,5,11,20].newFind(element => element > 10));


/////////////////////////////// newfindindex


Array.prototype.newFindIndex = function (callback, thisArg = this){
    let resultado = -1;
    for (let i = 0; i < thisArg.length; i++){
        let valor = thisArg[i];
        if (callback(valor) == true){
            resultado = i;
            break;
        } 
    }
    return Number(resultado);
}
/// maior 18
console.log('newfindindex ' + [1,2,17,19,20].findIndex(k => k > '18'));


//////////////////////////////// every

Array.prototype.newEvery = function (callback, thisArg = this){
    let resultado = true;
    for (let i = 0; i < thisArg.length; i++){
        let valor = thisArg[i];
        if (callback(valor, i, thisArg) == false || callback(valor, i, thisArg) == undefined ){
            resultado = false;
            break;
        } 
    }
    return resultado;
}

console.log([12, 54, 18, 130, 44].every(elem => elem >= 10)); // true
console.log('newevery ' + [12, 54, 18, 130, 44].newEvery(elem => elem >= 10));



////////////////////////////////////// filter

Array.prototype.newfilter = function(callback, thisArg) {
    var novoArray = []
    
    for (let i = 0; i < this.length; i++){
      let filtro = callback(this[i], i, thisArg)// bool
        if (filtro == true){
        novoArray.push(this[i])
      } 
    }
    return novoArray;
  }  

        console.log('filter maior/igual de 18' + [14, 17, 19, 100].newfilter((n, i, array) => n >= 18))


////////////////////////////bonus
