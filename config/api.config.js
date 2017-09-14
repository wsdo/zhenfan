const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  baseUrl: isProdMode ? 'http://api.zhenfan.shudong.wang/api/' : 'api/'
}
