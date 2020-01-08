const fi = (function() {
  return {
    libraryMethod: function() {
            return "Start by reading the article!";
    },

    each: function(collection,cb) {
      let newCollection;
    if (collection instanceof Array) {
      newCollection = collection.slice(0) }
    else{
      newCollection = Object.values(collection)
    }
    for(let i =0; i<newCollection.length; i++){
      cb(newCollection[i],i,collection);
    }
    return collection;
    },

    map: function(collection,cb) {
      let newCollection = [];
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }
      for(let i=0; i<collection.length;i++){
         newCollection.push(cb(collection[i],i,collection));
      }
      return newCollection;
    },

    reduce: function(collection,cb,acc) {
         if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}
             for(let i=0; i<collection.length;i++){
        acc = cb(acc,collection[i],collection);
      }
      return acc
    },
    find:function(collection,predicate) {
      let findEl;
      for(let i=0;i<collection.length;i++){
      const result = predicate(collection[i],i,collection)
      if(result) return findEl = collection[i]
      }
  },
  filter:function(collection,predicate){
    let filterArr = [];
    for(let i=0; i<collection.length;i++){
      let result = predicate(collection[i],i,collection)
      if(result) filterArr.push(collection[i])
    }
    return filterArr;
  },
  size:function(collection){
     if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }
      let count = 0;
      for(let i=0; i<collection.length;i++){
        ++count;
      }
      return count;
  },
  first:function(arr,n){
   if(!n) return arr[0];
   else {
    return arr.slice(0,n)
   }

  },
  last:function(arr,n){
    if(!n) return arr[arr.length - 1]
    else{
      return arr.slice(-n);
    }
  },
  compact:function(arr){
     const pass = new Set([false, null, 0, "", undefined, NaN])
      return arr.filter(el => !pass.has(el))
  },

sortBy:function(arr,cb){
  let newArr = [...arr];
  newArr.sort((a,b) => cb(a) - cb(b));
  return newArr
},
flatten:function(arr,shallow,newArr){
  if(!newArr){newArr = []}
  if(shallow){
  newArr = newArr.concat(...arr)
  }
  else {
    for(let i = 0; i<arr.length; i++){
      if(Array.isArray(arr[i])){
        this.flatten(arr[i],shallow,newArr)
      }
      else{
        newArr.push(arr[i])
      }
    }
  }
  return newArr;
},
uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },
    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },
keys:function(obj){
    const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
},
values:function(obj){
    const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values
},
functions: function(obj) {
    const functionNames = []

    for (let key in obj) {
      if (typeof obj[key] === "function"){
        functionNames.push(key)
      }
    }

    return functionNames.sort()
  },

}
})()

fi.libraryMethod()
