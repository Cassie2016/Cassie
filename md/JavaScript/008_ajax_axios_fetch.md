### Differences among Ajax, axios, and fetch

Ajax, standing for Asynchronous JavaScript and XML, is use to update parts of a web page without reloading the entire page. It's more suited for MVC (Model-View-Controller) programming, not the front-end MVVM trend. It's built on the less clear architecture of native XHR (XMLHttpRequest) in terms of implementation.

Fetch in JavaScript is a modern alternative to Ajax using ES6 promise objects, which is distinct from native XHR. The advantage about Fetch is that it offers a more straightforward and semantic syntax using promises than Ajax. the key limitation of Fetch is that it does not natively reject HTTP 400 or 500 status errors. When using cookie with Fetch, it requires {credentials: 'include'} configuration to send cookies additional.

Axios is a Promise-based HTTP client for making XMLHttpRequests in browsers and handling HTTP requests in Node.js.  Comparing to Fetch, Axios can cancel requests and automatically handle JSON data. In adition, Axios provides client-side protection against XSRF attacks.
