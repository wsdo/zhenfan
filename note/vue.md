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

如果在代码里
里面如果写字符串需要加单引号
:src="'/static/img/' + item.productImg"