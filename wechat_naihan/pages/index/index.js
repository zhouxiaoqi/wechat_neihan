//index.js
//获取应用实例
var app = getApp();
var network_util = require('../../utils/network_util.js');
var json_util = require('../../utils/json_util.js');


var param = {
	data:{
		allJoke:[],
		hidden:false,
		hasRefresh:false,
		page: 1,
		pageSize:10,
		hasMore:true
	},

	onLoad: function(e) {
		var that = this;
		wx.request({
			//必需
			url: 'http://ic.snssdk.com/2/essay/zone/category/data/?category_id=1&level=6&count=12',
			method: "GET",
			header: {
				'Content-Type': 'application/json'
			},
			success: function(res) {
				//console.log(res);
				that.setData({
					allJoke: res.data.data.data,
					hidden:true
				})
			},
			fail: function(res) {

			},
			complete: function(res) {

			}
		})
	},

	//刷新页面
	refresh: function(e){
		var that = this;
		this.setData({
			hasRefresh:true
		});
		var url = 'http://ic.snssdk.com/2/essay/zone/category/data/?category_id=1&level=6&count=12';
		network_util._get(url,function(res){
			that.setData({
				allJoke:res.data.data.data,
				hasRefresh:false,
				paeg:1
			})
		});
	},

	// 加载更多
	loadmore: function(e){
		var that = this;
		this.setData({
			hasRefresh:true
		});
		if(!this.data.hasMore)
			return
		var url = 'http://ic.snssdk.com/2/essay/zone/category/data/?category_id=1&level=6&count=12'+(++that.data.page+10)+'';
		network_util._get(url,function(res){
			that.setData({
				allJoke:res.data.data.data,
				hasRefresh:false,
			})
		});
	}
}

Page(param)