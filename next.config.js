module.exports = {
  // Note: https://nextjs.org/docs/advanced-features/custom-server#disabling-file-system-routing
  useFileSystemPublicRoutes: false,
  // Note: https://nextjs.org/docs/api-reference/next.config.js/exportPathMap#adding-a-trailing-slash
  trailingSlash: true,

  // Note: https://nextjs.org/docs/api-reference/next.config.js/exportPathMap
  exportPathMap: async () => ({
    '/': { page: '/' },
  }),
};
