const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const loaderUtils = require('loader-utils');
const path = require('path');
const { flow } = require('lodash');
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const withPlugins = flow([withSass, withCSS]);

module.exports = withPlugins({
  cssModules: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]--[hash:base64:5]',
    localsConvention: 'camelCase',
    getLocalIdent: (context, localIdentName, localName, options) => {
      const { resourcePath } = context;
      if (
        resourcePath.includes('.global.scss') ||
        resourcePath.endsWith('.css')
      ) {
        return localName;
      }

      const fileNameOrFolder = resourcePath.match(/index\.module\.scss$/)
        ? '[folder]'
        : '[name]';

      const hash = loaderUtils.getHashDigest(
        path.posix.relative(context.rootContext, resourcePath) + localName,
        'md5',
        'base64',
        5
      );

      return loaderUtils.interpolateName(
        context,
        `${fileNameOrFolder}_${localName}__${hash}`,
        options
      );
    }
  }
});
