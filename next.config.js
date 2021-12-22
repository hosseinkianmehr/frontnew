const path = require('path')

module.exports = {
  optimizeFonts: false,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
