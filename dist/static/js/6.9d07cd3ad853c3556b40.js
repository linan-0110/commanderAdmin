webpackJsonp([6],{"5Cg5":function(t,a,e){"use strict";e("pzFj");var n=e("amkq"),r=e("RArt"),i={name:"AwaitInCargo",data:function(){return{finished:!1,orderData:[],getOrderDataParmas:{pageindex:1,pagesize:5,status:15},listLoading:!1}},methods:{onLoad:function(){this.getOrderData(this.getOrderDataParmas)},getOrderData:function(t){var a=this;Object(r.b)(t).then(function(t){t.data.data.list.length<5&&(a.finished=!0),0===t.data.status?(a.orderData.length<=0?a.orderData=t.data.data.list:t.data.data.list.forEach(function(t){a.orderData.push(t)}),a.listLoading=!1):console.error("网络错误:"+t.data.msg)}),this.getOrderDataParmas.pageindex+=1},onSearch:function(){this.orderData=[],this.getOrderDataParmas.pageindex=1,this.getOrderData(this.getOrderDataParmas)},confirmGetCargo:function(t){var a=this,e=n.a.loading({message:"加载中...",forbidClick:!0,duration:0});Object(r.a)(t).then(function(t){0===t.data.status?(e.clear(),a.orderData=[],a.getOrderDataParmas.pageindex=1,a.getOrderData(a.getOrderDataParmas)):n.a.fail(t.data.msg)})}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"AwaitInCargo"},[e("van-search",{attrs:{placeholder:"请输入搜索手机号或姓名","show-action":"",shape:"round"},model:{value:t.getOrderDataParmas.contact,callback:function(a){t.$set(t.getOrderDataParmas,"contact",a)},expression:"getOrderDataParmas.contact"}},[e("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])]),t._v(" "),e("van-list",{staticClass:"data",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.listLoading,callback:function(a){t.listLoading=a},expression:"listLoading"}},t._l(t.orderData,function(a){return e("van-cell",{key:a.id,staticClass:"li"},[e("header",{staticClass:"header"},[e("div",[t._v("订单金额："+t._s(a.amount)+"元")]),t._v(" "),e("div",[t._v("订单号："+t._s(a.id))])]),t._v(" "),t._l(a.detaileList,function(a){return e("section",{key:a.id,staticClass:"item"},[e("img",{staticClass:"item_main_img",attrs:{src:a.mainImg}}),t._v(" "),e("section",{staticClass:"container"},[e("p",{staticClass:"product_name"},[t._v("品名："+t._s(a.pname))]),t._v(" "),e("p",{staticClass:"product_number"},[t._v("数量："+t._s(a.number+a.unit))]),t._v(" "),e("p",{staticClass:"product_price"},[t._v("价格："+t._s(a.pcice)+"元")])])])}),t._v(" "),e("footer",{staticClass:"get_cargo_address"},[e("p",[t._v("订单时间："+t._s(a.CreatTime))]),t._v(" "),e("p",[t._v("客户："+t._s(a.consignee)+"  "+t._s(a.phone))])]),t._v(" "),15==a.States?e("van-button",{staticClass:"get_cargo_btn",attrs:{type:"info",size:"mini"},on:{click:function(e){return t.confirmGetCargo(a.id)}}},[t._v("收货")]):t._e()],2)}),1)],1)},staticRenderFns:[]};var c=e("C7Lr")(i,s,!1,function(t){e("U5tl")},"data-v-e84285c8",null);a.a=c.exports},N8GH:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"clientGetCargo",data:function(){return{active:0}},components:{"await-in-cargo":e("5Cg5").a},created:function(){},methods:{linkBack:function(){this.$router.back()}}},r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"clientGetCargo"},[a("van-nav-bar",{attrs:{fixed:"",title:"待收货","left-text":"返回","left-arrow":""},on:{"click-left":this.linkBack}}),this._v(" "),a("await-in-cargo")],1)},staticRenderFns:[]};var i=e("C7Lr")(n,r,!1,function(t){e("rjqT")},"data-v-176c993c",null);a.default=i.exports},RArt:function(t,a,e){"use strict";e.d(a,"b",function(){return s}),e.d(a,"a",function(){return c});var n=e("4YfN"),r=e.n(n),i=e("ghfd"),s=function(t){return Object(i.a)("post",r()({act:"order",cmd:"mylist"},t,{issub:1}))},c=function(t){return Object(i.a)("post",{act:"order",cmd:"confirm",oid:t,subid:0})}},U5tl:function(t,a){},rjqT:function(t,a){}});
//# sourceMappingURL=6.9d07cd3ad853c3556b40.js.map