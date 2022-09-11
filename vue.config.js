module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/TEST_TASK/' : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
