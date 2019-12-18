
const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      let collectionArray;
      if (collection instanceof Array) {
        collectionArray = collection.slice()
      } else { collectionArray = Object.values(collection) }
      for (let i = 0; i < collectionArray.length; i++) {
        callback(collectionArray[i])
      }
      return collection;
    },

    map: function (collection, callback) {
      let collectionArray;
      let newCollection = [];
      if (collection instanceof Array) {
        collectionArray = collection
      } else { collectionArray = Object.values(collection) }
      for (let i = 0; i < collectionArray.length; i++) {
        newCollection[i] = callback(collectionArray[i])
      }
      return newCollection;
    },
    reduce: function (collectionArray = [], callback = () => { }, acc) {
      let collection = collectionArray.slice(0);
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },

    find: function (collection, predicate) {

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) return collection[i]

      return undefined
    },

    filter: function (collection, predicate) {
      let newArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArray.push(collection[i])
        }
      }
      return newArray
    },
    size: function (collection) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      return collection.length
    },
    first: function (array, n) {
      return (!n) ? array[0] : array.slice(0, n)
    },
    last: function (array, n) {
      return (!n) ? array[array.length - 1] : array.slice(array.length - n, array.length)
    },
    compact: function (collection) {
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(el => !badBad.has(el))
    },
    sortBy: function (array, callback) {
      let newArray = array.slice();
      return newArray.sort((a, b) => callback(a) - callback(b))

    },
    flatten: function (array, shallow = false,myFlattenArray = []) {
      if (!Array.isArray(array)) return myFlattenArray.push(array)
      else array.map(element => {
         if (Array.isArray(element) && shallow === true) {
          element.map(e => myFlattenArray.push(e))
        } else if (!Array.isArray(element) && shallow === true) {
          myFlattenArray.push(element)

        }else {
          this.flatten(element, false , myFlattenArray)
        }
      })

      return myFlattenArray
    },
    uniq: function(collection, sorted=false, iteratee){
      if(sorted){
        let array=[collection[0]];
        for(let i=0;i<collection.length;i++){
          if(array[i]!==collection[i+1]){
            array.push(collection[i+1])
          }
        }
        return array
      }
      if(!iteratee){
        return Array.from(new Set(collection))
      }
      else {
        let modifiedVals = new Set()
        let uniqArray = new Set()
        for (let val of collection) {
          let myValue = iteratee(val)
          if (!modifiedVals.has(myValue)) {
            modifiedVals.add(myValue)
            uniqArray.add(val)
          }
        }
        return Array.from(uniqArray)
      }
    },
    keys: function (object) {
      return Object.keys(object)
    },

    values: function (object) {
      return Object.values(object)
    },

    functions: function (object) {
      let funNames = Object.keys(object).filter(key => typeof (object[key]) === "function");
      return funNames.sort()
    },


  }
})()

fi.libraryMethod()
