// componets/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    firsst: Boolean,
    latest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftSrc: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function() {
      if (!this.properties.latest) {
        this.triggerEvent('next', {}, {})
      }
      console.log('left')
    },
    onRight: function() {
      if(!this.properties.firsst){
        this.triggerEvent('previous', {}, {})
      }
      console.log('right')
    }
  }
})