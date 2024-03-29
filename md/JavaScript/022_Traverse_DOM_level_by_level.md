地址：[https://bigfrontend.dev/problem/Traverse-DOM-level-by-level](https://bigfrontend.dev/problem/Traverse-DOM-level-by-level)

### question

Given a DOM tree, flatten it into an one dimensional array, in the order of layer by layer, like below.<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/2746344/1711684296264-ade24681-962e-48d0-b2aa-15565653af20.png#averageHue=%23f9f8f8&clientId=ua8fe7fa6-a66d-4&from=paste&height=273&id=u0cb34ae2&originHeight=546&originWidth=1063&originalType=binary&ratio=2&rotation=0&showTitle=false&size=53116&status=done&style=none&taskId=u2d820cdd-6ce1-4021-9eaa-d0fa797830d&title=&width=531.5)


### solution

for this question, we need to transform the given HTMLElement object to a HTMLElement array layer by layer, we can start it by push the root element into a array named quene, and then shfit out the first element of the quene and push the shifted element into the res array，and repeat these two steps till the quene is empty, and return the array finally.

- In terms of HTMLElement object, we can use parentElement.children() method to get a children elements array.
- For the while loop, we need to find the smallest repeatable code unit and the ending conditions to end the loop.

![image.png](https://cdn.nlark.com/yuque/0/2024/png/2746344/1711720812349-82117c5d-41d6-45d5-b20d-2eef20fb5743.png#averageHue=%23efefef&clientId=uc635c19b-677b-4&from=paste&height=446&id=IrDIc&originHeight=892&originWidth=2432&originalType=binary&ratio=2&rotation=0&showTitle=false&size=874741&status=done&style=none&taskId=u76976fb5-225f-42df-a101-ba5b588b7ea&title=&width=1216)

```javascript
/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
 
function flatten(root) {
  if(!root) return []
  let queue = [root]
  let res = []
  while(queue.length) {
    const head = queue.shift()
    res.push(head)
    quene.push(...head.children)
  }
  return res
}
```



