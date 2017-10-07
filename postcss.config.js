module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['Chrome >= 49', 'Firefox >= 40', 'IE >= 9', 'iOS >= 7', 'Safari >= 7'],
      remove: false
    })
  ]
};
