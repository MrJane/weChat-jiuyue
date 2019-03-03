// componets/classic/epsoide/epsoide.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer: function(newVal, oldVal, changePath) {
        // console.log(newVal)
        // console.log(oldVal)
        // console.log(changePath)
        let val = newVal < 10 ? '0' + newVal : newVal
        //不能再observer函数里改变本身属性的值，会导致内存泄漏
        //会导致无限递归 内存泄漏，可以在data再建个变量
        // this.setData({
        //   index:val
        // })
        this.setData({
          _index: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    month: String,
    year: Number,
    _index: ''
  },
  ready: function() {
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    this.setData({
      month:this.data.months[month],
      year
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})