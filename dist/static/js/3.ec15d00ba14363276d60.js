webpackJsonp([3],{"+UR/":function(a,t){},"5Cg5":function(a,t,e){"use strict";e("qD+w");var s=e("T0tl"),i=e("RArt"),n={name:"AwaitInCargo",data:function(){return{finished:!1,orderData:[],getOrderDataParmas:{pageindex:1,pagesize:5,status:15},listLoading:!1}},methods:{onLoad:function(){this.getOrderData(this.getOrderDataParmas)},getOrderData:function(a){var t=this;Object(i.b)(a).then(function(a){a.data.data.list.length<5&&(t.finished=!0),0===a.data.status?(t.orderData.length<=0?t.orderData=a.data.data.list:a.data.data.list.forEach(function(a){t.orderData.push(a)}),t.listLoading=!1):console.error("网络错误:"+a.data.msg)}),this.getOrderDataParmas.pageindex+=1},onSearch:function(){this.orderData=[],this.getOrderDataParmas.pageindex=1,this.getOrderData(this.getOrderDataParmas)},confirmGetCargo:function(a){var t=this,e=s.a.loading({message:"加载中...",forbidClick:!0,duration:0});Object(i.a)(a).then(function(a){0===a.data.status?(e.clear(),t.orderData=[],t.getOrderDataParmas.pageindex=1,t.getOrderData(t.getOrderDataParmas)):s.a.fail(a.data.msg)})}}},r={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"AwaitInCargo"},[e("van-search",{attrs:{placeholder:"请输入搜索手机号或姓名","show-action":"",shape:"round"},model:{value:a.getOrderDataParmas.contact,callback:function(t){a.$set(a.getOrderDataParmas,"contact",t)},expression:"getOrderDataParmas.contact"}},[e("div",{attrs:{slot:"action"},on:{click:a.onSearch},slot:"action"},[a._v("搜索")])]),a._v(" "),e("van-list",{staticClass:"data",attrs:{finished:a.finished,"finished-text":"没有更多了"},on:{load:a.onLoad},model:{value:a.listLoading,callback:function(t){a.listLoading=t},expression:"listLoading"}},a._l(a.orderData,function(t){return e("van-cell",{key:t.id,staticClass:"li"},[e("header",{staticClass:"header"},[e("div",[a._v("订单金额："+a._s(t.amount)+"元")]),a._v(" "),e("div",[a._v("订单号："+a._s(t.id))])]),a._v(" "),a._l(t.detaileList,function(t){return e("section",{key:t.id,staticClass:"item"},[e("img",{staticClass:"item_main_img",attrs:{src:t.mainImg}}),a._v(" "),e("section",{staticClass:"container"},[e("p",{staticClass:"product_name"},[a._v("品名："+a._s(t.pname))]),a._v(" "),e("p",{staticClass:"product_number"},[a._v("数量："+a._s(t.number+t.unit))]),a._v(" "),e("p",{staticClass:"product_price"},[a._v("价格："+a._s(t.pcice)+"元")])])])}),a._v(" "),e("footer",{staticClass:"get_cargo_address"},[e("p",[a._v("订单时间："+a._s(t.CreatTime))]),a._v(" "),e("p",[a._v("客户："+a._s(t.consignee)+"  "+a._s(t.phone))])]),a._v(" "),15==t.States?e("van-button",{staticClass:"get_cargo_btn",attrs:{type:"info",size:"mini"},on:{click:function(e){return a.confirmGetCargo(t.id)}}},[a._v("收货")]):a._e()],2)}),1)],1)},staticRenderFns:[]};var o=e("C7Lr")(n,r,!1,function(a){e("MsQE")},"data-v-e84285c8",null);t.a=o.exports},HDgO:function(a,t){},MsQE:function(a,t){},RArt:function(a,t,e){"use strict";e.d(t,"b",function(){return r}),e.d(t,"a",function(){return o});var s=e("4YfN"),i=e.n(s),n=e("ghfd"),r=function(a){return Object(n.a)("post",i()({act:"order",cmd:"mylist"},a,{issub:1}))},o=function(a){return Object(n.a)("post",{act:"order",cmd:"confirm",oid:a,subid:0})}},XezA:function(a,t){},d20w:function(a,t){},ySZv:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("RArt"),i={name:"All",data:function(){return{finished:!1,btnLoading:!1,orderData:[],getOrderDataParmas:{pageindex:1,pagesize:5,status:-1},listLoading:!1}},methods:{onLoad:function(){this.getOrderData(this.getOrderDataParmas)},getOrderData:function(a){var t=this;Object(s.b)(a).then(function(a){a.data.data.list.length<5&&(t.finished=!0),0===a.data.status?(t.orderData.length<=0?t.orderData=a.data.data.list:a.data.data.list.forEach(function(a){t.orderData.push(a)}),t.listLoading=!1):console.error("网络错误:"+a.data.msg)}),this.getOrderDataParmas.pageindex+=1},onSearch:function(){this.orderData=[],this.getOrderDataParmas.pageindex=1,this.getOrderData(this.getOrderDataParmas)}}},n={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"All"},[e("van-search",{attrs:{placeholder:"请输入搜索手机号或姓名","show-action":"",shape:"round"},model:{value:a.getOrderDataParmas.contact,callback:function(t){a.$set(a.getOrderDataParmas,"contact",t)},expression:"getOrderDataParmas.contact"}},[e("div",{attrs:{slot:"action"},on:{click:a.onSearch},slot:"action"},[a._v("搜索")])]),a._v(" "),e("van-list",{staticClass:"data",attrs:{finished:a.finished,"finished-text":"没有更多了"},on:{load:a.onLoad},model:{value:a.listLoading,callback:function(t){a.listLoading=t},expression:"listLoading"}},a._l(a.orderData,function(t){return e("van-cell",{key:t.id,staticClass:"li"},[e("header",{staticClass:"header"},[e("div",[a._v("订单金额："+a._s(t.amount))]),a._v(" "),e("div",[a._v("订单号："+a._s(t.id))])]),a._v(" "),a._l(t.detaileList,function(t){return e("section",{key:t.id,staticClass:"item"},[e("img",{staticClass:"item_main_img",attrs:{src:t.mainImg}}),a._v(" "),e("section",{staticClass:"container"},[e("p",{staticClass:"product_name"},[a._v("品名："+a._s(t.pname))]),a._v(" "),e("p",{staticClass:"product_number"},[a._v("数量："+a._s(t.number+t.unit))]),a._v(" "),e("p",{staticClass:"product_price"},[a._v("价格："+a._s(t.pcice)+"元")])])])}),a._v(" "),e("footer",{staticClass:"get_cargo_address"},[e("p",[a._v("订单时间："+a._s(t.CreatTime))]),a._v(" "),e("p",[a._v("客户："+a._s(t.consignee)+"  "+a._s(t.phone))])])],2)}),1)],1)},staticRenderFns:[]};var r=e("C7Lr")(i,n,!1,function(a){e("XezA")},"data-v-0c838f7e",null).exports,o=e("5Cg5"),c={name:"AwaitOutCargo",data:function(){return{finished:!1,btnLoading:!1,orderData:[],getOrderDataParmas:{pageindex:1,pagesize:5,status:10},listLoading:!1}},methods:{onLoad:function(){this.getOrderData(this.getOrderDataParmas)},getOrderData:function(a){var t=this;Object(s.b)(a).then(function(a){a.data.data.list.length<5&&(t.finished=!0),0===a.data.status?(t.orderData.length<=0?t.orderData=a.data.data.list:a.data.data.list.forEach(function(a){t.orderData.push(a)}),t.listLoading=!1):console.error("网络错误:"+a.data.msg)}),this.getOrderDataParmas.pageindex+=1},onSearch:function(){this.orderData=[],this.getOrderDataParmas.pageindex=1,this.getOrderData(this.getOrderDataParmas)}}},d={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"AwaitOutCargo"},[e("van-search",{attrs:{placeholder:"请输入搜索手机号或姓名","show-action":"",shape:"round"},model:{value:a.getOrderDataParmas.contact,callback:function(t){a.$set(a.getOrderDataParmas,"contact",t)},expression:"getOrderDataParmas.contact"}},[e("div",{attrs:{slot:"action"},on:{click:a.onSearch},slot:"action"},[a._v("搜索")])]),a._v(" "),e("van-list",{staticClass:"data",attrs:{finished:a.finished,"finished-text":"没有更多了"},on:{load:a.onLoad},model:{value:a.listLoading,callback:function(t){a.listLoading=t},expression:"listLoading"}},a._l(a.orderData,function(t){return e("van-cell",{key:t.id,staticClass:"li"},[e("header",{staticClass:"header"},[e("div",[a._v("订单金额："+a._s(t.amount)+"元")]),a._v(" "),e("div",[a._v("订单号："+a._s(t.id))])]),a._v(" "),a._l(t.detaileList,function(t){return e("section",{key:t.id,staticClass:"item"},[e("img",{staticClass:"item_main_img",attrs:{src:t.mainImg}}),a._v(" "),e("section",{staticClass:"container"},[e("p",{staticClass:"product_name"},[a._v("品名："+a._s(t.pname))]),a._v(" "),e("p",{staticClass:"product_number"},[a._v("数量："+a._s(t.number+t.unit))]),a._v(" "),e("p",{staticClass:"product_price"},[a._v("价格："+a._s(t.pcice)+"元")])])])}),a._v(" "),e("footer",{staticClass:"get_cargo_address"},[e("p",[a._v("订单时间："+a._s(t.CreatTime))]),a._v(" "),e("p",[a._v("客户："+a._s(t.consignee)+"  "+a._s(t.phone))])])],2)}),1)],1)},staticRenderFns:[]};var l=e("C7Lr")(c,d,!1,function(a){e("d20w")},"data-v-6764b4cd",null).exports,u={name:"Fulfill",data:function(){return{finished:!1,btnLoading:!1,orderData:[],getOrderDataParmas:{pageindex:1,pagesize:5,status:20},listLoading:!1}},methods:{onLoad:function(){this.getOrderData(this.getOrderDataParmas)},getOrderData:function(a){var t=this;Object(s.b)(a).then(function(a){a.data.data.list.length<5&&(t.finished=!0),0===a.data.status?(t.orderData.length<=0?t.orderData=a.data.data.list:a.data.data.list.forEach(function(a){t.orderData.push(a)}),t.listLoading=!1):console.error("网络错误:"+a.data.msg)}),this.getOrderDataParmas.pageindex+=1},onSearch:function(){this.orderData=[],this.getOrderDataParmas.pageindex=1,this.getOrderData(this.getOrderDataParmas)}}},_={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"Fulfill"},[e("van-search",{attrs:{placeholder:"请输入搜索手机号或姓名","show-action":"",shape:"round"},model:{value:a.getOrderDataParmas.contact,callback:function(t){a.$set(a.getOrderDataParmas,"contact",t)},expression:"getOrderDataParmas.contact"}},[e("div",{attrs:{slot:"action"},on:{click:a.onSearch},slot:"action"},[a._v("搜索")])]),a._v(" "),e("van-list",{staticClass:"data",attrs:{finished:a.finished,"finished-text":"没有更多了"},on:{load:a.onLoad},model:{value:a.listLoading,callback:function(t){a.listLoading=t},expression:"listLoading"}},a._l(a.orderData,function(t){return e("van-cell",{key:t.id,staticClass:"li"},[e("header",{staticClass:"header"},[e("div",[a._v("订单金额："+a._s(t.amount)+"元")]),a._v(" "),e("div",[a._v("订单号："+a._s(t.id))])]),a._v(" "),a._l(t.detaileList,function(t){return e("section",{key:t.id,staticClass:"item"},[e("img",{staticClass:"item_main_img",attrs:{src:t.mainImg}}),a._v(" "),e("section",{staticClass:"container"},[e("p",{staticClass:"product_name"},[a._v("品名："+a._s(t.pname))]),a._v(" "),e("p",{staticClass:"product_number"},[a._v("数量："+a._s(t.number+t.unit))]),a._v(" "),e("p",{staticClass:"product_price"},[a._v("价格："+a._s(t.pcice)+"元")])])])}),a._v(" "),e("footer",{staticClass:"get_cargo_address"},[e("p",[a._v("订单时间："+a._s(t.CreatTime))]),a._v(" "),e("p",[a._v("客户："+a._s(t.consignee)+"  "+a._s(t.phone))])])],2)}),1)],1)},staticRenderFns:[]};var v=e("C7Lr")(u,_,!1,function(a){e("+UR/")},"data-v-2e8bf2df",null).exports,g={name:"myOrder",data:function(){return{active:0}},components:{all:r,"await-in-cargo":o.a,"await-out-cargo":l,culfill:v},created:function(){},methods:{clickTopTab:function(a){this.active=a},linkBack:function(){this.$router.back()}}},m={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"myOrder"},[e("van-nav-bar",{attrs:{fixed:"",title:"我的订单","left-text":"返回","left-arrow":""},on:{"click-left":a.linkBack}}),a._v(" "),e("van-tabs",{staticClass:"tab_bar",attrs:{"title-active-color":"rgb(190,157,83)",color:"rgb(190,157,83)"},on:{click:a.clickTopTab},model:{value:a.active,callback:function(t){a.active=t},expression:"active"}},[e("van-tab",{attrs:{title:"全部",name:0,animated:""}},[e("all")],1),a._v(" "),e("van-tab",{attrs:{title:"待发货",name:1,animated:""}},[e("await-out-cargo")],1),a._v(" "),e("van-tab",{attrs:{title:"待收货",name:2,animated:""}},[e("await-in-cargo")],1),a._v(" "),e("van-tab",{attrs:{title:"已完成",name:3,animated:""}},[e("culfill")],1)],1)],1)},staticRenderFns:[]};var f=e("C7Lr")(g,m,!1,function(a){e("HDgO")},"data-v-75090a16",null);t.default=f.exports}});
//# sourceMappingURL=3.ec15d00ba14363276d60.js.map