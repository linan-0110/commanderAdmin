webpackJsonp([13],{p4fn:function(t,a){},"q/ct":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("ryJa"),i=e.n(s),r=e("4YfN"),o=e.n(r),n=e("ghfd");i()().format();var c={name:"fullStatus",data:function(){return{trigger_bar:!1,currentDate:new Date,showDatepicker:!1,dateTime:i()().format("YYYY年MM月DD日"),totalIncome:0,generalizeMoney:0,orderMoney:0,orderData:{},dateTimeStr:i()().format("YYYY-MM-DD")}},created:function(){this.getTotalIncome({starttime:i()().format("YYYY-MM-DD")+" 00:00:00",endtime:i()().format("YYYY-MM-DD")+" 23:59:59"}),this.getOrderData({starttime:i()().format("YYYY-MM-DD")+" 00:00:00",endtime:i()().format("YYYY-MM-DD")+" 23:59:59"})},methods:{getTotalIncome:function(t){var a,e=this;t.s=t.starttime,t.e=t.endtime,delete t.starttime,delete t.endtime,(a=t,Object(n.a)("post",o()({act:"f",cmd:"commission"},a,{logtype:1,pageindex:1,pagesize:1e4}))).then(function(t){0===t.data.status?(e.totalIncome=0,e.orderMoney=0,e.generalizeMoney=0,t.data.data.list.forEach(function(t){e.totalIncome+=t.amount,1==t.otype&&(e.orderMoney+=t.amount),4==t.otype&&(e.generalizeMoney+=t.amount)})):console.error("网络错误:"+t.data.msg)})},getOrderData:function(t){var a,e=this;(a=t,Object(n.a)("post",o()({act:"report",cmd:"timesale"},a,{status:10}))).then(function(t){0===t.data.status?e.orderData=t.data.data:console.error("网络错误:"+t.data.msg)})},moment:i.a,showPopup:function(){this.showDatepicker=!0},formatter:function(t,a){return"year"===t?a+"年":"month"===t?a+"月":"day"===t?a+"日":a},clickOk:function(t){this.dateTime=i()(t).format("YYYY年MM月DD日"),this.dateTimeStr=i()(t).format("YYYY-MM-DD"),this.trigger_bar?(this.getTotalIncome({starttime:i()(t).startOf("month").format("YYYY-MM-DD")+" 00:00:00",endtime:i()(t).endOf("month").format("YYYY-MM-DD")+" 23:59:59"}),this.getOrderData({starttime:i()(t).startOf("month").format("YYYY-MM-DD")+" 00:00:00",endtime:i()(t).endOf("month").format("YYYY-MM-DD")+" 23:59:59"})):(this.getTotalIncome({starttime:i()(t).format("YYYY-MM-DD")+" 00:00:00",endtime:i()(t).format("YYYY-MM-DD")+" 23:59:59"}),this.getOrderData({starttime:i()(t).format("YYYY-MM-DD")+" 00:00:00",endtime:i()(t).format("YYYY-MM-DD")+" 23:59:59"})),this.showDatepicker=!1},clickCancel:function(){this.showDatepicker=!1},dayDataStatus:function(){this.getTotalIncome({starttime:i()(this.dateTimeStr).format("YYYY-MM-DD")+" 00:00:00",endtime:i()(this.dateTimeStr).format("YYYY-MM-DD")+" 23:59:59"}),this.getOrderData({starttime:i()(this.dateTimeStr).format("YYYY-MM-DD")+" 00:00:00",endtime:i()(this.dateTimeStr).format("YYYY-MM-DD")+" 23:59:59"}),this.trigger_bar=!1},monthDataStatus:function(){this.getTotalIncome({starttime:i()(this.dateTimeStr).startOf("month").format("YYYY-MM-DD")+" 00:00:00",endtime:i()(this.dateTimeStr).endOf("month").format("YYYY-MM-DD")+" 23:59:59"}),this.getOrderData({starttime:i()(this.dateTimeStr).startOf("month").format("YYYY-MM-DD")+" 00:00:00",endtime:i()(this.dateTimeStr).endOf("month").format("YYYY-MM-DD")+" 23:59:59"}),this.trigger_bar=!0},linkBack:function(){this.$router.back()}}},m={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"fullStatus"},[s("van-nav-bar",{attrs:{fixed:"",title:"整体状况","left-text":"返回","left-arrow":""},on:{"click-left":t.linkBack}}),t._v(" "),s("nav",{staticClass:"nav"},[s("a",{staticClass:"dayDataStatus",class:{trigger_text:!t.trigger_bar},on:{click:t.dayDataStatus}},[t._v("日数据概况")]),t._v(" "),s("a",{staticClass:"monthDataStatus",class:{trigger_text:t.trigger_bar},on:{click:t.monthDataStatus}},[t._v("月数据概况")]),t._v(" "),s("div",{staticClass:"bottom_bar",class:{trigger_bar:t.trigger_bar}})]),t._v(" "),s("section",{staticClass:"main_content"},[s("article",{staticClass:"container_head"},[s("div",{staticClass:"datetime_picker_click",on:{click:t.showPopup}},[t._v("\n                "+t._s(t.dateTime)+"\n                "),s("img",{staticClass:"icon_arrow_bottom_black",attrs:{src:e("7yYe")}})]),t._v(" "),s("span",[t._v("截止今日"+t._s(t.moment().format("HH.mm"))+"分")])]),t._v(" "),s("article",{staticClass:"total_income"},[s("header",[t._v("累计收入（元）")]),t._v(" "),s("section",{staticClass:"value_block"},[t._v(t._s(t.totalIncome.toFixed(2)))]),t._v(" "),s("footer",{staticClass:"grid"},[s("div",{staticClass:"item"},[s("p",{staticClass:"title"},[t._v("累计收入")]),t._v(" "),s("p",{staticClass:"num"},[t._v(t._s(t.totalIncome.toFixed(2)))])]),t._v(" "),s("div",{staticClass:"item"},[s("p",{staticClass:"title"},[t._v("推广收益")]),t._v(" "),s("p",{staticClass:"num"},[t._v(t._s(t.generalizeMoney.toFixed(2)))])]),t._v(" "),s("div",{staticClass:"item"},[s("p",{staticClass:"title"},[t._v("订单佣金")]),t._v(" "),s("p",{staticClass:"num"},[t._v(t._s(t.orderMoney.toFixed(2)))])])])]),t._v(" "),s("article",{staticClass:"predict_order_data"},[s("header",[t._v("预估订单数据")]),t._v(" "),s("section",{staticClass:"container"},[s("div",{staticClass:"block"},[s("p",{staticClass:"title"},[t._v("累计订单（笔）")]),t._v(" "),s("p",{staticClass:"num"},[t._v(t._s(t.orderData.ordercount))])]),t._v(" "),s("div",{staticClass:"block"},[s("p",{staticClass:"title"},[t._v("累计销售额（元）")]),t._v(" "),s("p",{staticClass:"num"},[t._v(t._s(t.orderData.ordersum))])])])])]),t._v(" "),s("van-popup",{staticClass:"datetime_picker",model:{value:t.showDatepicker,callback:function(a){t.showDatepicker=a},expression:"showDatepicker"}},[s("van-datetime-picker",{attrs:{type:"date",formatter:t.formatter},on:{confirm:t.clickOk,cancel:t.clickCancel},model:{value:t.currentDate,callback:function(a){t.currentDate=a},expression:"currentDate"}})],1)],1)},staticRenderFns:[]};var l=e("C7Lr")(c,m,!1,function(t){e("p4fn")},"data-v-cda01b64",null);a.default=l.exports}});
//# sourceMappingURL=13.236a37f7afc955fb36b3.js.map