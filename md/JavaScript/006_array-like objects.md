### How to undertand the array-like objects and how to convert the array-like objects into arrays?

An object with the length attribute and several Index attributes can be called a array-like object. Array-like objects are similar to arrays, but array methods cannot be called. 

Common array-like objects include arguments and DOM methods. Function parameters can also be considered as array-like objects because that contain the length attribute value, which represents the number of parameters that can be received. 

we can call the slice/splice method of Array,  apply concat method of Array, or use the Array.from Method to convert array-like objects into arrays.
