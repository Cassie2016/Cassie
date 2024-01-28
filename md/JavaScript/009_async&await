### Understanding of async/await 

Async and await is a sugar-syntax wrapper around a promise. It was developed to optimize the then chain. 

Using async/await is a way to structure asynchronous code so that it is easier to read. The beauty of async and await is that it makes asynchronous code read like synchronous code.

Async/await functions are known to be non-blocking functions. When await is used, execution of that function call is paused until the promise is resolved. A reference to the call is added to the Javascript queue and the function will not continue and be back into the call stack until something is returned.

Note1: when it's not possible to use await at the outermost level to obtain its return value, the appropriate approach is to use the original method to handle the Promise object with a then() chain.

Note2: Promise.resolve(x) can be viewed as a shorthand for new Promise(resolve => resolve(x)). It is used to quickly wrap literal objects or other objects into Promise instances.

Note3: If the async function does not return a value, it will return Promise. resolve (undefined).
