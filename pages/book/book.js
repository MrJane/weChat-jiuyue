// pages/book/book.js
import BookModel from '../../models/book';
const fetch = new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch.getHotList((res) => {
      this.setData({
        books:res
      })
      console.log(res);
    })
    //   const promise = new Promise((resolve, reject) => {
    //     wx.getSystemInfo({
    //       success: (res) => {
    //         resolve(res)
    //       },
    //       fail: (err) => {
    //         reject(err)
    //       }
    //     })
    //   })
    //  promise.then((res)=>{
    //    console.log(res)
    //  },(err)=>{
    //    console.log(err)
    //  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})