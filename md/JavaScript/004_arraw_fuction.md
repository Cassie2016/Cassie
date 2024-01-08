### 一、what is the differences between arrow functions and regular functions?

- Arrow functions are more concise than ordinary functions.

- Arrow functions do not have their own 'this' keyword. 

- This pointer inherited from the arrow function never changes.

- The methods call(), apply(), bind(), etc. cannot change the reference of 'this' in arrow functions.

- Arrow functions cannot be used as constructors.

- Arrow functions do not have their own arguments.

- Arrow functions do not have a prototype.

- Arrow functions cannot be used as Generator functions and cannot use the yeild keyword.

In summary, arrow functions are concise, have lexical this binding, and lack certain features like their own arguments object and the ability to be used as constructors. Regular functions offer more flexibility in terms of this binding, have their own arguments object, and can be used as constructors. The choice between them depends on the specific requirements of your code and the behavior you need.



### 二、What happens if you create a new arrow function?

The key point is arrow functions do not have their own 'this' and the 'this' refers to the outer execution environment, and cannot be changed, so they cannot be used as constructors. 

In addition，it doesn't have a proptotype and arguments parameter either.

### 三、What's the process of using the new operator when creating an object?

1. Create a new empty object

2. Set up the prototype chain

The __proto__ property of the newly created object is set to the prototype property of the constructor.

This establishes a link between the object and the constructor's prototype, allowing the object to access properties and methods defined on the constructor's prototype.

3. Invoke the constructor: The constructor is called, and the this keyword is set to the newly created object. This allows the constructor to set properties and methods on the new object.

4. Return the new object: If the constructor does not explicitly return an object, the new expression implicitly returns the newly created object. If the constructor returns an object, the returned object will replace the new object created by new.

In summary, the new keyword is used to instantiate an object, and it involves creating a new object, linking its prototype chain to the constructor's prototype, invoking the constructor with this set to the new object, and finally, returning the new object. This process allows me to create objects with specific properties and methods using a constructor.

### 四、Where does “this” of the arrow function point to?

Refers to the outer execution environment.

Because arrow function doesn't have its own this, it just inherits this at the level above its own scope. So the pointer to this in the arrow function was already fixed when it was defined, and it doesn't change after that.

