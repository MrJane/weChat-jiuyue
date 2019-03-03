// pages/classic/classic.js
// import HTTP from '../../utils/HTTP.js';
// let http = new HTTP();
import ClassicModel from '../../models/classic.js';
import LikeModel from '../../models/like.js';
let fetch = new ClassicModel();
let likeModel = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: '',
    latest: true,
    first: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.request({
    //   url: 'http://bl.7yue.pro/v1/classic/latest?appkey=RdshydjBvcYZhMZC'
    // })
    // wx.request({
    //   url: 'http://bl.7yue.pro/v1/classic/latest',
    //   header: {
    //     appkey: 'RdshydjBvcYZhMZC'
    //   },
    //   // success: function(res) {
    //   //   console.log(res);
    //   // }
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
    fetch.getLatest((res) => {
      this.setData({
        classic: res
      })
      console.log(res)
    });

  },
  onLike: function(e) {
    let flag = e.detail.behavior;
    likeModel.like(flag, this.data.likeData.id, this.data.likeData.type)
    console.log(flag)
  },
  onNext: function() {

  },
  onPrevious: function() {
    let index  = this.data.classic.index
    fetch.getPrevious(index, (res) => {
      this.setData({
        classic: res
      })
      console.log(res)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})