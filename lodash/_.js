const _ = {
    clamp(number, lbound, hbound){
      /*if (number < lbound)
        return lbound;
      else if (number > hbound)
        return hbound;
      else 
        return number;
        */
       return Math.min(Math.max(number, lbound), hbound);    
    },
    inRange(number, start=0, end){
      if (end == undefined ){
        end = start;
        start = 0;
      } else if(end < start){
        let aux = end;
        end = start;
        start = aux;
      }
      if (number >= start && number < end)
        return true;
      return false;
      },
    words(str){
      return str.split(' ');
    },
    pad (str, length){
      let aux = '';
      let wordLength = str.length;

      let pad = length > wordLength ? length - wordLength : 0;
      //console.log(pad);
      let backP = Math.floor(pad / 2);
      //console.log(`back pad: ${backP}`);
      let frontP = pad % 2 == 0 ? pad/2 : Math.floor(pad/2)+1;
      //console.log(`front pad: ${frontP}`);
      for (let i= 0; i < backP; i++)
      aux += ' ';
      aux +=str;
      for (let i= 0; i < frontP; i++)
        aux +=' ';
      //console.log(aux.length);
      return aux;
    },
    has(key, valor){
        if (key[valor] == undefined)
            return false;
        return true;
   },
   invert(objeto){
       let res = {};
       console.log(objeto);
       for (let val in objeto){
           res[(objeto[val])] = val;
    }
    return res;
   },
   findKey(object, predicate){
       for (let val in object){
           let value = object[val];
           let predicateReturnValue = predicate(value);      
           if (predicateReturnValue)
            return val;
       }
       return undefined;
   },
   drop(array, n=1){
       let droppedArray = array.slice(-n);
       return droppedArray;
   },
   dropWhile(array, predicate){
       let dropNumber = array.findIndex((value, index)=>predicate(value, index, array) === false);
       return this.drop(array, dropNumber);
    }, 
    chunk(array, size=1){
        let length = array.length;
        let div = Math.floor(length/size);
        let mod = Math.floor(length%size);
        console.log(div, mod);
        let res = [];
        for (let i = 0; i < div; i++){
            let aux = [];
            for (let j=0; j < size; j++){
                aux.push(array[i*size+j]);
            }
            res.push(aux);
        }
        if (mod != 0)
            res.push(_.drop(array, mod));
        return res;
    }
    
  };


// Do not write or modify code below this line.
module.exports = _;