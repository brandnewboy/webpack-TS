import * as path from 'path'
import * as webpack from 'webpack'

const env = process.env.NODE_ENV as 'development' | 'production'

const config: webpack.Configuration = {
  entry: {
    index: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    // 解析模块的后缀名
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [],

  mode: env
}

export default config
