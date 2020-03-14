module.exports = {
  devServer: {
    port: 8888,
    open: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/styles/styles.scss"'
      },
      scss: {
        prependData: '@import "~@/assets/styles/styles.scss";'
      }
    }
  }
}
