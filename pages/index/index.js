// index.js
// 获取应用实例
var getid = require('../../util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['湖南省','湘潭市','湘乡市'],
    locationid:"",
    now:{
      temp:0,
      text:"未知",
      icon:"999",
      humidity:0,
      pressure:0,
      vis:0,
      windDir:0,
      windSpeed:0,
      windScale:0
    }
  },

  regionChange:function(e){
    this.setData({region:e.detail.value});
    this.getWeather();
  },
  getWeather:function(){
    var that=this;
    console.log(that.data.region[1]);
    that.setData({
      locationid:getid.getLocationID(that.data.region[1])
    });
    console.log(that.data.locationid);
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now',
      data:{
        location:that.data.locationid,//that.data.region[1],
        key:'4086eb0abd5d49379b95791f34a5b5c4'
      },
      success:function(res){
        console.log(res.data);
        that.setData({
          now:res.data.now
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
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