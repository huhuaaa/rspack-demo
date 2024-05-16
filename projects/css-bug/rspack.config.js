const { CssExtractRspackPlugin } = require('@rspack/core');
const path = require('path');

module.exports = {
  deveServer: {

  },
  mode: 'development',
  devtool: false,
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  plugins: [
    new CssExtractRspackPlugin({

    }),
  ],
  module: {
    rules: [
      // swc代替babel构建，支持jsx/tsx
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        loader: 'builtin:swc-loader',
        options: {
          sourceMap: true,
          // 浏览器兼容性
          env: {
            targets: 'chrome > 80',
          },
          // js/ts编译配置
          jsc: {
            parser: {
              // 开启ts编译
              syntax: 'typescript',
              // 开启tsx编译
              tsx: true,
              // 开启@装饰器编译
              decorators: true,
              // 动态import
              dynamicImport: false,
            },
            transform: {
              // react运行环境配置
              react: {
                // dev模式打开development
                development: true,
                // dev模式打开热更新，qiankun子应用有bug先关闭
                refresh: true,
              },
              // stage 1 的旧版本class decorators
              legacyDecorator: true,
              // 支持 ts emitDecoratorMetadata
              decoratorMetadata: true,
            },
            externalHelpers: true,
          },
          rspackExperiments: {
            // babel-plugin-import的配置
            import: [{
              libraryName: 'antd',
              libraryDirectory: 'es',
              style: true,
            }],
          },
        },
      },
      {
        test: /\.css/,
        use: [
          CssExtractRspackPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false,
              },
            },
          }
        ]
      },
      {
        test: /\.less/,
        use: [
          CssExtractRspackPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false,
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {

                },
                javascriptEnabled: true,
              },
            }
          }
        ],
      },
    ]
  },
  experiments: {
    // 内置css编译
    css: false,
  },
}