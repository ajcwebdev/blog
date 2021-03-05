const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  // Returns an array of all 'request' objects of a route.
  // Since this is the homepage, there is only one.
  all: () => [{ slug: '/' }],

  // Takes a 'request' object and returns a relative permalink,
  // in this case "/".
  permalink: ({ request }) => request.slug,

  data: ({ data }) => {
    // Populates what data should be available in our Svelte template.
    // To list out Elder.js's hooks, populate that on the data object
    // so it can be looped through in our Svelte template.
    data.hookInterface = hookInterface;
    data.hookEntityDefinitions = hookEntityDefinitions;
    return data;
  },
};
