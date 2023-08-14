import path from 'path'
const __dirname = path.resolve()
import HtmlWebpack from 'html-webpack-plugin'

export default {
  entry: './src/app.js',
  output:{
    filename:'bundle.js',
    path: path.resolve(__dirname + '/dist'),
    // assetModuleFilename: '[name][ext]'
  },
  plugins:[
    new HtmlWebpack({
      filename:'index.html',
      template: path.resolve(__dirname, './src/index.html')
    })
  ],
  module:{
    rules:[
      //for css
      {
        exclude: /node_modules/,
        test:/\.css$/i,
        use:['style-loader', 'css-loader']
      },
      //for babel
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      //for images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  devtool:'source-map'
  
}