import * as path from 'path'
import * as webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
  entry: {
    index: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/main.js'
  },

  // 配置模块加载器
  module: {
    rules: [
      {
        // 处理TypeScript 和 tsx
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        // 处理 css 资源，loader执行顺序是从右往左
        use: ['style-loader', 'css-loader']
      },
      {
        // 处理 less 样式资源
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // 处理 sass 样式资源
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // 处理图片资源
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: 'asset'
      }
    ],
    generator: {
      asset: {
        publicPath: 'assets/'
      },
      'asset/inline': {
        // asset/内联模块的 generator 选项
      },
      'asset/resource': {
        // asset/资源模块的 generator 选项

        // 自定义 asset/resource 模块的 publicPath，自 webpack 5.28.0 起可用
        publicPath: 'assets/',

        // 将静态资源输出到相对于 'output.path' 的指定文件夹中，webpack 5.67.0 后可用
        outputPath: 'cdn-assets/'
      }
    }
  },

  // 配置模块解析规则
  resolve: {
    // 解析模块的后缀名
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      // 路径名映射
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],

  // 构建时控制台输出控制 只在发生错误或新的编译开始时输出
  stats: 'minimal',

  watch: true,

  mode: 'production'
}

export default config
