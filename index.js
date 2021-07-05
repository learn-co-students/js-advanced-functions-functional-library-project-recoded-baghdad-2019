const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, alert) {
      if (Array.isArray(collection)) {
        collection.forEach((x, index, collection) => alert(x, index, collection));
      } else {
        Object.keys(collection).forEach((key) => alert(collection[key], key, collection));
      }
      return collection;
    },

    map: function (collection, callback) {
      let newCollection = [];
      if (Array.isArray(collection)) {
        newCollection = collection.map((x, index, collection) => callback(x, index, collection));
      } else {
        newCollection = Object.keys(collection).map((key) => callback(collection[key], key, collection));
      }
      return newCollection;
    },

    reduce: function (collection, alert, acc) {
      if (acc === undefined) {
        return collection.reduce((total, x, collection) => alert(total, x, collection));
      } else {
        return collection.reduce((total, x, collection) => alert(total, x, collection), acc);
      }
    },

    find: function (collection, predicate) {
      let truthyValue = collection.find(x => predicate(x));
      return truthyValue;
    },

    filter: function (collection, predicate) {
      let newCollection = [];
      newCollection = collection.filter(x => predicate(x));
      return newCollection;
    },

    size: function (collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      } else {
        return Object.keys(collection).length;
      }
    },
    first: function (array, n = 1) {
      if (n == 1) return array[0];
      else return array.slice(0, n);
    },

    last: function (array, n) {
      if (n === undefined) {
        return array[array.length - 1];
      }
      else {
        return array.slice(n * -1);
      }
    },

    compact: function (array) {
      let newArray = [];
      newArray = array.filter(x => {
       let valueState=!!x;
        if (valueState !== false) return x });
      return newArray;
    },

    sortBy: function (array, callback) {
      let newArray = [...array];
      newArray.sort((a, b) => callback(a) - callback(b));
      return newArray;
    },

    flatten: function (array, shallow = false) {
      let n = [];
      let i = 0;
      let oneFunIttrations = true;

      function flattenArray(subArray) {

        subArray.map(x => {
          if (Array.isArray(x) && shallow === false) {
            flattenArray(x);
          }
          else if (Array.isArray(x) && shallow === true && oneFunIttrations === true) {
            x.map(y => {
              n[i] = y;
              i += 1;
            });
          }
          else {
            n[i] = x;
            i += 1;
          }
        });
        return n;
      }
      return flattenArray(array);
    },

    uniq: function (array, isSorted, callback) {
      let uniqArray = function (arr, testCallback) {
        return arr.filter((x, index, arr) => {
          return testCallback(x, index, arr);
        });
      };
      let isFound = function (x, lookUpArray, testCallback) {
        let searchFor = testCallback(x);
        return lookUpArray.find((x) => {
          return searchFor === testCallback(x) ? true : false;
        });
      }
      let uniqArrWithCallback = function (array, callback) {
        return array.filter((x, index, array) => {
          return !isFound(x, array.slice(0, index), callback)
        })
      }
      if (callback === undefined) {
        if (isSorted) {
          return uniqArray(array, ((x, index, n) => x != n[index + 1]));
        } else {
          return uniqArray(array, ((x, index, n) => n.indexOf(x) == index));
        }
      } else {
        return uniqArrWithCallback(array, callback)
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
