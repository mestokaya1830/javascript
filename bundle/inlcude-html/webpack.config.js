import path from 'path'
const __dirname = path.resolve()
import HtmlWebpack from 'html-webpack-plugin'

export default {
  entry: './src/app.js',
  output:{
    filename:'bundle.js',
    path: path.resolve(__dirname + '/dist'),
  },
  plugins:[
    new HtmlWebpack({
      filename:'index.html',
      template: './src/index.html',
    })
  ]
  
}