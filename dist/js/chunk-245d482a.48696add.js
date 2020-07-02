(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-245d482a"],{"013f":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"login"},[e("TopBar"),e("div",{staticClass:"card c-login shadow pl-5 pr-5 pb-5 pt-3 w-25 mx-auto mt-5"},[e("h5",{staticClass:"text-center"},[t._v("Login")]),e("hr"),e("h6",{directives:[{name:"show",rawName:"v-show",value:t.errors,expression:"errors"}],staticClass:"text-center l-error"},[t._v(t._s(t.errors.message))]),e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"Email"},on:{change:t.onChangeInput,keydown:t.onChangeInput}})]),e("div",{staticClass:"form-group mt-3"},[e("input",{staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"},on:{change:t.onChangeInput,keydown:t.onChangeInput}})]),e("button",{staticClass:"btn btn-login w-100 mx-auto mt-3",attrs:{type:"submit",disabled:t.disableButton},on:{click:t.onClickLoginButton}},[t._v("Login")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.pendingApiCall,expression:"pendingApiCall"}],staticClass:"text-center mt-2"},[e("PendingApiCall")],1)])],1)},r=[],s=(e("b0c0"),e("04e1")),o=e.n(s),i=e("08e3"),l=e("464e"),c={name:"Login",data:function(){return{auth:{},pendingApiCall:!1,disableButton:!0}},computed:{errors:function(){return this.$store.getters.getErrors}},created:function(){var t,n=localStorage.getItem("token");console.log(n),null!==n&&(t=o()(n)),null!==!n||t.email||this.$router.push("/products")},components:{PendingApiCall:i["a"],TopBar:l["a"]},methods:{onChangeInput:function(t){var n=t.target,e=n.name,a=n.value;this.auth[e]=a,this.disableButton=!1,this.error=!1},onClickLoginButton:function(){var t=this;this.disableButton=!0,this.pendingApiCall=!0,this.$store.dispatch("login",this.auth).then((function(n){console.log(n),t.pendingApiCall=!1,t.$router.push("/")})).catch((function(n){console.log(n),t.pendingApiCall=!1}))}}},u=c,p=(e("da41"),e("2877")),d=Object(p["a"])(u,a,r,!1,null,null,null);n["default"]=d.exports},"04e1":function(t,n,e){"use strict";var a=e("7afa");function r(t){this.message=t}r.prototype=new Error,r.prototype.name="InvalidTokenError",t.exports=function(t,n){if("string"!==typeof t)throw new r("Invalid token specified");n=n||{};var e=!0===n.header?0:1;try{return JSON.parse(a(t.split(".")[e]))}catch(s){throw new r("Invalid token specified: "+s.message)}},t.exports.InvalidTokenError=r},"08e3":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"spinner-border text-danger ",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],s={name:"PendingApiCall"},o=s,i=e("2877"),l=Object(i["a"])(o,a,r,!1,null,null,null);n["a"]=l.exports},"23bd":function(t,n,e){"use strict";var a=e("2791"),r=e.n(a);r.a},"266e":function(t,n,e){},2791:function(t,n,e){},"464e":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"navbar navbar-expand-lg  pl-5"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" eCommerce ")]),t._m(0),t.credentials?t._e():e("NormalRightMenu"),t.credentials?e("IfLoginRightMenu",{attrs:{user:t.credentials}}):t._e()],1)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"collapse navbar-collapse float-right mr-5",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1)])])},o=[],i={},l=i,c=e("2877"),u=Object(c["a"])(l,s,o,!1,null,null,null),p=u.exports,d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"collapse navbar-collapse float-right mr-5",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto "},[e("li",{staticClass:"nav-link"},[e("router-link",{staticClass:"account",attrs:{to:"/my-account"}},[e("span",[t._v("My Account")])])],1),e("li",{staticClass:"nav-link mr-5"},[e("span",{on:{click:t.logout}},[t._v("Log out")])]),e("li",{staticClass:"nav-item "},[e("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[e("i",{staticClass:"fa fa-shopping-cart"}),e("span",{staticClass:"w-length ml-2"},[t._v(t._s(t.cartsLength))])])],1)])])},g=[],h={name:"IfLoginRightMenu",computed:{cartsLength:function(){return this.$store.getters.getCarts.length}},props:{user:Object},methods:{logout:function(){location.reload(),this.$store.dispatch("logout")}}},v=h,f=(e("23bd"),Object(c["a"])(v,d,g,!1,null,null,null)),m=f.exports,C={name:"TopBar",components:{NormalRightMenu:p,IfLoginRightMenu:m},created:function(){this.$store.commit("initCart")},computed:{credentials:function(){return this.$store.getters.getUser}}},b=C,w=(e("6487"),Object(c["a"])(b,a,r,!1,null,null,null));n["a"]=w.exports},6487:function(t,n,e){"use strict";var a=e("8948"),r=e.n(a);r.a},"7afa":function(t,n,e){var a=e("9b81");function r(t){return decodeURIComponent(a(t).replace(/(.)/g,(function(t,n){var e=n.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e})))}t.exports=function(t){var n=t.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return r(n)}catch(e){return a(n)}}},8948:function(t,n,e){},"9b81":function(t,n){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function a(t){this.message=t}function r(t){var n=String(t).replace(/=+$/,"");if(n.length%4==1)throw new a("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,s,o=0,i=0,l="";s=n.charAt(i++);~s&&(r=o%4?64*r+s:s,o++%4)?l+=String.fromCharCode(255&r>>(-2*o&6)):0)s=e.indexOf(s);return l}a.prototype=new Error,a.prototype.name="InvalidCharacterError",t.exports="undefined"!==typeof window&&window.atob&&window.atob.bind(window)||r},da41:function(t,n,e){"use strict";var a=e("266e"),r=e.n(a);r.a}}]);
//# sourceMappingURL=chunk-245d482a.48696add.js.map