module.exports = {
  babel: {
    presets: ['@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
      ['@babel/plugin-proposal-object-rest-spread'],
      ['@babel/plugin-transform-spread'],
      ['@babel/plugin-proposal-export-default-from'],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      [
        'module-resolver',
        {
          alias: {
            '~': './src',
            '^@images/(.*)': './src/Assets/Images/\\1',
            '^@components(.*)': './src/Components/\\1',
            '@interfaces': './src/Interfaces',
            '@data': './src/Assets/Data/data.ts',
          },
        },
      ],
    ],
    loaderOptions: (babelLoaderOptions) => babelLoaderOptions,
  },
  jest: {
    configure: { coverageProvider: 'v8' },
  },
  webpack: {
    loaders: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
}
