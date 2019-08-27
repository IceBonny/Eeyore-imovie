// pages/movieCome/movieCome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieCome: []

  },

  getMovieCome: function () {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'movieCome',
      data: {
        start: this.data.movieCome.length,
        count: 10
      }
    }).then(res => {
      // console.log(res);
      this.setData({
        movieCome: this.data.movieCome.concat(JSON.parse(res.result).subjects)
      });
      wx.hideLoading();
    }).catch(err => {
      console.error(err);
      wx.hideLoading();
    });
  },
  gotocomeDetail: function (event) {
    wx.navigateTo({
      url: `../comedetail/comedetail?movieid=${event.target.dataset.movieid}`,
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMovieCome();
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
    this.getMovieCome();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})