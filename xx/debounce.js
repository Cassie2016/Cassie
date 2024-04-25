function debounce(fn, wait) { // 传参：隐式赋值
  let timer = null
  return function(...args) {
    if(timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => fn(...args), wait) // fn 其实引用的是 consoleFn 函数本身，独立函数调用（使用的是 this的默认绑定即，严格模式绑定到 undefined，非严格模式绑定到 全局对象）
  }
}
function consoleFn(num1, num2) {
    console.log(this.a, num1, num2)
}
const consoleDebounce = debounce(consoleFn, 3000)

let obj = {
    a: 1,
    consoleDebounce // 函数赋值
}

obj.consoleDebounce(3,5) // 期待3秒后打印 1 3 5，但是3秒后打印 undefined 3 5

// this lost？why?
there are two reasons:
- If the function is not a method of any object, this refers to the global object. However, in strict mode ('use strict';), it will be undefined in this case.
- Arrow functions do not have their own this context. Instead, they inherit the this value from the enclosing scope.
  
I thought when the fn is invoked in the setTimeout function, cause it was wrapped by an arrow function, so this refered to the outside function context, which was the closure context.
but the fn was not a method of any object when invoked, so this refered to the global object or undefined.

So we need to use apply or call change this to the the closure context.


function debounce(fn, wait) {
  let timer = null
  return function(...args) {
    if(timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => fn.apply(this, args), wait)
  }
}
function consoleFn(num1, num2) {
    console.log(this.a, num1, num2)
}
const consoleDebounce = debounce(consoleFn, 3000)

let obj = {
    a: 1,
    consoleDebounce
}

obj.consoleDebounce(3,5) // 3秒后打印 1 3 5
