### The difference and usage scenarios between Promise.all and Promise.race
（1）Promise.all

Promise.all can wrap multiple Promise instances into a single new Promise instance. Additionally, the return values for success and failure are different. On success, it returns an array of results, whereas on failure, it returns the value from the first Promise that was rejected.

In Promise.all, an array is passed in, and an array is returned when success. The returned values from multiple Promises are outputed to the array in the order they were passed in. However, the execution order of these Promises is not necessarily by the order passed in. This is particularly useful in where multiple requests with no dependencies, and response data need returns with the order of requests.

（2）Promise.race

As implied by its name, Promise.race is simular to a race. It means that in Promise.race([p1, p2, p3]), whichever result is obtained first, that result is returned, regardless of whether it's a success or a failure. This method can be useful when there's a need to perform an action only within a certain time frame; if the time is exceeded, the action is no longer pursued.

### What problems does promise resolve?
For instance, after sending a request A using ajax and successfully receiving data, I need to pass this data to request B, and then request C after B is successful, and so on.

The latter request depends on the success of the previous one, leading to where multiple ajax requests are nested, making the code less intuitive.

After use Promise and the Then chain, the code will look much simpler and solve the problem of Hell Callback.
