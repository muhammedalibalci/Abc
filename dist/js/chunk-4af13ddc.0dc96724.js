(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4af13ddc"],{"04e1":function(t,a,e){"use strict";var n=e("7afa");function r(t){this.message=t}r.prototype=new Error,r.prototype.name="InvalidTokenError",t.exports=function(t,a){if("string"!==typeof t)throw new r("Invalid token specified");a=a||{};var e=!0===a.header?0:1;try{return JSON.parse(n(t.split(".")[e]))}catch(s){throw new r("Invalid token specified: "+s.message)}},t.exports.InvalidTokenError=r},"08e3":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"spinner-border text-danger ",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],s={name:"PendingApiCall"},i=s,o=e("2877"),l=Object(o["a"])(i,n,r,!1,null,null,null);a["a"]=l.exports},"0b35":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"orders"},[n("TopBar"),n("div",{staticClass:"container"},[n("h4",{staticClass:"mt-3 pb-2"},[a._v("My Orders")]),n("button",{staticClass:"btn btn-back",on:{click:function(){return t.$router.go(-1)}}},[a._v("Back")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:a.pendingApiCall,expression:"pendingApiCall"}],staticClass:"text-center"},[n("PendingApiCall")],1),0!==a.orders.length||a.pendingApiCall?a._e():n("h4",{staticClass:"text-center mt-4"},[a._v("Not Found Anything :(")]),n("div",{staticClass:"row container mx-auto d-block"},a._l(a.orders,(function(t){return n("div",{key:t.id,staticClass:"card col-xl-8 col-md-8 mx-auto col-sm-12 order shadow mt-2 p-3"},[n("div",{staticClass:"d-flex"},[n("div",[n("img",{attrs:{src:t.productDetail.product.imageUrl,alt:"...",width:"100",height:"70"}})]),n("div",{staticClass:"mx-auto"},[n("h5",[a._v(a._s(t.productDetail.product.name))]),n("div",[n("i",{staticClass:"fa fa-calendar"}),a._v(" "+a._s(t.order.createdDate.split("T")[0])+" ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.quantity<=2,expression:"item.quantity <= 2 "}],staticClass:"mx-auto"},[n("i",{staticClass:"fa fa-check"})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.quantity>2,expression:"item.quantity > 2 "}],staticClass:"mx-auto"},[a._m(0,!0)]),n("div",{staticClass:"ml-auto"},[n("div",{staticClass:"o-price"},[a._v("$"+a._s(t.quantity*t.productDetail.product.price))])])])])})),0)],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("i",{staticClass:"fa fa-history"})])}],s=e("464e"),i=e("08e3"),o=e("04e1"),l=e.n(o),c=e("bc3a"),u=e.n(c),d={components:{TopBar:s["a"],PendingApiCall:i["a"]},data:function(){return{orders:[],pendingApiCall:!0}},created:function(){var t,a=localStorage.getItem("token");console.log(a),null!==a&&(t=l()(a)),null!=a&&t.email||this.$router.push("/products")},mounted:function(){var t=this,a=localStorage.getItem("token");u.a.get("https://abc-app-api.azurewebsites.net/api/orders",{headers:{Authorization:"Bearer "+a}}).then((function(a){t.orders=a.data,t.pendingApiCall=!1}))}},p=d,v=(e("e17f"),e("2877")),f=Object(v["a"])(p,n,r,!1,null,null,null);a["default"]=f.exports},"23bd":function(t,a,e){"use strict";var n=e("2791"),r=e.n(n);r.a},2791:function(t,a,e){},"464e":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg  pl-5"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" eCommerce ")]),t._m(0),t.credentials?t._e():e("NormalRightMenu"),t.credentials?e("IfLoginRightMenu",{attrs:{user:t.credentials}}):t._e()],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapse navbar-collapse float-right mr-5",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1)])])},i=[],o={},l=o,c=e("2877"),u=Object(c["a"])(l,s,i,!1,null,null,null),d=u.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapse navbar-collapse float-right mr-5",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto "},[e("li",{staticClass:"nav-link"},[e("router-link",{staticClass:"account",attrs:{to:"/my-account"}},[e("span",[t._v("My Account")])])],1),e("li",{staticClass:"nav-link mr-5"},[e("span",{on:{click:t.logout}},[t._v("Log out")])]),e("li",{staticClass:"nav-item "},[e("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[e("i",{staticClass:"fa fa-shopping-cart"}),e("span",{staticClass:"w-length ml-2"},[t._v(t._s(t.cartsLength))])])],1)])])},v=[],f={name:"IfLoginRightMenu",computed:{cartsLength:function(){return this.$store.getters.getCarts.length}},props:{user:Object},methods:{logout:function(){location.reload(),this.$store.dispatch("logout")}}},g=f,h=(e("23bd"),Object(c["a"])(g,p,v,!1,null,null,null)),m=h.exports,C={name:"TopBar",components:{NormalRightMenu:d,IfLoginRightMenu:m},created:function(){this.$store.commit("initCart")},computed:{credentials:function(){return this.$store.getters.getUser}}},b=C,_=(e("6487"),Object(c["a"])(b,n,r,!1,null,null,null));a["a"]=_.exports},6487:function(t,a,e){"use strict";var n=e("8948"),r=e.n(n);r.a},"7afa":function(t,a,e){var n=e("9b81");function r(t){return decodeURIComponent(n(t).replace(/(.)/g,(function(t,a){var e=a.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e})))}t.exports=function(t){var a=t.replace(/-/g,"+").replace(/_/g,"/");switch(a.length%4){case 0:break;case 2:a+="==";break;case 3:a+="=";break;default:throw"Illegal base64url string!"}try{return r(a)}catch(e){return n(a)}}},8948:function(t,a,e){},"9b81":function(t,a){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function n(t){this.message=t}function r(t){var a=String(t).replace(/=+$/,"");if(a.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,s,i=0,o=0,l="";s=a.charAt(o++);~s&&(r=i%4?64*r+s:s,i++%4)?l+=String.fromCharCode(255&r>>(-2*i&6)):0)s=e.indexOf(s);return l}n.prototype=new Error,n.prototype.name="InvalidCharacterError",t.exports="undefined"!==typeof window&&window.atob&&window.atob.bind(window)||r},c19f:function(t,a,e){},e17f:function(t,a,e){"use strict";var n=e("c19f"),r=e.n(n);r.a}}]);
//# sourceMappingURL=chunk-4af13ddc.0dc96724.js.map