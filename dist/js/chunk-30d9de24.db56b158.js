(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30d9de24"],{"08e3":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"spinner-border text-danger ",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],i={name:"PendingApiCall"},r=i,c=e("2877"),l=Object(c["a"])(r,n,s,!1,null,null,null);a["a"]=l.exports},"1e65":function(t,a,e){"use strict";var n=e("8fe7"),s=e.n(n);s.a},"23bd":function(t,a,e){"use strict";var n=e("2791"),s=e.n(n);s.a},2791:function(t,a,e){},"464e":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg  pl-5"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" E-Commerce ")]),t._m(0),t.credentials?t._e():e("NormalRightMenu"),t.credentials?e("IfLoginRightMenu",{attrs:{user:t.credentials}}):t._e()],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapse navbar-collapse float-right mr-5",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1)])])},r=[],c={},l=c,o=(e("b3f7"),e("2877")),u=Object(o["a"])(l,i,r,!1,null,null,null),d=u.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapse navbar-collapse float-right mr-5",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-link"},[e("router-link",{staticClass:"account",attrs:{to:"/my-account"}},[e("span",[t._v("My Account")])])],1),e("li",{staticClass:"nav-link"},[e("span",{on:{click:t.logout}},[t._v("Log out")])]),e("li",{staticClass:"nav-item ml-5"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[e("i",{staticClass:"fa fa-shopping-cart"}),e("span",{staticClass:"w-length ml-2"},[t._v(t._s(t.cartsLength))])])],1)])])},g=[],v={name:"IfLoginRightMenu",computed:{cartsLength:function(){return this.$store.getters.getCarts.length}},props:{user:Object},methods:{logout:function(){location.reload(),this.$store.dispatch("logout")}}},f=v,C=(e("23bd"),Object(o["a"])(f,p,g,!1,null,null,null)),m=C.exports,h={name:"TopBar",components:{NormalRightMenu:d,IfLoginRightMenu:m},created:function(){this.$store.commit("initCart")},computed:{credentials:function(){return this.$store.getters.getUser}}},b=h,_=(e("6487"),Object(o["a"])(b,n,s,!1,null,null,null));a["a"]=_.exports},6487:function(t,a,e){"use strict";var n=e("8948"),s=e.n(n);s.a},"6eb0":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-products"},[e("TopBar"),e("div",{staticClass:"p-wrap pt-3 "},[e("Category"),e("ProductsSection")],1)],1)},s=[],i=e("464e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ml-3 mb-4 text-center"},[e("div",{staticClass:"text-center"},[e("PendingApiCall",{directives:[{name:"show",rawName:"v-show",value:t.pendingApiCall,expression:"pendingApiCall"}]})],1),t._l(t.categories,(function(a){return e("div",{key:a.id,staticClass:"category mr-2"},[e("span",{staticClass:"card-inline pl-2 pr-2",class:{"current-category":t.currentCategoryId===a.id},on:{click:function(e){return t.switchProducts(a.id)}}},[t._v(t._s(a.name))])])}))],2)},c=[],l=e("2909"),o=e("bc3a"),u=e.n(o),d=e("08e3"),p={name:"Category",components:{PendingApiCall:d["a"]},data:function(){return{categories:[],pendingApiCall:!0}},computed:{currentCategoryId:function(){return this.$store.getters.getCurrentCategoryId}},created:function(){this.getCategories()},methods:{getCategories:function(){var t=this;u.a.get("https://abc-app-api.azurewebsites.net/api/categories").then((function(a){var e=Object(l["a"])(a.data);t.categories=e,t.pendingApiCall=!1})).catch((function(a){console.log("Categories",a),t.pendingApiCall=!1}))},switchProducts:function(t){this.$store.dispatch("fetchProducts",t)}}},g=p,v=(e("1e65"),e("2877")),f=Object(v["a"])(g,r,c,!1,null,null,null),C=f.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pb-5"},[e("div",{staticClass:"products w-100 container mt-5"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.pendingApiCall,expression:"pendingApiCall"}],staticClass:"text-center"},[e("PendingApiCall")],1),t._l(t.products,(function(a){return e("section",{key:a.id,staticClass:"card ml-5 mb-4 p-2 card-product shadow mx-auto"},[e("div",{staticClass:"p-3"},[e("img",{attrs:{src:a.imageUrl,alt:"...",width:"100%",height:"100%"}})]),e("div",{staticClass:"card-body text-center"},[e("router-link",{staticClass:"card-name-router",attrs:{to:"/product/"+a.id}},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.name))])]),e("hr"),e("div",{staticClass:"mx-auto"},[e("div",{staticClass:"price-title float-left mt-2"},[t._v("$ "+t._s(a.price))]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.user,expression:"user"}],staticClass:"float-right w-25"},[e("button",{staticClass:"btn p-button",on:{click:function(e){return t.addToBasket(a.productDetails)}}},[e("i",{staticClass:"fa fa-cart-plus"})])])])],1)])}))],2)])},h=[],b={name:"Products",components:{PendingApiCall:d["a"]},data:function(){return{pendingApiCall:!0}},computed:{products:function(){return this.$store.getters.getProducts},user:function(){return this.$store.getters.getUser}},created:function(){this.$store.dispatch("fetchProducts"),this.pendingApiCall=!1},methods:{addToBasket:function(t){var a={Quantity:1,ProductDetailId:t[0].id};this.$store.dispatch("addCartToBasket",a)}}},_=b,w=(e("7957"),Object(v["a"])(_,m,h,!1,null,null,null)),k=w.exports,$={name:"Products",components:{TopBar:i["a"],Category:C,ProductsSection:k}},x=$,y=(e("93f1"),Object(v["a"])(x,n,s,!1,null,null,null));a["default"]=y.exports},7957:function(t,a,e){"use strict";var n=e("8015"),s=e.n(n);s.a},8015:function(t,a,e){},8948:function(t,a,e){},"8a8c":function(t,a,e){},"8fe7":function(t,a,e){},"93f1":function(t,a,e){"use strict";var n=e("8a8c"),s=e.n(n);s.a},"972f":function(t,a,e){},b3f7:function(t,a,e){"use strict";var n=e("972f"),s=e.n(n);s.a}}]);
//# sourceMappingURL=chunk-30d9de24.db56b158.js.map