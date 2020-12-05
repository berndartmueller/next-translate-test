const { locales, defaultLocale } = require('./i18n.json')

module.exports = {
  i18n: {
    locales,
    defaultLocale,
    localeDetection: false,
  },

  experimental: {
    modern: true,
    polyfillsOptimization: true,
  },

  async rewrites() {
    const rewrites = [];

    rewrites.push({
      source: `/test`,
      destination: `/`,
    });

    return rewrites;
  },
}
