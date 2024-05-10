const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
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
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].[contenthash:8].css`,
      chunkFilename: `[name].[contenthash:8].chunk.css`,
      ignoreOrder: true,
    }),
  ],
  module: {
    rules: [
      // swc代替babel构建，支持jsx/tsx
      {
        test: /\.(j|t)s(x)?$/,
        exclude: ["/node_modules/"],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }],
                [
                  "@babel/preset-react",
                  {
                    "runtime": "automatic"
                  }
                ],
                "@babel/preset-typescript"
              ],
              plugins: [
                [
                  'babel-plugin-import',
                  {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                  }
                ]
              ],
            }
          },
        ]
      },
      {
        test: /\.css(\?.*)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {

            },
          },
        ]
      },
      {
        test: /\.less(\?.*)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {

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
  }
}