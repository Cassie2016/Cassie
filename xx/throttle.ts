function myThrottle(fn, delay) {
  let lastTime = Date.now()
  let count = 0
  return function(...args) {
    const curTime = Date.now()
    if(curTime - lastTime >= delay) {
      console.log(++count) // 打印执行次数
      lastTime = curTime // 需要重置上次进入的时间
      return fn.apply(this, args) // 这里不需要setTimeout执行
    }
  }
}

function consoleFn(num1, num2) {
    console.log(this.a, num1, num2)
}
const consoleThrottle = myThrottle(consoleFn, 3000)

let obj = {
    a: 1,
    consoleThrottle // 函数赋值
}

window.addEventListener('scroll', () => obj.consoleThrottle(3,5)) // 第二个参数接收一个函数


Key Point:

1、Different from the deounce implementation, we use the curTime and LastTime to control the execution frequency instead of using setTimeout.
  
2、Don't forget to return the result.
  
3、When we add an eventListener, we need to care about the way we register the funciton, and not make a mistake like this: window.addEventListener('scroll', obj.consoleThrottle(3,5))
