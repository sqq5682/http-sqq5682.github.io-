(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-176d1891"],{2017:function(e,t,s){"use strict";var n=s("cafe"),r=s.n(n);r.a},"3d30":function(e,t,s){},"9ed6":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("登录页面")])]),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")]),s("div",{staticClass:"tips"},[s("span",{staticStyle:{"margin-right":"20px"}},[e._v("username: admin")]),s("span",[e._v(" password: any")])])],1)],1)},r=[],o=(s("498a"),s("96cf"),s("1da1")),a=(s("61f7"),s("c24f")),i={name:"Login",data:function(){var e=function(e,t,s){""==t.trim()?s(new Error("请输入正确的账号")):s()},t=function(e,t,s){t.length<6?s(new Error("请输入密码长度大于5")):s()};return{loginForm:{username:"sqq",password:"xiandou"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},loginRequest:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var n,r,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return n=e.username,r=e.password,s.next=3,Object(a["a"])({logonName:n.trim(),logonPass:r});case 3:o=s.sent,o.code||(t.$notify({title:"登录成功",type:"success"}),t.$store.dispatch("user/login","asdasdsad"),t.$router.push({path:t.redirect||"/"})),t.loading=!1;case 6:case"end":return s.stop()}}),s)})))()},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(t){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}))}}},c=i,l=(s("2017"),s("e4cd"),s("2877")),d=Object(l["a"])(c,n,r,!1,null,"2ded92ef",null);t["default"]=d.exports},cafe:function(e,t,s){},e4cd:function(e,t,s){"use strict";var n=s("3d30"),r=s.n(n);r.a}}]);