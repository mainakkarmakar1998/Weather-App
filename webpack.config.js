const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
mode: 'development',
  module: {
    rules: [{
      test: /\.(jsx|js)$/,
   exclude: /node_modules/,
   use: {
     loader: "babel-loader"
   }
 },

  {
  
   
    test: /\.s?css$/,
    use: ['style-loader', 'css-loader', 'sass-loader']          
  
  }
]},
devServer: {
  historyApiFallback: true,
},
output: {
 
 
  publicPath: '/'
},
 plugins: [htmlPlugin]
};