地址：[https://bigfrontend.dev/problem/improve-a-function](https://bigfrontend.dev/problem/improve-a-function)
### question
```javascript
// Given an input of array, 
// which is made of items with >= 3 properties

let items = [
  {color: 'red', type: 'tv', age: 18}, 
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'book', age: 17}
] 

// an exclude array made of key value pair
const excludes = [ 
  {k: 'color', v: 'silver'}, 
  {k: 'type', v: 'tv'}, 
  ...
] 

function excludeItems(items, excludes) { 
  excludes.forEach( pair => { 
    items = items.filter(item => item[pair.k] === item[pair.v])
  })

  return items
}
```

1. What does this function excludeItems do?

Exclude specific item from original items array by some conditions.<br />The funciton has 2 parameters, the first one is original items array,  which is made of items with >= 3 properties, the second is exclude array made of key value pair.

2. Is this function working as expected?

No, the filter condition is wrong.<br />it should be 「Not equal」determination not 「 equal」determination .<br />and item[pair.k]  should be compaired with pair.v not item[pair.v]<br />the right one shoud be like as follows:
```javascript
function excludeItems(items, excludes) { 
  excludes.forEach( pair => { 
    items = items.filter(item => item[pair.k] !== pair.v)
  })

  return items
}
```

3. What is the time complexity of this function?

Say if we define excludes.length is N, items.lenth is M, and each of items has K properties.<br />the time complexity is N times M, cause both the time complexity of 「filter」and 「forEach」are O(n)

4. How would you optimize it ?
   1. considering that, In the exclude array, there might be the same key but different values, and in this case we need to iterate all the key value pairs. we can preprocess exclude array to a map, so that the size of exclution map will not be bigger than the properties.length of each item in the items arrray.
   2. some()
### solution
```javascript
/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  const excludeMap = new Map()
  for (let {k, v} of excludes) {
    if (!excludeMap.has(k)) {
      excludeMap.set(k, new Set())
    }
    excludeMap.get(k).add(v)
  }

  return items.filter(item => {
    return !Object.keys(item).some(
      key => excludeMap.has(key) && excludeMap.get(key).has(item[key])
    )
  })
}
```
### Improve function time complexity explanation
To analyze the time complexity of these two solutions for excludeltems, we need to understand the operations being performed and how they scale with the size of the input. Let' s break down each solution:

#### Solution 1

- **Operation**: 

Iterating over the excludes array and filtering items based on each exclude pair.

- **Time Complexity:**

Let n be the length of items, m be the length of excludes, and k be the average number of properties per item.<br />For each element in excludes, we filter the items. Each filter operation is O(n).<br />Therefore, the **total time complexity** is **O(m * n).**

#### Solution 2

- **Preprocessing Step:**

Convert excludes into a map where each key points to a set of values to be excluded.

- **Time Complexity:**

For each element in excludes, we perform a constant-time operation to add it to the map.<br />This step has a time complexity of** O(m)**.

- **Filtering Step:**

Iterate over items and check for each property if it's in the exclude map.

- **Time Complexity:**

For each item, we check each of its keys against the map. Each check is O(1) due to the use of a map and set.<br />This step has a time complexity of **O(n * k)**.<br />Therefore, the **total time complexity** is **O(m) + O(n * k).**

#### Overall Comparison

- **Solution 1: 0(m * n)**

Linearly scales with the size of both items and excludes.

- **Solution 2: O(m) for preprocessing + O(n * k) for filtering**

The preprocessing step scales with the size of excludes only.<br />The filtering step scales with the size of items and their properties but is independent of the size of excludes.

- **Conclusion**

Solution 2 is generally more efficient than Solution 1, especially when m (the size of excludes ) is large.<br />The preprocessing step in Solution 2 helps in reducing the complexity of the filtering process by avoiding repetitive checks for each exude pair.<br />The efficiency of Solution 2 is more pronounced when there are many exclusion criteria (large m) compared to the number of items (n) and their properties (K).

