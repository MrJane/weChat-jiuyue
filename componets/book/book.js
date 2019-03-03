// componets/book/book.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转详情页可以在组件book里跳转和book页面里跳转
    onTap() {
      const bid = this.properties.book.id;
      //以下是组件book直接跳转
      
      wx.navigateTo({
        url: `/pages/detail/detail?bid=${bid}`
      })
      //发生trigger event 到页面book跳转

    }
  }
})
