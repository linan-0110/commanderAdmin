webpackJsonp([2],{"3Lze":function(t,n,e){"use strict";var o=e("B470"),a=(e.n(o),e("LOyB")),i=(e.n(a),e("E06Z")),s=(e.n(i),e("Y01f"));e.n(s)},"3cXf":function(t,n,e){t.exports={default:e("pELq"),__esModule:!0}},UYZJ:function(t,n,e){t.exports=e.p+"static/img/login_main1.24aff10.png"},Y01f:function(t,n){},Yo0C:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("3Lze");var o=e("g6C9"),a=e("3cXf"),i=e.n(a),s=(e("ybsy"),e("qAUv")),c=e("4YfN"),l=e.n(c),r=e("ghfd"),u={name:"Login",data:function(){return{account:"",password:""}},created:function(){if(this.accountpwdJSON=localStorage.getItem("accountpwd"),this.accountpwdJSON){var t=JSON.parse(this.accountpwdJSON),n=t.account,e=t.password;this.account=n,this.password=e}var o=localStorage.getItem("act"),a=localStorage.getItem("pwd");o&&(this.account=o),a&&(this.password=a)},methods:{login:function(){var t,n=this;s.a.loading({message:"登录中...",forbidClick:!0,duration:0}),(t={account:this.account,password:this.password},Object(r.b)("post",l()({act:"login",cmd:"login"},t))).then(function(t){0===t.data.status?(localStorage.setItem("userInfo",i()(t.data.data)),localStorage.setItem("act",n.account),localStorage.getItem("pwd")||o.a.confirm({title:"保存密码",message:"是否保存密码？"}).then(function(){localStorage.setItem("pwd",n.password)}).catch(function(){}),s.a.success("登录"+t.data.msg),setTimeout(function(){s.a.clear(),n.$router.push("/home")},400)):s.a.fail("登录失败:"+t.data.msg)})}}},d={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"Login"},[o("img",{staticClass:"main_img",attrs:{src:e("UYZJ")}}),t._v(" "),o("van-cell-group",{staticClass:"input_container"},[o("van-field",{attrs:{required:"",clearable:"",label:"账 号",placeholder:"请输入账号"},on:{"click-right-icon":function(n){return t.$toast("question")}},model:{value:t.account,callback:function(n){t.account=n},expression:"account"}}),t._v(" "),o("van-field",{attrs:{type:"password",label:"密 码",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}}),t._v(" "),o("div",{tag:"button",staticClass:"login_btn",on:{click:t.login}},[t._v("登录")])],1)],1)},staticRenderFns:[]};var f=e("C7Lr")(u,d,!1,function(t){e("nZIe")},"data-v-099ab56a",null);n.default=f.exports},g6C9:function(t,n,e){"use strict";var o,a=e("Ba5r"),i=e("xd7I"),s=e("gEST"),c=e("0leQ"),l=e("zTPX"),r=e("GLKN"),u=Object(s.b)("dialog"),d=u[0],f=u[1],h=u[2],g=d({mixins:[l.a],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var n=this;this.$emit(t),this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(e){!1!==e&&n.loading[t]&&n.onClose(t),n.loading.confirm=!1,n.loading.cancel=!1})):this.onClose(t)},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")}},render:function(){var t,n,e=this,o=arguments[0];if(this.shouldRender){var a=this.message,i=this.messageAlign,l=this.slots(),u=this.slots("title")||this.title,d=u&&o("div",{class:f("header",{isolated:!a&&!l})},[u]),g=(l||a)&&o("div",{class:f("content")},[l||o("div",{domProps:{innerHTML:a},class:f("message",(t={"has-title":u},t[i]=i,t))})]),m=this.showCancelButton&&this.showConfirmButton,p=o("div",{class:[c.d,f("footer",{buttons:m})]},[this.showCancelButton&&o(r.a,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||h("cancel")},class:f("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&o(r.a,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||h("confirm")},class:[f("confirm"),(n={},n[c.b]=m,n)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})]);return o("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[o("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||a},class:[f(),this.className],style:{width:Object(s.a)(this.width)}},[d,g,p])])}}});function m(t){return s.f?Promise.resolve():new Promise(function(n,e){var s;o&&(s=o.$el,document.body.contains(s))||(o&&o.$destroy(),(o=new(i.a.extend(g))({el:document.createElement("div"),propsData:{lazyRender:!1}})).$on("input",function(t){o.value=t})),Object(a.a)(o,m.currentOptions,t,{resolve:n,reject:e})})}m.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){o["confirm"===t?"resolve":"reject"](t)}},m.alert=m,m.confirm=function(t){return m(Object(a.a)({showCancelButton:!0},t))},m.close=function(){o&&(o.value=!1)},m.setDefaultOptions=function(t){Object(a.a)(m.currentOptions,t)},m.resetDefaultOptions=function(){m.currentOptions=Object(a.a)({},m.defaultOptions)},m.resetDefaultOptions(),m.install=function(){i.a.use(g)},m.Component=g,i.a.prototype.$dialog=m;n.a=m},nZIe:function(t,n){},pELq:function(t,n,e){var o=e("xhIC"),a=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}}});
//# sourceMappingURL=2.5218e715a84173da32a3.js.map