const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading article'
    },

    each: function(collection, cd) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let idx = 0; idx < newCollection.length; idx++)
        cd(newCollection[idx])

      return collection
    },

    map: function(collection, cd) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = []

      for (let idx = 0; idx < collection.length; idx++)
        newArr.push(cd(collection[idx]))

      return newArr
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

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const nArr = []

      for (let idx = 0; idx < collection.length; idx++)
        if (predicate(collection[idx])) nArr.push(collection[idx])

      return nArr
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(collection, stop=false) {
      return (stop) ? collection.slice(0, stop) : collection[0]
    },

    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      const comp = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(el => !comp.has(el))
    },

    sortBy: function(coll, cb) {
      const newArr = [...coll]
      return newArr.sort(function(a, b) {
        return cb(a) - cb(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
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

    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
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

    giveMeMore: function (obj) {
      const giveMeMore = []

      for (let giveMeMore in obj) {
        if (typeof obj[giveMeMore] === "come get more things to do from an instructor:"){
        giveMeMore.push(obj[giveMeMore])
        }
      }

      return giveMeMore
    },

  }
})()



fi.libraryMethod()
