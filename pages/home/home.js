// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,//导航点
    autoplay: true,//自动播放
    interval: 1500,//循环毫秒
    duration: 800, //切换动画延时间
    listView: [{ title: '1', url: '1' }, { title: '2', url: '2' }, { title: '3', url: '3' }, { title: '1', url: '1' }, { title: '2', url: '2' }, { title: '3', url: '3' },{ title: '1', url: '1' }, { title: '2', url: '2' }, { title: '3', url: '3' }, { title: '1', url: '1' }, { title: '2', url: '2' }, { title: '3', url: '3' }]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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