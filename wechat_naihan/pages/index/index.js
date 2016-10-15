//index.js
//获取应用实例
var app = getApp()

var param = {
	data:{
		all:[]
	},
	onLoad: function(e) {
		var that = this;
		wx.request({
			//必需
			url: 'http://ic.snssdk.com/2/essay/zone/category/data/?category_id=1&level=6&count=30',
			method: "GET",
			header: {
				'Content-Type': 'application/json'
			},
			success: function(res) {
				console.log(res);
				that.setData({
					all: res.data.data.data
				})
			},
			fail: function(res) {

			},
			complete: function(res) {

			}
		})
	}
}

Page(param)