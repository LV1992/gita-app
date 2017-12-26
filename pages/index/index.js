//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,//导航点
    autoplay: true,//自动播放
    interval: 1500,//循环毫秒
    duration: 800, //切换动画延时间
    listView: [{ title: '1', url: '1' }, { title: '2', url: '2' }, { title: '3', url: '3' }, { title: '1', url: '1' }, { title: '2', url: '2' }, { title: '3', url: '3' }, { title: '1', url: '1' }, { title: '2', url: '2' }, { title: '3', url: '3' }, { title: '1', url: '1' }, { title: '2', url: '2' }, { title: '3', url: '3' }]
  },
  onLoad: function () {
    if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          //将用户信息存储到本地
          var userInfo = wx.getStorageSync('userInfo') || res.userInfo
          wx.setStorageSync('userInfo', userInfo)
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
  },
  onShow: function () {
    
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '测试分享',
      path: 'pages/logs/logs',
      imageUrl: '',
      success: function () {
        // 分享成功
        //从相册选择照片
        // wx.chooseImage({count:9})
      },
      fail: function () {
        // 分享失败
      },
      complete: function () {
        // 成功失败都会回调
      }
    }
  }
})
