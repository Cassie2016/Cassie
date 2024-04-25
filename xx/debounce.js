function debounce(fn, wait) { // 传参：隐式赋值
  let timer = null
  return function(...args) {
    if(timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => fn.apply(this, args), wait) // fn 其实引用的是 consoleFn 函数本身，独立函数调用（使用的是 this的默认绑定即，严格模式绑定到 undefined，非严格模式绑定到 全局对象）
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

because when the fn is invoked in the setTimeout function, the 
 
function test(fn) {
  return function() {
    fn()
  }
}
const target = function() {
  console.log(this.a)
}

var obj = {
  a: 1,
  test // 赋值操作
}
