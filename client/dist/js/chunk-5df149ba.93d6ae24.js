(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5df149ba"],{"1b3c":function(t,a,e){"use strict";var s=e("a527"),i=e.n(s);i.a},"23bd":function(t,a,e){"use strict";var s=e("2791"),i=e.n(s);i.a},2791:function(t,a,e){},"3d94":function(t,a,e){"use strict";var s=e("6200"),i=e.n(s);i.a},"464e":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg  pl-5"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" E-Commerce ")]),t._m(0),t.credentials?t._e():e("NormalRightMenu"),t.credentials?e("IfLoginRightMenu",{attrs:{user:t.credentials}}):t._e()],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapse navbar-collapse float-right mr-5",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1)])])},r=[],c={},l=c,o=(e("b3f7"),e("2877")),u=Object(o["a"])(l,n,r,!1,null,null,null),m=u.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapse navbar-collapse float-right mr-5",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-link"},[e("router-link",{staticClass:"account",attrs:{to:"/my-account"}},[e("span",[t._v("My Account")])])],1),e("li",{staticClass:"nav-link"},[e("span",{on:{click:t.logout}},[t._v("Log out")])]),e("li",{staticClass:"nav-item ml-5"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[e("i",{staticClass:"fa fa-shopping-cart"}),e("span",{staticClass:"w-length ml-2"},[t._v(t._s(t.cartsLength))])])],1)])])},v=[],d={name:"IfLoginRightMenu",computed:{cartsLength:function(){return this.$store.getters.getCarts.length}},props:{user:Object},methods:{logout:function(){location.reload(),this.$store.dispatch("logout")}}},f=d,h=(e("23bd"),Object(o["a"])(f,p,v,!1,null,null,null)),b=h.exports,C={name:"TopBar",components:{NormalRightMenu:m,IfLoginRightMenu:b},created:function(){this.$store.commit("initCart")},computed:{credentials:function(){return this.$store.getters.getUser}}},_=C,g=(e("6487"),Object(o["a"])(_,s,i,!1,null,null,null));a["a"]=g.exports},"4a49":function(t,a,e){},6200:function(t,a,e){},6487:function(t,a,e){"use strict";var s=e("8948"),i=e.n(s);i.a},"760c":function(t,a,e){"use strict";var s=e("c3f5"),i=e.n(s);i.a},8948:function(t,a,e){},"89f1":function(t,a,e){"use strict";var s=e("fca2"),i=e.n(s);i.a},"972f":function(t,a,e){},a527:function(t,a,e){},b3f7:function(t,a,e){"use strict";var s=e("972f"),i=e.n(s);i.a},bc13:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=this,e=a.$createElement,s=a._self._c||e;return s("div",[s("TopBar"),s("div",[s("div",{staticClass:"container-wrap"},[s("img",{staticClass:"wallpaper",attrs:{src:"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",alt:""}}),s("div",{staticClass:"centered"},[s("h1",{staticClass:"title mb-4"},[a._v("Welcome to eCommerce")]),s("h5",{staticClass:"sub-title"},[a._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.")]),s("button",{staticClass:"btn t-button mt-4",on:{click:function(){return t.$router.push("/products")}}},[a._v("look products")])]),s("WallPaperSub"),s("Three"),a._m(0),s("Two")],1),s("div",[s("Footer")],1)])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"w-sub p-5"},[e("h3",{staticClass:"mb-4"},[t._v("We handle all of your travel needs")]),e("div",{staticClass:"w-50 mx-auto"},[t._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nam rerum vel earum error fugiat cupiditate, dolore eius! Minus, explicabo.")])])}],n=e("464e"),r=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"text-center text pt-2"},[e("a",{attrs:{href:"https://github.com/muhammedalibalci/Abc"}},[t._v("Github")])])])}],l={},o=l,u=(e("760c"),e("2877")),m=Object(u["a"])(o,r,c,!1,null,null,null),p=m.exports,v=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row three container mt-2 mx-auto"},[e("div",{staticClass:"col-4 card"},[e("img",{attrs:{src:"https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",alt:"",height:"200"}}),e("div",{staticClass:"pl-5 pr-5"},[e("h5",{staticClass:"mt-5"},[t._v("Lorem Umppsada allsada")]),e("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.")])])]),e("div",{staticClass:"col-4 card"},[e("img",{attrs:{src:"https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",alt:"",height:"200"}}),e("div",{staticClass:"pl-5 pr-5"},[e("h5",{staticClass:"mt-5"},[t._v("Lorem Umppsada allsada")]),e("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.")])])]),e("div",{staticClass:"col-4 card"},[e("img",{attrs:{src:"https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",alt:"",height:"200"}}),e("div",{staticClass:"pl-5 pr-5"},[e("h5",{staticClass:"mt-5"},[t._v("Lorem Umppsada allsada")]),e("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.")])])])])}],f={},h=f,b=(e("1b3c"),Object(u["a"])(h,v,d,!1,null,null,null)),C=b.exports,_=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sub-wal p-5 mb-4"},[e("div",{staticClass:"container"},[e("h3",[t._v("eCommerce - Store")]),e("p",{staticClass:"w-50 mx-auto"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.")])])])}],x={},w=x,E=(e("3d94"),Object(u["a"])(w,_,g,!1,null,null,null)),y=E.exports,L=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"two d-flex mb-4"},[e("div",{staticClass:"card p-5 contact"},[e("h3",{staticClass:"pb-3"},[t._v("Contact Us")]),e("div",{staticClass:"two-text"},[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, suscipit. Rerum ducimus a quod, ut et voluptas obcaecati unde fuga.")]),e("div",{staticClass:"mt-4"},[t._v("eCommerce@aaa.com")])]),e("div",{staticClass:"card p-5 about"},[e("h3",{staticClass:"pb-3"},[t._v("About Our Company")]),e("div",{staticClass:"two-text"},[t._v("LLorem Ipsum is simply dummy text of the printing and typesetting industry. but also the leap into electronic typesetting, remaining essentially unchanged. It")])])])}],q={},k=q,O=(e("c90f"),Object(u["a"])(k,L,$,!1,null,null,null)),j=O.exports,M={name:"Home",components:{TopBar:n["a"],Footer:p,Three:C,WallPaperSub:y,Two:j}},W=M,B=(e("89f1"),Object(u["a"])(W,s,i,!1,null,null,null));a["default"]=B.exports},c3f5:function(t,a,e){},c90f:function(t,a,e){"use strict";var s=e("4a49"),i=e.n(s);i.a},fca2:function(t,a,e){}}]);
//# sourceMappingURL=chunk-5df149ba.93d6ae24.js.map