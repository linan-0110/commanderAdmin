webpackJsonp([4],{"3cXf":function(t,a,s){t.exports={default:s("pELq"),__esModule:!0}},"4JS3":function(t,a,s){"use strict";s.d(a,"a",function(){return o}),s.d(a,"c",function(){return c}),s.d(a,"b",function(){return r});var e=s("4YfN"),n=s.n(e),i=s("ghfd"),o=function(t){return Object(i.a)("post",n()({act:"order",cmd:"mystock"},t,{status:0,issub:1}))},c=function(t){return Object(i.a)("post",{act:"order",cmd:"stockinfo",id:t})},r=function(t){return Object(i.a)("post",n()({act:"order",cmd:"receipt"},t))}},BOWk:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASZJREFUeNqEUktKxEAQ7U8lTHCE8TpuRHAv7lx4A7dxI55C3LlzoQieYE4jeABlnIVJ+uN7Ug2hB7Wgqa6q9yr1qmP7vjdt256klC6ttWKMyWbXLE5E/UG892c550cEd/CDFmtjE0H9iYRrXpC4Mn8YMHQjWRtefr5rrfnHEmeOIPmmaQx07OG4HQHWZhHZjuPoRBOfAJKwRriohFs0DDHGQ+A+RJNLJOhPKa4mwBLq3NKqELZaeVbCfJ0NG6B2BP8uuoElZuRI57jPlSfETokTzqpo2CjxBa7TkQj6cs4dczHUCPPl8/shBBIvdITyWLnruoztGNZBziQ4FUbQW73SYRgKmGEk4QCjpN9eapqm+YMGQXALwj2CVzas/yUFZ93ezbcAAwDxTI6nAhSIDQAAAABJRU5ErkJggg=="},BmGb:function(t,a){},"MN+K":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("3cXf"),n=s.n(e),i=(s("ybsy"),s("qAUv")),o=s("4JS3"),c={name:"reqStockInfo",data:function(){return{stockInfo:[],id:-1,status:-1,productTotalNum:0}},created:function(){this.id=this.$route.query.id,this.status=this.$route.query.status,this.getStockInfo(this.id)},methods:{getStockInfo:function(t){var a=this;Object(o.c)(t).then(function(t){0===t.data.status?(t.data.data.list.forEach(function(t){t.mayGet=t.total-t.Actual,t.mayGetMax=t.total-t.Actual,a.productTotalNum+=t.total-t.Actual}),a.stockInfo=t.data.data.list):console.error("网络错误:"+t.data.msg)})},sunmit_info:function(){var t=this,a=i.a.loading({message:"加载中...",forbidClick:!0,duration:0}),s=[];this.stockInfo.forEach(function(t){s.push({id:t.id,value:t.total})});var e={id:this.id,list:n()(s)};Object(o.b)(e).then(function(s){0===s.data.status?(a.clear(),i.a.success("确认收货成功"),t.$router.back()):(i.a.fail(s.data.msg),console.error("网络错误:"+s.data.msg))})},linkBack:function(){this.$router.back()}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"confirmDelivery"},[e("van-nav-bar",{attrs:{fixed:"",title:"以确认送达","left-text":"返回","left-arrow":""},on:{"click-left":t.linkBack}}),t._v(" "),e("header",{staticClass:"header"},[t._v("配送日期： 2019.11.9")]),t._v(" "),e("aside",{staticClass:"aside"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:s("BOWk")}}),t._v("\n            "+t._s(t.stockInfo.length+"笔订单 - "+t.productTotalNum+"件商品")+" \n        ")])]),t._v(" "),e("ul",{staticClass:"products"},t._l(t.stockInfo,function(a){return e("li",{key:a.id,staticClass:"product_item"},[e("section",{staticClass:"container"},[e("p",{staticClass:"order_describe"},[t._v("品名："+t._s(a.ProductName))]),t._v(" "),e("p",{staticClass:"order_number"},[t._v("数量: "+t._s(a.total+a.Unit))]),t._v(" "),e("p",[t._v("单价: "+t._s(a.price)+"元")]),t._v(" "),e("p",[t._v("总价: "+t._s(a.amount)+"元")])]),t._v(" "),e("van-stepper",{staticClass:"stepper",attrs:{disabled:15!=t.status,integer:"",min:"0",max:a.mayGetMax},model:{value:a.mayGet,callback:function(s){t.$set(a,"mayGet",s)},expression:"item.mayGet"}})],1)}),0),t._v(" "),e("footer",{staticClass:"footer"},[e("p",[t._v("可以再次修改缺货信息，进行再次提交")]),t._v(" "),15==t.status?e("van-button",{staticClass:"sunmit_info",attrs:{size:"small"},on:{click:t.sunmit_info}},[t._v("提交收货信息")]):t._e()],1)],1)},staticRenderFns:[]};var u=s("C7Lr")(c,r,!1,function(t){s("BmGb")},"data-v-f66b65ae",null);a.default=u.exports},pELq:function(t,a,s){var e=s("xhIC"),n=e.JSON||(e.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}}});
//# sourceMappingURL=4.85d1b035fdd77184c949.js.map