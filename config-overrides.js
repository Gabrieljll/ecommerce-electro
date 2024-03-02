const webpack = require('webpack');

module.exports = function override(config, env) {
  // Agrega la siguiente configuración para resolver problemas con 'crypto', 'stream' y 'buffer'
  config.resolve.fallback = {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    buffer: require.resolve('buffer'),
    process: require.resolve('process/browser'),
  };

  // También podrías agregar el siguiente plugin si es necesario
  config.plugins.push(new webpack.ProvidePlugin({ process: 'process/browser' }));

  return config;
};