## Homework 6: Frontend native ES6 Modules

1. Install `http-server` with `npm install -g http-server` (or elect to use repl.it)
2. Create a new directory for your files
3. Create an `index.html` and an `index.js`. Make sure to have a `script` tag with a `src` referencing `index.js` in your `index.html` file. The script tag must have `type="module"` for this to work.
4. Create a `module.js` file as well. Inside this file include a function that logs "Hello World" to the console and remember to `export` this function. `import` this function into `index.js` and invoke it. You should see "Hello World" in your console. Do not add `module.js` to `index.html` with another `script` tag. 
5. If you are working off your machine (and not repl.it), navigate to your project directory in the command line and run `http-server`. It will display the URL and port where you can see your page. You'll have to stop and start this anytime you make changes.