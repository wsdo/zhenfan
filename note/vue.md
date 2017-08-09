build/webpack.base.conf.js

```
  @ 是 src的缩写

  resolve: {
    解决扩展名字
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
```