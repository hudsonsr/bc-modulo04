instalar babel e webpack
> yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D

instalar o React e React-Dom
> yarn add react react-dom 

Confirgurar o arquivo babel.config.js

module.exports = {
   presets: [
      "@babel/preset-env",
      "@babel/preset-react"
   ],
};


Instalar o babel-loader
> yarn add babel-loader -D 


Configurar o arquivo webpack.config.js


const path = require('path');

module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.js'),
   output: {
      path: path.resolve(__dirname, 'public'),
      filepath: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         }
      ]
   }
};

Instalar webpack-dev-server

> yarn add webpack-dev-server -D

adicionar  no arquivo webpack.config.js

...
 devServer: {
      contentBase: path.resolve(__dirname,'public'),
   },
...

E adionar no package.json

...
"scripts": {
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --mode development"
  },
...




