// pages/user/user.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    motto: '欢迎',
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //点击头像事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.userInfo = wx.getStorageSync('userInfo1')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    self = this;
    //监听
    var t = setInterval(function () {
      if (self.data.userInfo) {
        clearInterval(t);
      } else {
        // 本地没有数据继续调用登录
        wx.getUserInfo({
          success: res => {
            self.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
            //将用户信息存储到本地
            var userInfo = wx.getStorageSync('userInfo') || res.userInfo
            wx.setStorageSync('userInfo', userInfo)
          }
        })
      }
    }, 100);
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
    return {
      title : '测试分享',
      path: 'pages/logs/logs',
      imageUrl : '',
      success : function(){
        // 分享成功
        //从相册选择照片
        // wx.chooseImage({count:9})
      },
      fail : function(){
        // 分享失败
      },
      complete : function(){
        // 成功失败都会回调
      }
    } 
  }
})