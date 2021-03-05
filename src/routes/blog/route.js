module.exports = {
  // 'data' and 'all' are populated by /plugins/elder-plugin/markdown/index.js
  // `elder.config.js` contains the configured plugin
  // It tells the simple markdown plugin which route to control
  //
  // 'elderjs-plugin-markdown': {
  //   routes: ['blog'],
  // },

  data: {},
  all: () => [],
  permalink: ({ request }) => `/${request.slug}/`,
};
