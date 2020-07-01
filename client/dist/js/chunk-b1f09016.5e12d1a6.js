(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1f09016"],{"04e1":function(t,e,a){"use strict";var s=a("7afa");function n(t){this.message=t}n.prototype=new Error,n.prototype.name="InvalidTokenError",t.exports=function(t,e){if("string"!==typeof t)throw new n("Invalid token specified");e=e||{};var a=!0===e.header?0:1;try{return JSON.parse(s(t.split(".")[a]))}catch(r){throw new n("Invalid token specified: "+r.message)}},t.exports.InvalidTokenError=n},"08e3":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-border text-danger ",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],r={name:"PendingApiCall"},i=r,l=a("2877"),o=Object(l["a"])(i,s,n,!1,null,null,null);e["a"]=o.exports},"23bd":function(t,e,a){"use strict";var s=a("2791"),n=a.n(s);n.a},2791:function(t,e,a){},"464e":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg  pl-5"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" E-Commerce ")]),t._m(0),t.credentials?t._e():a("NormalRightMenu"),t.credentials?a("IfLoginRightMenu",{attrs:{user:t.credentials}}):t._e()],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse navbar-collapse float-right mr-5",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1)])])},i=[],l={},o=l,c=(a("b3f7"),a("2877")),u=Object(c["a"])(o,r,i,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse navbar-collapse float-right mr-5",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-link"},[a("router-link",{staticClass:"account",attrs:{to:"/my-account"}},[a("span",[t._v("My Account")])])],1),a("li",{staticClass:"nav-link"},[a("span",{on:{click:t.logout}},[t._v("Log out")])]),a("li",{staticClass:"nav-item ml-5"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[a("i",{staticClass:"fa fa-shopping-cart"}),a("span",{staticClass:"w-length ml-2"},[t._v(t._s(t.cartsLength))])])],1)])])},f=[],h={name:"IfLoginRightMenu",computed:{cartsLength:function(){return this.$store.getters.getCarts.length}},props:{user:Object},methods:{logout:function(){location.reload(),this.$store.dispatch("logout")}}},v=h,g=(a("23bd"),Object(c["a"])(v,p,f,!1,null,null,null)),C=g.exports,m={name:"TopBar",components:{NormalRightMenu:d,IfLoginRightMenu:C},created:function(){this.$store.commit("initCart")},computed:{credentials:function(){return this.$store.getters.getUser}}},b=m,_=(a("6487"),Object(c["a"])(b,s,n,!1,null,null,null));e["a"]=_.exports},"4de4":function(t,e,a){"use strict";var s=a("23e7"),n=a("b727").filter,r=a("1dde"),i=a("ae40"),l=r("filter"),o=i("filter");s({target:"Array",proto:!0,forced:!l||!o},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},6487:function(t,e,a){"use strict";var s=a("8948"),n=a.n(s);n.a},"7afa":function(t,e,a){var s=a("9b81");function n(t){return decodeURIComponent(s(t).replace(/(.)/g,(function(t,e){var a=e.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a})))}t.exports=function(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return n(e)}catch(a){return s(e)}}},8948:function(t,e,a){},"8be6":function(t,e,a){},"8c2d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"my-account"},[s("TopBar"),s("div",{staticClass:"container mt-4"},[s("h5",[e._v("My Account")]),s("div",{staticClass:"ml-2"},[s("span",{staticClass:"wlcome"},[e._v("Welcome")]),s("span",{staticClass:"u-name-text ml-2"},[e._v(e._s(e.user.name))])]),s("div",{staticClass:"d-flex ml-4 mt-4"},[s("button",{staticClass:"btn btn-o mr-4",on:{click:function(){return t.$router.push("/add-address")}}},[s("i",{staticClass:"fa fa-map-marker"}),e._v(" Add Address ")]),s("button",{staticClass:"btn btn-o",on:{click:function(){return t.$router.push("/orders")}}},[s("i",{staticClass:"fa fa-shopping-basket"}),e._v(" My Shopping ")])]),s("div",{staticClass:"mt-4"},[s("h5",[e._v("My Address")]),s("table",{staticClass:"table"},[e._m(0),s("tbody",e._l(e.addresses,(function(t){return s("tr",{key:t.id},[s("th",{staticClass:"pl-5 pr-5 thead-f"},[e._v(e._s(t.address1))]),s("th",{staticClass:"pl-5 pr-5 thead-f"},[e._v(e._s(t.postCode))]),s("th",{staticClass:"pl-5 pr-5 thead-f"},[e._v(e._s(t.city))]),s("th",{staticClass:"pl-5 pr-5 thead-f"},[e._v(e._s(t.phone))]),s("th",{staticClass:"pl-5 pr-5 thead-f",on:{click:function(a){return e.deleteAddress(t.id)}}},[s("i",{staticClass:"fa fa-minus-circle"})])])})),0)]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.pendingApiCall,expression:"pendingApiCall"}],staticClass:"text-center"},[s("PendingApiCall")],1)])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"head"},[a("tr",[a("th",{staticClass:"pl-5 pr-5 thead-f"},[t._v("Address")]),a("th",{staticClass:"pl-5 pr-5 thead-f"},[t._v("Post Code")]),a("th",{staticClass:"pl-5 pr-5 thead-f"},[t._v("City")]),a("th",{staticClass:"pl-5 pr-5 thead-f"},[t._v("Phone")]),a("th",{staticClass:"pl-5 pr-5 thead-f"},[t._v("Delete")])])])}],r=(a("4de4"),a("bc3a")),i=a.n(r),l=a("04e1"),o=a.n(l),c=a("464e"),u=a("08e3"),d={components:{TopBar:c["a"],PendingApiCall:u["a"]},data:function(){return{user:{},addresses:[],pendingApiCall:!0}},created:function(){var t,e=localStorage.getItem("token");null!==e&&(t=o()(e)),null!=e&&t.email||this.$router.push("/products")},mounted:function(){this.fetchUser()},methods:{fetchUser:function(){var t=this,e=localStorage.getItem("Id");i.a.get("https://abc-app-api.azurewebsites.net/api/users/"+e).then((function(e){t.user=e.data,console.log(e),t.addresses=e.data.addresses.filter((function(t){return!0!==t.isDeleted})),t.pendingApiCall=!1})).catch(this.pendingApiCall=!1)},deleteAddress:function(t){var e=this;i.a.delete("https://abc-app-api.azurewebsites.net/api/users/".concat(t,"/address")).then((function(t){console.log(t),e.fetchUser()}))}}},p=d,f=(a("ee42"),a("2877")),h=Object(f["a"])(p,s,n,!1,null,null,null);e["default"]=h.exports},"972f":function(t,e,a){},"9b81":function(t,e){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function s(t){this.message=t}function n(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new s("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,i=0,l=0,o="";r=e.charAt(l++);~r&&(n=i%4?64*n+r:r,i++%4)?o+=String.fromCharCode(255&n>>(-2*i&6)):0)r=a.indexOf(r);return o}s.prototype=new Error,s.prototype.name="InvalidCharacterError",t.exports="undefined"!==typeof window&&window.atob&&window.atob.bind(window)||n},b3f7:function(t,e,a){"use strict";var s=a("972f"),n=a.n(s);n.a},ee42:function(t,e,a){"use strict";var s=a("8be6"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-b1f09016.5e12d1a6.js.map