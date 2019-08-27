// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      "/images/home-slide (1).png",
      "/images/home-slide (2).jpg",
      "/images/home-slide (3).png",
      "/images/home-slide (4).jpg"
    ],
    movieHome: [],
    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    show: true,
    proFile: [
      {
          intro:"我叫胡图图，今年三岁,我的爸爸叫胡英俊，我的妈妈叫张小丽，我家住在翻斗花园二号楼--零零-室妈妈做的炸小肉丸最好吃，我的猫咪叫小怪,他是一只会说话的猫咪呦,小怪和图图一样是个男孩子，图图最喜欢的好朋友是小美，图图的耳朵很大很神奇，你们看动耳神功,请问有没有烤肉串呢，那炸臭豆腐呢，那随便来一个烤红薯好了，有木有冰淇淋巧克力彩虹糖，旺旺饼干花生米，生肉王豆奶酸奶橘子汁胡萝上汁苹果汁。",
          src:'/images/ico.jpg',
          main:'怕什么真理无穷，进一步有一步的欢喜',
          name:'云樱🌸里的Eeyore屹耳',
          blog:'个人博客：http://www.blogmyy404.com',
          text:'不知道说什么，打套拳吧。😄'
      }
    ],
    activeNames: ['1']
    
  },
  // 
   getUserInfo(event) {
    console.log(event.detail);
  },

  onClose() {
    this.setData({ close: false });
  },
  // 手风琴
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  getMovieHome: function () {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'movieHome',
      data: {
        start: this.data.movieHome.length,
        count: 6
      }
    }).then(res => {
      // console.log(res);
      this.setData({
        movieHome: this.data.movieHome.concat(JSON.parse(res.result).subjects)
      });
      wx.hideLoading();
    }).catch(err => {
      console.error(err);
      wx.hideLoading();
    });
  },
  gotohomeDetail: function (event) {
    wx.navigateTo({
      url: `../homedetail/homedetail?movieid=${event.target.dataset.movieid}`,
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMovieHome();
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
    this.getMovieHome();
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    wx.updateShareMenu({
      withShareTicket: true,
      success() { }
    })

  },
  
})