// ↓ 'path' é uma promessa de diretório
const path = require("path");
// ↓ exporta uma configuração Node.js
module.exports = {
  entry: "./js/script.js",
  output: {
    // ↓ arquivo de saída é direcionado através do 'path'.resolve(nomedodiretórioatual, pontobarra=raiz)
    path: path.resolve(__dirname, "./"),
    filename: "main.js/main.js",
  },
  // ↓ Indica que vai utilizar determinado modulo
  module: {
    // ↓ Regra em uma lista array contendo 1 ou mais objetos
    rules: [
      {
        // ↓ A regra se inicia com 'test:' que determina o arquivo que será utilizado
        // ↓ seleciona os que terminem em .js
        test: /\.js$/,
        // ↓ Não verifica em node_modules
        exclude: /node_modules/,
        // ↓ Determina o que será usado
        use: {
          // ↓ Carrega o babel
          loader: "babel-loader",
          options: {
            // ↓ Adiciona as opções definidas no package.json
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
