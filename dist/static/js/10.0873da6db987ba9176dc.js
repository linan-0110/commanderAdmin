webpackJsonp([10],{"21WQ":function(t,a){},"4JS3":function(t,a,e){"use strict";e.d(a,"a",function(){return r}),e.d(a,"c",function(){return o}),e.d(a,"b",function(){return c});var n=e("4YfN"),i=e.n(n),s=e("ghfd"),r=function(t){return Object(s.a)("post",i()({act:"order",cmd:"mystock"},t,{status:0,issub:1}))},o=function(t){return Object(s.a)("post",{act:"order",cmd:"stockinfo",id:t})},c=function(t){return Object(s.a)("post",i()({act:"order",cmd:"receipt"},t))}},jvh2:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNp0kjtIA0EQhvcuBgmKWBgk2NsoCj6CneCVNgFLwUqsLOzkzkJBOUF8FDaKilgFGzGNYHGVINYKqWwUrOKj8IFc4fmNzOoZyMDH7M7uPzs3c06SJMZaEAQtuBmYhm54hQpshmF4Y+85VoSgB7cLT1CGO2iFMRiHPYTbvyIEvayPYR7OQDJluRRrwgJuH66ILWfiOG5jcwhrBCqe5yVRFI2wX8H/7OGN9TmxJXzVZTEpL8Kp+bMm6ADXBkgoZW/AqgQX4ITgl/lviZK2SyhKxi54rjvMQDP08z1WeAsfUBPRp5aTthq0w4HupYo5qEoyV+cwmFZQqhwOwYAyTOwCn4ec4/t+n85llINH08AoU5q1BS8uF69ZHMEOBznT2Eogo1i3LZUMD9J2hMW6F/KwqF2e4pH39G8kzZiAWeiEe51VVv8SGb40yHwLMABsFHwJqQttWgAAAABJRU5ErkJggg=="},r86F:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("4JS3"),i={name:"orderExpress",data:function(){return{loading:!1,finished:!1,myStockParams:{pageindex:1,pagesize:7},myStockList:[],myStockTotal:0}},created:function(){this.getMyStock(this.myStockParams)},methods:{onLoad:function(){this.getMyStock(this.myStockParams)},getMyStock:function(t){var a=this;Object(n.a)(t).then(function(t){t.data.data.list.length<7&&(a.finished=!0),0===t.data.status?(a.myStockList.length<=0?(a.myStockList=t.data.data.list,a.myStockTotal=t.data.data.recordcount):t.data.data.list.forEach(function(t){a.myStockList.push(t)}),a.loading=!1):console.error("网络错误:"+t.data.msg)}),this.myStockParams.pageindex+=1},linkConfirmDelivery:function(t,a){this.$router.push({name:"home_orderExpress_confirmDelivery",query:{id:t,status:a}})},linkBack:function(){this.$router.back()}}},s={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"orderExpress"},[n("van-nav-bar",{attrs:{fixed:"",title:"订单配送","left-text":"返回","left-arrow":""},on:{"click-left":t.linkBack}}),t._v(" "),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.myStockList,function(a){return n("van-cell",{key:a.id,staticClass:"product_card",on:{click:function(e){return t.linkConfirmDelivery(a.id,a.status)}}},[n("header",{staticClass:"top_header"},[n("div",[n("img",{staticClass:"icon_time",attrs:{src:e("jvh2")}}),t._v("\n                    "+t._s(a.creattime)+" 下单\n                ")]),t._v(" "),12==a.status?n("van-tag",{attrs:{round:"",type:"warning"}},[t._v("备货中")]):t._e(),t._v(" "),13==a.status?n("van-tag",{attrs:{round:"",type:"danger"}},[t._v("待发货")]):t._e(),t._v(" "),15==a.status?n("van-tag",{attrs:{round:"",type:"primary"}},[t._v("已发货")]):t._e(),t._v(" "),20==a.status?n("van-tag",{attrs:{round:""}},[t._v("已完成")]):t._e()],1),t._v(" "),n("article",{staticClass:"lable"},[n("div",{staticClass:"id"},[t._v(t._s(a.id))]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(a.name))])])])}),1)],1)},staticRenderFns:[]};var r=e("C7Lr")(i,s,!1,function(t){e("21WQ")},"data-v-3d415200",null);a.default=r.exports}});
//# sourceMappingURL=10.0873da6db987ba9176dc.js.map