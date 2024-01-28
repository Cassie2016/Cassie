
### 1、How to merge object in JavaScript?
You can use 'Object.assign()' or the spread operator '...' to merge objects. Below are two methods for merging objects:
Object.assign({}, obj1, obj2, …)
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
```
The first parameter is the target object, and the others are the source objects. 

The properties from source objects are copied to target object, and target object is modified accordingly.

Object.assign performs a shallow copy.

When property values are primitive data types (e.g., numbers, strings, booleans), they are directly copied. However, when property values are reference types (e.g., objects or arrays), it copies only the reference, not the object itself.
the spread operator '...'

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
```

Note that if the merged objects contain properties with the same name, the value of the later property will overwrite the value of the earlier property.

### 2、How to determine if an object is empty？
Use the Object.keys() method getting the length of object keys, if the length of the list is 0, then the object is empty.
``` javascript
const obj = {};
if (Object.keys(obj).length === 0) {
 console.log('obj is empty');
}
```
Or use a for...in loop to traverse an object, If no property exists, then the object is empty.
``` javascript
const obj = {};
let isEmpty = true;
for (const prop in obj) {
 isEmpty = false;
 break;
}
if (isEmpty) {
 console.log('obj is empty');
}
```
