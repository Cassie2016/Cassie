### What are the differences in asynchronous loading of JS scripts?
In Web applications, the asynchronous loading of JavaScript scripts can be achieved in the following ways:
1. Dynamically create a <script> tag and set its src attribute to the URL of the script to be loaded. You can use the script.onload or script.onreadystatechange event to check if the script has finished loading.
 ```javascript
const script = document.createElement('script');
script.src = 'path/to/script.js';
script.onload = function() {
 // 脚本加载完成后执行的回调函数
};
document.body.appendChild(script);
```
2. Use the XMLHttpRequest object or the Fetch API to send an asynchronous request. After a successful request, parse the response text into JavaScript code, and then use the eval() function or Function() constructor to execute the script.
 ```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'path/to/script.js');
xhr.onload = function() {
 const script = document.createElement('script');
 script.textContent = xhr.responseText;
 document.head.appendChild(script);
};
xhr.send();
```

These two methods can be used to implement the asynchronous loading of JavaScript scripts. Compared to synchronous loading, asynchronous loading has the following differences:

1. Asynchronous loading can improve the loading speed and response performance of the page, and avoid the situation that the page is stuck due to JavaScript blocking.
   
3. Asynchronous loading avoids the blocking caused by loading scripts and allows other resources of the page to load and render faster.
   
5. Asynchronous loading allows you to flexibly control the loading sequence and the execution time of scripts, and dynamically load and unload scripts based on page requirements, thus improving page maintainability and expansibility.

### Custom Method loadScript
 ```javascript
/**
 * @module utils/script
 * @description 引入外部script外链相关
 */

 interface LoadScriptOptions {
   crossorigin?: boolean
   timeoutTime?: number
 }
/**
 * @method loadScript
 * @description 引入外部 script 外链
 * @param {string} url script的url地址
 * @param {object} options 配置
 * @param {boolean} options.crossorigin 是否增加 crossorigin='anonymouse' 配置，默认为 false
 * @param {number} options.timeoutTime timeout 时间，默认值为 10000
 * @example
 * import { script } from 'utils'
 * script.loadScript('xxx.js').then(() => {
 *  // load done
 * }, (err) => {
 *   console.log(err)
 * })
 */
function loadScript(url:string, {crossorigin = false, timeoutTime = 10000} = {} as LoadScriptOptions) {
  function request() {
    return new Promise((resolve, reject) => {
      let sc = document.createElement('script')
      sc.type = 'text/javascript'
      sc.async = true
      if (crossorigin) {
        sc.crossOrigin = 'anonymous'
      }

      sc.onload = function () {
        resolve()
        sc.onload = null
      }
      sc.onerror = function () {
        reject(new Error('load error'))
        sc.onerror = null
      }
      sc.src = url
      document.getElementsByTagName('head')[0].appendChild(sc)
    })
  }

  function timeout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('timeout'))
      }, timeoutTime)
    })
  }

  return Promise.race([request(), timeout()])
}
export {
  loadScript
}
```
