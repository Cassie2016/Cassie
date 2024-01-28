### What is the purpose of the newly added primitive data type "Symbol"?

'Symbol' is a primitive data type introduced in ES6. Its primary purpose is to create a unique identifier, which is used in scenarios such as naming object properties, defining constants, and so on.

Each 'Symbol' is unique and can be used as a property name for objects, which helps to avoid conflicts with property names.

In addition, symbol can also be used to implement constants or enumeration values, which are immutable and unique.

As Symbol is a primitive data type, it offers high performance and reliability, making it suitable for scenarios requiring efficient and secure creation and usage of identifiers.

Another significant characteristic of Symbol is that it does not appear in object property iteration methods like for...in, for...of, Object.keys(), Object.getOwnPropertyNames(), and so on. Therefore, it can be used to define properties that should not be iterated over, such as internal implementation details or hidden attributes.
