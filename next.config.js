module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
  webpack(config) {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js']) {
        entries['main.js'].unshift('./client/polyfills.js');
      }

      return entries;
    };
    return config;
  },
};