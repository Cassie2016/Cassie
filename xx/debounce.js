function debounce(fn, wait) {
  let timer = null
  return function(...args) {
    if(timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => fn(...args), wait)
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

obj.consoleDebounce(3,5) // 期待3秒后打印 1 3 5，但是3秒后打印 undefined 3 5

this lost？why?
