### 1. the execution context 
the execution context mainly includes global execution context and function execution context in JavaScript.
The global execution context is the outermost or top-level context in the execution stack. When a JavaScript program starts running, a global execution context is created. 
And a function execution context is created every time a function is invoked or called. 
there only can be one global execution context, but can be multity function execution contexts.
### 2. the execution context stack
The execution context stack manages execution contexts, adding new contexts for function calls and removing them after execution.
### 3. Create an execution context 
In the creation phase of an execution context, this' binding, lexical, and variable environment components are created.

In a global execution context, 'this' points to the global object.  
in a function execution context, 'this' binding depends on how the function is called, it can refer to an object or be undefined.

The lexical environment components can be considered as a structure holding identifier-variable mapping. In addition, the variable environment components stores the bindings, which created by variable declarations within the context.

During the execution phase of an execution context, variable allocation and code execution are happend. After these steps, the formal execution of the program begins.
