(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],a[i]&&p.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},a={app:0},n=[];function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"18c5":function(t,e,r){},"1e2a":function(t,e,r){},"293a":function(t,e,r){},"3cd6":function(t,e,r){},4872:function(t,e,r){},5666:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var s={};r.r(s),r.d(s,"updateCart",function(){return me}),r.d(s,"removeItemInCart",function(){return fe}),r.d(s,"registerByEmail",function(){return ge}),r.d(s,"logout",function(){return be}),r.d(s,"loginWithEmail",function(){return ve}),r.d(s,"listenToProductList",function(){return he}),r.d(s,"getShoppingCart",function(){return Oe}),r.d(s,"saveShoppingCart",function(){return ye}),r.d(s,"saveToTransaction",function(){return Ce});r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("8c4f"),i=r("1dce"),o=r.n(i),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column sticky-footer-wrapper"},[r("app-header"),r("main",{staticClass:"flex-fill"},[r("message-component"),r("div",{staticClass:"container mrgn"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("router-view")],1)])])],1),t._m(0)],1)},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"navbar-default navbar-bottom navbar-dark bg-dark fixed-bottom"},[r("div",{staticClass:"container-fluid"},[r("p",{staticClass:"text-center nav-bar mb-0"},[t._v("Checkout repository at "),r("a",{attrs:{href:"https://github.com/McTavish420/mobile-market",target:"_blank"}},[t._v("\n              https://github.com/McTavish420/mobile-market\n            ")])])])])}],u=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),d=r("2f62"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-sm fixed-top",attrs:{role:"navigation"}},[r("router-link",{staticClass:"navbar-brand mr-auto",attrs:{to:"/"}},[r("a",{staticClass:"logo"},[t._v("Mobile Market")])]),r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTop","aria-controls":"navbarTop","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.toggleNavbar}},[r("i",{staticClass:"fa fa-bars"})]),r("div",{staticClass:"collapse navbar-collapse",class:{show:t.isNavOpen},attrs:{id:"navbarTop"}},[r("ul",{staticClass:"navbar-nav mr-auto"}),r("ul",{staticClass:"navbar-nav"},[t.isLoggedIn?t._e():r("router-link",{staticClass:"nav-item",attrs:{to:"/login",tag:"li","active-class":"active"}},[r("a",{staticClass:"nav-link"},[t._v("Sign In")])]),t.isLoggedIn?r("li",[r("a",{staticClass:"nav-link"},[r("img",{attrs:{src:"https://img.icons8.com/offices/16/000000/active-state.png"}}),t._v(" "+t._s(t.userEmail)+" ")])]):t._e(),t.isLoggedIn?r("li",{staticClass:"btn-pointer nav-item active"},[r("a",{staticClass:"nav-link",on:{click:t.logout}},[t._v("Logout")])]):t._e(),t.isLoggedIn?t._e():r("router-link",{staticClass:"nav-item",attrs:{to:"/register",tag:"li","active-class":"active"}},[r("a",{staticClass:"nav-link"},[t._v("Sign Up")])]),r("li",[r("router-link",{staticClass:"btn btn-success navbar-btn",attrs:{to:"/cart",tag:"button"}},[t._v("\n            Checkout "),r("span",{staticClass:"badge badge-light"},[t._v(t._s(t.numItems)+" (৳ "+t._s(t.cartValue)+")")])])],1)],1)])],1)},m=[];function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach(function(e){Object(u["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var b={data:function(){return{isNavOpen:!1}},computed:g({},Object(d["c"])(["isLoggedIn","cartValue","currentUser","cartItemList"]),{numItems:function(){return this.cartItemList.reduce(function(t,e){return t+=e.quantity,t},0)},userEmail:function(){return this.isLoggedIn?this.currentUser.email:""}}),methods:g({},Object(d["b"])(["logout"]),{toggleNavbar:function(){this.isNavOpen=!this.isNavOpen}})},v=b,h=(r("c9d2"),r("2877")),O=Object(h["a"])(v,p,m,!1,null,"1ebfd1db",null),y=O.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:(t.showMessageBar?"":"d-none")+" meassage-bar"},[r("div",{class:t.messageClass},[r("button",{staticClass:"btn btn-link close-btn",attrs:{bsStyle:"link"},on:{click:t.closeMessageBar}},[r("i",{staticClass:"fa fa-times"})]),r("br"),r("br"),r("div",{attrs:{clsss:"message"}},[t._v(t._s(t.currentMessage))])])])},_=[];function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(r,!0).forEach(function(e){Object(u["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var P={computed:j({},Object(d["c"])(["messages"]),{showMessageBar:function(){return this.messages.message&&this.messages.message.length>0},messageClass:function(){var t=this.messages.messageClass;return"col-12 panel panel-"+t+" "+(this.showMessageBar?"":"hidden")},currentMessage:function(){return this.messages.message}}),methods:j({},Object(d["b"])(["clearMessage"]),{closeMessageBar:function(){this.clearMessage()}})},E=P,L=(r("e661"),Object(h["a"])(E,C,_,!1,null,"320b6e70",null)),S=L.exports;function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(r,!0).forEach(function(e){Object(u["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var D={components:{appHeader:y,MessageComponent:S},methods:k({},Object(d["b"])(["getShoppingCart","listenToProductList"])),created:function(){var t=this.$store.getters.currentUser.uid;this.listenToProductList(),this.getShoppingCart({uid:t,currentCart:this.$store.getters.cartItemList})}},A=D,M=(r("89f2"),Object(h["a"])(A,c,l,!1,null,null,null)),T=M.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",class:{loadingItem:t.isProductLoading}},[t.isProductLoading?r("div",{staticClass:"row text-center"},[r("grid-loader",{attrs:{loading:t.isProductLoading,color:t.loaderColor,size:t.loaderSize}})],1):r("div",{staticClass:"row action-panel"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"btn-group btn-group-sm pull-right"},[r("button",{staticClass:"btn btn-outline-dark",attrs:{id:"list"},on:{click:function(e){return e.preventDefault(),t.changeDisplay(!0)}}},[r("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}}),t._v(" List\n\t\t\t\t")]),r("button",{staticClass:"btn btn-outline-dark",attrs:{id:"grid"},on:{click:function(e){return e.preventDefault(),t.changeDisplay(!1)}}},[r("i",{staticClass:"fa fa-th",attrs:{"aria-hidden":"true"}}),t._v(" Grid\n\t\t\t\t")])])])]),t.isProductLoading?t._e():r("div",{staticClass:"row"},t._l(t.products,function(e){return r("app-product-item",{key:e.id,attrs:{item:e,displayList:t.displayList}})}),1)])},U=[],$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3 col-sm-6 col-md-4 item",class:{"list-group-item":t.displayList}},[r("div",{staticClass:"thumbnail card"},[r("div",{staticClass:"img-event intrinsic"},[r("img",{staticClass:"grow thumbnail-image card-img-top intrinsic-item p-3",attrs:{src:t.item.thumbnail_url,alt:""}})]),r("div",{staticClass:"card-body"},[r("router-link",{staticClass:"card-title",attrs:{to:"/product/"+t.item.id,tag:"h5"}},[r("a",[t._v(t._s(t.item.title))])]),r("h6",{staticClass:"card-subtitle mb-2 remain"},[t._v(t._s(t.item.quantity)+" left in stock")]),r("p",{staticClass:"card-text truncate"},[t._v(t._s(t._f("shortDescription")(t.item.description)))]),r("div",{staticClass:"row"},[r("p",{staticClass:"col-6 lead"},[t._v("৳"+t._s(t.item.price))]),r("p",{staticClass:"col-6"},[r("button",{staticClass:"btn btn-success pull-right",attrs:{disabled:0===t.item.quantity},on:{click:t.addItem}},[t._v("\n            Add to cart\n          ")])])])],1)])])},q=[];function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(r,!0).forEach(function(e){Object(u["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var G={props:["item","displayList"],methods:N({},Object(d["b"])(["updateCart"]),{addItem:function(){var t={item:Object.assign({},this.item),quantity:1,isAdd:!0};this.updateCart(t)}}),filters:{shortDescription:function(t){return t&&t.length>100?t.substring(0,100)+"...":t}}},V=G,B=(r("5ebe"),Object(h["a"])(V,$,q,!1,null,"689dacd5",null)),z=B.exports,W=r("0d9b");function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?H(r,!0).forEach(function(e){Object(u["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var Y={data:function(){return{loaderColor:"#5cb85c",loaderSize:"50px",displayList:!1}},computed:F({},Object(d["c"])(["products","isProductLoading"])),components:{appProductItem:z,GridLoader:W["a"]},methods:{changeDisplay:function(t){this.displayList=t}}},Q=Y,J=(r("b00a"),Object(h["a"])(Q,x,U,!1,null,null,null)),K=J.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container table-responsive"},[r("table",{staticClass:"table table-hover table-sm",attrs:{id:"cart"}},[t._m(0),r("transition-group",{attrs:{name:"list-shopping-cart",tag:"tbody"}},t._l(t.cartItemList,function(t){return r("app-cart-item",{key:t.id,attrs:{cartItem:t}})}),1),r("tfoot",[r("tr",{staticClass:"d-table-row d-sm-none"},[r("td",{staticClass:"text-center"},[r("strong",[t._v("Total ৳"+t._s(t.cartValue))])])]),r("tr",[r("td",[r("button",{staticClass:"btn btn-warning",on:{click:t.saveShoppingCartLocal}},[r("i",{staticClass:"fa fa-angle-left"}),t._v(" Save and Continue Shopping\n\t\t\t\t\t\t")])]),r("td",{staticClass:"d-none d-sm-table-cell",attrs:{colspan:"2"}}),r("td",{staticClass:"d-none d-sm-table-cell text-center"},[r("strong",[t._v("Total ৳"+t._s(t.cartValue))])]),r("td",{staticClass:"px-0"},[r("button",{staticClass:"btn btn-success",on:{click:t.checkout}},[t._m(1)])])])])],1)])},X=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticStyle:{width:"50%"}},[t._v("Product")]),r("th",{staticStyle:{width:"10%"}},[t._v("Price")]),r("th",{staticStyle:{width:"8%"}},[t._v("Quantity")]),r("th",{staticClass:"text-center",staticStyle:{width:"22%"}},[t._v("Subtotal")]),r("th",{staticStyle:{width:"10%"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"text-nowrap"},[t._v("Checkout "),r("i",{staticClass:"fa fa-angle-right d-inline"})])}],tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",{attrs:{"data-th":"Product"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-2 d-none d-sm-block"},[r("img",{staticClass:"img-fluid",attrs:{src:t.cartItem.thumbnail_url,alt:"..."}})]),r("div",{staticClass:"col-sm-10"},[r("h4",{staticClass:"nomargin"},[t._v(t._s(t.cartItem.title))]),r("p",[t._v(t._s(t.cartItem.description))])])])]),r("td",{attrs:{"data-th":"Price"}},[t._v(t._s(t.cartItem.price))]),r("td",{attrs:{"data-th":"Quantity"}},[r("input",{staticClass:"form-control text-center",attrs:{type:"number",min:"0"},domProps:{value:t.cartItem.quantity},on:{input:t.updateQuantity}})]),r("td",{staticClass:"text-center",attrs:{"data-th":"Subtotal"}},[t._v("৳"+t._s(t.subtotal))]),r("td",{staticClass:"actions",attrs:{"data-th":""}},[r("button",{staticClass:"btn btn-danger btn-sm",on:{click:t.removeItem}},[r("i",{staticClass:"fa fa-trash-o"})])])])},et=[];function rt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function st(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?rt(r,!0).forEach(function(e){Object(u["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rt(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var at={props:["cartItem"],computed:{subtotal:function(){return this.cartItem.quantity*this.cartItem.price}},methods:st({},Object(d["b"])(["updateCart","removeItemInCart"]),{removeItem:function(){var t=this;this.removeItemInCart({item:t.cartItem})},updateQuantity:function(t){var e=this;this.updateCart({item:e.cartItem,quantity:parseInt(t.target.value),isAdd:!1})}})},nt=at,it=Object(h["a"])(nt,tt,et,!1,null,null,null),ot=it.exports;function ct(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function lt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ct(r,!0).forEach(function(e){Object(u["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ct(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var ut={computed:lt({},Object(d["c"])(["cartItemList","isLoggedIn","products","currentUser","cartValue"])),components:{appCartItem:ot},methods:lt({},Object(d["b"])(["saveShoppingCart","addMessage","saveToTransaction","clearCart"]),{checkValidCart:function(t,e){var r=!0,s="";return t.map(function(t){for(var a=0;a<e.length;a++)if(e[a].id==t.id){if(e[a].quantity<t.quantity)return s="Only ".concat(e[a].quantity," ").concat(t.title," available in stock"),void(r=!1);break}}),{isValid:r,message:s}},saveShoppingCartLocal:function(){var t=this;if(this.isLoggedIn){var e=this.checkValidCart(this.cartItemList,this.products),r=e.isValid,s=e.message;r?this.saveShoppingCart({cartItemList:this.cartItemList,uid:this.currentUser.uid}).then(function(){t.addMessage({messageClass:"success",message:"Your shopping cart is saved successfully"}),t.$router.push("/")}):this.addMessage({messageClass:"danger",message:s})}else this.addMessage({messageClass:"warning",message:"Please login to save your cart"})},checkout:function(){var t=this;if(this.isLoggedIn){if(!this.cartItemList||0==this.cartItemList.length)return void this.addMessage({messageClass:"warning",message:"Your cart is empty!"});var e=this.checkValidCart(this.cartItemList,this.products),r=e.isValid,s=e.message;r?this.saveToTransaction({cartItemList:this.cartItemList,uid:this.currentUser.uid}).then(function(){t.addMessage({messageClass:"success",message:"Your order has been successfully processed!"}),t.saveShoppingCart({cartItemList:[],uid:t.currentUser.uid}),t.clearCart(),t.$router.push("/")}):this.addMessage({messageClass:"danger",message:s})}else this.addMessage({messageClass:"warning",message:"Please login to checkout"})}})},dt=ut,pt=(r("bc60"),Object(h["a"])(dt,Z,X,!1,null,"20a6bb09",null)),mt=pt.exports,ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"col-md-12"},[t.isProductLoading?r("div",{staticClass:"text-center"},[r("grid-loader",{staticClass:"d-inline-block",attrs:{loading:t.isProductLoading,color:t.loaderColor,size:t.loaderSize}})],1):r("div",{staticClass:"card"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-4 offset-md-4"},[r("div",{staticClass:"intrinsic"},[r("img",{staticClass:"img-fluid intrinsic-item",attrs:{src:t.item.thumbnail_url,alt:""}})])])]),r("div",{staticClass:"caption-full"},[r("h4",{staticClass:"pull-right"},[t._v("$ "+t._s(t.item.price))]),r("h4",[t._v(" "+t._s(t.item.title))]),r("p",[t._v(" "+t._s(t.item.description)+" ")]),r("li",[t._v("Processor: "+t._s(t.item.Processor)+" ")]),r("li",[t._v("RAM: "+t._s(t.item.RAM)+" ")]),r("li",[t._v("ROM: "+t._s(t.item.ROM)+" ")]),r("li",[t._v("Display Size: "+t._s(t.item.Display_Size)+" ")]),r("li",[t._v("Camera Rear: "+t._s(t.item.Camera_Rear)+" ")]),r("li",[t._v("Camera Front: "+t._s(t.item.Camera_Front)+" ")]),r("li",[t._v("Battery Capacity: "+t._s(t.item.Battery_Capacity)+" ")]),r("li",[t._v("Network: "+t._s(t.item.Network)+" ")]),r("li",[t._v("Dimensions: "+t._s(t.item.Dimensions)+" ")])]),r("div",{staticClass:"ratings"},[r("span",[t._v(t._s(t.item.quantity)+" left in stock")]),r("p",{staticClass:"pull-right"},[r("button",{staticClass:"btn btn-success",attrs:{disabled:0===t.item.quantity},on:{click:t.addItem}},[t._v("\n                            Add to cart\n                        ")])]),r("div",{staticClass:"clearfix"})])])])])},gt=[];function bt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function vt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?bt(r,!0).forEach(function(e){Object(u["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):bt(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var ht={components:{GridLoader:W["a"]},data:function(){return{loaderColor:"#5cb85c",loaderSize:"50px"}},computed:vt({},Object(d["c"])(["isProductLoading","products"]),{item:function(){var t=this.$route.params.id;if(this.products.length>=t){var e=this.products.filter(function(e){return e.id==t});if(e.length>0)return e[0]}return{}}}),methods:vt({},Object(d["b"])(["updateCart"]),{addItem:function(){var t={item:Object.assign({},this.item),quantity:1,isAdd:!0};this.updateCart(t)}})},Ot=ht,yt=(r("6d90"),Object(h["a"])(Ot,ft,gt,!1,null,"d44b55f2",null)),Ct=yt.exports,_t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-sm-10 offset-sm-1"},[r("form",{staticClass:"signup-form",attrs:{role:"form"}},[t._m(0),r("div",{staticClass:"input"},[r("label",{attrs:{for:"email"}},[t._v("Your Email Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"Email Address",value:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"input"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("div",{staticClass:"submit"},[r("button",{staticStyle:{width:"100%"},attrs:{disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.registerByEmailLocal(e)}}},[t.isLoading?r("i",{staticClass:"fa fa-spinner fa-spin"}):t._e(),t._v("\n            Register\n          ")])])])])])},wt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{staticClass:"text-center"},[r("strong",[t._v("Sign Up")])])}];function jt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function Pt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?jt(r,!0).forEach(function(e){Object(u["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):jt(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var Et={data:function(){return{email:"",password:"",isLoading:!1}},methods:Pt({},Object(d["b"])(["clearMessage","addMessage","registerByEmail"]),{registerByEmailLocal:function(){var t=this;this.isLoading=!0;var e={email:this.email,password:this.password};this.registerByEmail(e).then(function(){t.clearMessage(),t.$router.push({name:"mainpage"})}).catch(function(e){var r={message:e.message,messageClass:"danger",autoClose:!0};t.addMessage(r)}).then(function(){t.isLoading=!1})}})},Lt=Et,St=(r("ba1c"),Object(h["a"])(Lt,_t,wt,!1,null,"212c0f7d",null)),It=St.exports,kt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"signup-form",attrs:{role:"form"}},[t._m(0),r("div",{staticClass:"input"},[r("label",{attrs:{for:"email"}},[t._v("Email Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"Enter Your Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"input"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("div",{staticClass:"submit"},[r("button",{staticStyle:{width:"100%"},attrs:{disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.loginWithEmailLocal(e)}}},[t.isLoading?r("i",{staticClass:"fa fa-spinner fa-spin"}):t._e(),t._v("\n\t\t\t\t\t\tSign in\n\t\t\t\t\t")])])])},Dt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{staticClass:"text-center"},[r("strong",[t._v("Sign In")])])}];function At(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function Mt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?At(r,!0).forEach(function(e){Object(u["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):At(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var Tt={data:function(){return{email:"",password:"",isLoading:!1}},methods:Mt({},Object(d["b"])(["addMessage","clearMessage","loginWithEmail"]),{loginWithEmailLocal:function(){var t=this;this.isLoading=!0;var e={email:this.email,password:this.password};this.loginWithEmail(e).then(function(){t.clearMessage(),t.$router.push({name:"mainpage"})}).catch(function(e){var r={message:e.message,messageClass:"danger",autoClose:!0};t.addMessage(r)}).then(function(){t.isLoading=!1})}})},xt=Tt,Ut=(r("5f3b"),Object(h["a"])(xt,kt,Dt,!1,null,"7f903d54",null)),$t=Ut.exports,qt=[{path:"/",component:K,name:"mainpage"},{path:"/product/:id",component:Ct,name:"product"},{path:"/cart",component:mt,name:"shoppingcart"},{path:"/register",component:It,name:"register",onlyGuest:!0},{path:"/login",component:$t,name:"login",onlyGuest:!0},{path:"*",redirect:"/"}],Rt=r("8aa5"),Nt=r.n(Rt),Gt={apiKey:"AIzaSyBSHahqSKNdF9NsatEHUPmVMZ0pEdALW9w",authDomain:"mobile-market-6d4e2.firebaseapp.com",databaseURL:"https://mobile-market-6d4e2.firebaseio.com",projectId:"mobile-market-6d4e2",storageBucket:"mobile-market-6d4e2.appspot.com",messagingSenderId:"1028900346767",appId:"1:1028900346767:web:dca47c31af4920f0"};function Vt(t){Nt.a.auth().onAuthStateChanged(function(e){e?t(!0,e):t(!1)},function(t){console.log(t)})}Nt.a.initializeApp(Gt);var Bt=Nt.a.database().ref(),zt=Nt.a.auth;r("7514");function Wt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function Ht(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Wt(r,!0).forEach(function(e){Object(u["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Wt(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var Ft={cartItemList:[]},Yt={UPDATE_CART:function(t,e){var r=e.item,s=e.quantity,a=e.isAdd,n=t.cartItemList.find(function(t){return t.id==r.id});n?a?n.quantity+=s:n.quantity=s:t.cartItemList.push(Ht({},r,{quantity:s}))},SET_CART:function(t,e){e&&(t.cartItemList=e)},REMOVE_CART_ITEM:function(t,e){var r=e.item,s=t.cartItemList.find(function(t){return t.id==r.id});t.cartItemList.splice(t.cartItemList.indexOf(s),1)}},Qt={clearCart:function(t){var e=t.commit;e("SET_CART",[])}},Jt={cartItemList:function(t){return t.cartItemList},cartValue:function(t){var e=0;return t.cartItemList.map(function(t){e+=t.price*t.quantity}),e}},Kt={state:Ft,mutations:Yt,actions:Qt,getters:Jt},Zt={isLoading:!0,productList:[]},Xt={UPDATE_PRODUCT_LIST:function(t,e){t.productList=e,t.isLoading=!1}},te={},ee={products:function(t){return t.productList},isProductLoading:function(t){return t.isLoading}},re={state:Zt,mutations:Xt,actions:te,getters:ee},se={isLoggedIn:null!=zt().currentUser,user:zt().currentUser},ae={AUTH_STATUS_CHANGE:function(t){t.isLoggedIn=null!=zt().currentUser,t.user=zt().currentUser}},ne={},ie={isLoggedIn:function(t){return t.isLoggedIn},currentUser:function(t){return t&&t.user?{email:t.user.email,emailVerified:t.user.emailVerified,uid:t.user.uid}:{}}},oe={state:se,mutations:ae,actions:ne,getters:ie},ce={messageGroup:{messageClass:"",message:"",timeoutEvent:null}},le={ADD_MESSAGE:function(t,e){var r=e.message,s=e.messageClass;t.messageGroup={messageClass:s,message:r},t.timeoutEvent&&clearTimeout(t.timeoutEvent),t.timeoutEvent=setTimeout(function(){t.messageGroup={messageClass:"",message:""}},5e3)},CLEAR_MESSAGE:function(t){t.messageGroup={messageClass:"",message:""}}},ue={addMessage:function(t,e){var r=t.commit;r("ADD_MESSAGE",e)},clearMessage:function(t){var e=t.commit;e("CLEAR_MESSAGE")}},de={messages:function(t){return t.messageGroup}},pe={state:ce,mutations:le,actions:ue,getters:de},me=function(t,e){var r=t.commit,s=e.item,a=e.quantity,n=e.isAdd;if(r("UPDATE_CART",{item:s,quantity:a,isAdd:n}),n){var i={message:"Add ".concat(s.title," to cart successfully"),messageClass:"success",autoClose:!0};r("ADD_MESSAGE",i)}},fe=function(t,e){var r=t.commit,s=e.item;r("REMOVE_CART_ITEM",{item:s})},ge=function(t,e){var r=e.email,s=e.password;return zt().createUserWithEmailAndPassword(r,s)},be=function(t){var e=t.commit;return e("SET_CART",[]),zt().signOut()};function ve(t,e){var r=e.email,s=e.password;return zt().signInWithEmailAndPassword(r,s)}function he(t){var e=t.commit;return Bt.child("products").on("value",function(t){e("UPDATE_PRODUCT_LIST",t.val())})}function Oe(t,e){var r=t.commit,s=e.uid,a=e.currentCart;if(s)return Bt.child("cart/"+s).once("value").then(function(t){!t.val()||a&&0!=a.length||r("SET_CART",t.val())});console.log("User has not Logged in")}function ye(t,e){var r=e.uid,s=e.cartItemList;return Bt.child("cart/"+r).set(s)}function Ce(t,e){var r=e.uid,s=e.cartItemList,a=Bt.child("transaction").push().key,n={};return n["/transactions/"+r+"/"+a]=s,Bt.update(n)}a["a"].use(d["a"]);var _e=new d["a"].Store({actions:s,modules:{auth:oe,cart:Kt,products:re,messages:pe}}),we=r("9483");Object(we["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var je=r("f309");a["a"].use(je["a"]);var Pe=new je["a"]({icons:{iconfont:"fa"}});r("d5e8"),r("15f5");a["a"].use(n["a"]),Vt(Le),a["a"].config.productionTip=!1;var Ee=new n["a"]({mode:"history",routes:qt});function Le(t,e){_e&&(_e.commit("AUTH_STATUS_CHANGE"),e&&_e.dispatch("getShoppingCart",{uid:e.uid,currentCart:_e.getters.cartItemList}))}a["a"].use(o.a),new a["a"]({el:"#app",router:Ee,store:_e,vuetify:Pe,render:function(t){return t(T)}})},"5ebe":function(t,e,r){"use strict";var s=r("5666"),a=r.n(s);a.a},"5f3b":function(t,e,r){"use strict";var s=r("ccf9"),a=r.n(s);a.a},"6d90":function(t,e,r){"use strict";var s=r("9c0a"),a=r.n(s);a.a},"89f2":function(t,e,r){"use strict";var s=r("293a"),a=r.n(s);a.a},"9c0a":function(t,e,r){},b00a:function(t,e,r){"use strict";var s=r("18c5"),a=r.n(s);a.a},ba1c:function(t,e,r){"use strict";var s=r("1e2a"),a=r.n(s);a.a},bc60:function(t,e,r){"use strict";var s=r("bde1"),a=r.n(s);a.a},bde1:function(t,e,r){},c9d2:function(t,e,r){"use strict";var s=r("3cd6"),a=r.n(s);a.a},ccf9:function(t,e,r){},e661:function(t,e,r){"use strict";var s=r("4872"),a=r.n(s);a.a}});
//# sourceMappingURL=app.bb9d3c83.js.map