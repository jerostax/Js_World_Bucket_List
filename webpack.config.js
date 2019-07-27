// path nous permet de transformer les chemins relatifs en chemin absolus
const path = require('path');

module.exports = {
  watch: true,
  // on dit à webpack dit quel est le point d'entrée
  entry: './src/index.js',
  // on lui dit la ou il doit envoyer son travail et le nom du fichier
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  // On veut qu'il nous serve le dossier dist pour notre server local
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true
  }
};
