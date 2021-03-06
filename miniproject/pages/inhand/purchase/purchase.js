// pages/inhand/inhandlist/inhandlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screen_height:0,
    screen_width: 0,
    selectedState: "1",
    tabList: [
      {
        state:"1",
        state_str: '办理中',
        purchase_list:[
          {
            purchaseId: '01010',
            supplier:'三九制药',
            drugs: 
            [
              {
                genericName:'感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒',
                spec:'120g/包',
                price:3.5,
                count:3,
                icon:'',
                id:'123'
              },
              {
                genericName:'感冒灵颗粒',
                spec:'120g/包',
                price:3.5,
                count:3,
                icon:'',
                id:'124'
              },
            ],
            count: 3,
            amount:25.60
          },
          {
            purchaseId: '01010',
            supplier:'三九制药',
            drugs: 
            [
              {
                genericName:'感冒灵颗粒',
                spec:'100g/包',
                price:3.5,
                count:3,
                icon:'',
                id:'124'
              },
            ],
            count: 3,
            amount:25.60
          },
          {
            purchaseId: '01010',
            supplier:'三九制药',
            drugs: 
            [
              {
                genericName:'感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒',
                spec:'120g/包',
                price:3.5,
                count:3,
                icon:'',
                id:'123'
              },
              {
                genericName:'感冒灵颗粒',
                spec:'120g/包',
                price:3.5,
                count:3,
                icon:'',
                id:'124'
              },
              {
                genericName:'感冒灵颗粒',
                spec:'120g/包',
                price:3.5,
                count:3,
                icon:'',
                id:'124'
              },
            ],
            count: 3,
            amount:25.60
          },
        ]
      },
      {
        state:"2",
        state_str: '已通过',
        purchase_list:[
          {
            purchaseId: '01010',
            supplier:'三九制药',
            drugs: 
            [
              {
                genericName:'感冒灵颗粒',
                spec:'120g/包',
                price:3.5,
                count:3,
                icon:''
              },
              {
                genericName:'感冒灵颗粒',
                spec:'120g/包',
                price:3.5,
                count:3,
                icon:''
              },
            ],
            count: 3,
            amount:25.60
          },
        ]
      },
      {
        state:"3",
        state_str: '已驳回',
        purchase_list:[
          {
            purchaseId: '01010',
            supplier:'三九制药',
            drugs: 
            [
              {
                genericName:'感冒灵颗粒',
                spec:'120g/包',
                price:3.5,
                count:3,
                icon:''
              },
              {
                genericName:'感冒灵颗粒',
                spec:'120g/包',
                price:3.5,
                count:3,
                icon:''
              },
            ],
            count: 3,
            amount:25.60
          },
        ]
      },
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.setNavigationBarTitle({
      title: '采购对账',
    })
    wx.getSystemInfo({
      complete: (res) => {
        console.log(res.windowHeight)
        that.setData({
          screen_width:res.windowWidth,
          screen_height:res.windowHeight
        })
      },
    })
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

  },


/**
 * 切换状态
 * @param {*} envent 
 */
  changeState: function(envent) {
    // console.log(envent)
    let s = envent.currentTarget.dataset.state
    this.setData({
      selectedState: s
    })
  },

  /**
   * 请求列表
   */
  queryList: function() {

  }

})
