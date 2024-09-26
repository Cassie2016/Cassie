### 写在前面：
  - `myRe.exec(str)`： `exec` 和 `test` 是 `执行` 和 `检测` 的意思，调用者是 `正则表达式`。
  - `str.match(myRe)`： `match` 和 `matchAll` 是 `匹配` 的意思， 调用者是 `字符串`。
  - 理解了 `exec`, 便也就理解了 其余三个方法
  

### 一、`exec`函数
  - `exec` 函数会从正则表达式`变量`的 `lastIndex`（默认为 `0`）起开始检索原始字符串，一旦匹配成功就会停止继续向后匹配，并会在执行后把正则表达式`变量`的 `lastIndex` 值置成此次匹配的子串末尾的下标 + 1（如果匹配成功），或置回 0（如果匹配失败）。
```javascript
let myRe = /d(b+)(c*)d/g;
let str = 'cdbbcdbsbzdbd';

myRe.exec(str);
// 第 1 次执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]
// 上面结果中的 "bb" 就是第一个括号捕获的内容，"c" 就是第二个括号捕获的内容
// 执行完后 myRe.lastIndex 为 6，下一次 exec 将从原始字符串下标 6 开始检索

myRe.exec(str);
// 第 2 次执行结果 => ["dbd", "b", "", index: 10, input: "cdbbcdbsbzdbd"]
// 上面结果中的 "b" 就是第一个括号捕获的内容，"" 就是第二个括号捕获的内容
// 执行完后 myRe.lastIndex 为 13，下一次 exec 将从原始字符串下标 13 开始检索

myRe.exec(str);
// 第 3 次执行 => null
// 执行完后 myRe.lastIndex 为 0，下一次 exec 将从原始字符串下标 0 开始检索

myRe.exec(str);
// 第 4 次执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]
// 执行完后 myRe.lastIndex 为 6
```
- `lastIndex` 是正则表达式`变量`的一个属性，如果你没有把正则表达式赋给一个`变量`，每次用的都是`新的`正则表达式，那就不存在多次执行导致不同结果的现象了，像下面这样：
```javascript
let str = 'cdbbcdbsbzdbd';

/d(b+)(c*)d/g.exec(str);
// 执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]

/d(b+)(c*)d/g.exec(str);
// 执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]

/d(b+)(c*)d/g.exec(str);
// 执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]
```
- 当正则表达式 不携带 `g` 标志时，exec 函数同样一旦匹配成功就会停止继续向后匹配，并且不会改变正则表达式`变量`的 `lastIndex`，这样每次调用 exec 得到的结果都是相同的。

### 二、`match` 函数
- 当正则表达式 不携带 `g` 标志时，**match 函数的返回形式与 exec 函数一致**，并且不会改变正则表达式`变量`的 `lastIndex`，像下面这样：
```javascript
let myRe = /d(b+)(c*)d/;
let str = 'cdbbcdbsbzdbd';

str.match(myRe);
// 执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]
// 执行完后 myRe.lastIndex 为 0
```

- 当正则表达式携带 `g` 标志时，**match 函数会以`数组`形式返回所有`匹配的子串`**（并不会捕获括号中的内容），不会改变正则表达式`变量`的 `lastIndex`，像下面这样：
```javascript
let myRe = /d(b+)(c*)d/g;
let str = 'cdbbcdbsbzdbd';

str.match(myRe);
// 执行结果 => ["dbbcd", "dbd"]
// 执行完后 myRe.lastIndex 为 0
```

### 三、`matchAll` 函数
matchAll 使用的正则表达式 `必须` 携带 `g` 标志，`matchAll` 函数会以`迭代器（iterator）`形式返回所有匹配的子串，**每个子串都是与 exec 函数的返回格式一致**，不会改变正则表达式`变量`的 `lastIndex`，像下面这样：
```
let myRe = /d(b+)(c*)d/g;
let str = 'cdbbcdbsbzdbd';

[...str.matchAll(myRe)];
// 执行结果 => 
// [
//     ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"],
//     ["dbd", "b", "", index: 10, input: "cdbbcdbsbzdbd"]
// ]
// 执行完后 myRe.lastIndex 为 0
```

### 四、`test`函数
- 返回`布尔值`，`true` 代表匹配成功，`false` 代表匹配失败
- `test` 函数与 `exec` 函数在对待 `lastIndex` 上的行为完全一样：
  - 在携带 g 标志时，从正则表达式`变量`的 `lastIndex`（默认为 0）起开始检索原始字符串，一旦匹配成功就会停止继续向后匹配，并会在执行后把正则表达式`变量`的 `lastIndex` 值置成此次匹配的子串末尾的下标 + 1（如果匹配成功），或置回 0（如果匹配失败）；
  -  不携带 g 标志时，test 函数同样一旦匹配成功就会停止继续向后匹配，并且不会改变正则表达式`变量`的 `lastIndex`：
```
let myRe = /d(b+)(c*)d/g;
let str = 'cdbbcdbsbzdbd';

myRe.test(str);
// 第 1 次执行结果 => true
// 执行完后 myRe.lastIndex 为 6，下一次 test 将从原始字符串下标 6 开始检索

myRe.test(str);
// 第 2 次执行结果 => true
// 执行完后 myRe.lastIndex 为 13，下一次 test 将从原始字符串下标 13 开始检索

myRe.test(str);
// 第 3 次执行 => false
// 执行完后 myRe.lastIndex 为 0，下一次 test 将从原始字符串下标 0 开始检索

myRe.test(str);
// 第 4 次执行结果 => true
// 执行完后 myRe.lastIndex 为 6


let myRe2 = /d(b+)(c*)d/;  // myRe2 不携带 g 标志

myRe2.test(str);
// 第 1 次执行结果 => true
// 执行完后 myRe.lastIndex 为 0，下一次 test 将从原始字符串下标 0 开始检索

myRe2.test(str);
// 第 2 次执行结果 => true
// 执行完后 myRe.lastIndex 为 0，下一次 test 将从原始字符串下标 0 开始检索

myRe2.test(str);
// 第 3 次执行 => true
// 执行完后 myRe.lastIndex 为 0，下一次 test 将从原始字符串下标 0 开始检索
```











