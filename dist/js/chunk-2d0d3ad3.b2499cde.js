(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3ad3"],{"5e7d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["catalog"===t.type?[a("div",{directives:[{name:"show",rawName:"v-show",value:t.item,expression:"item"}],staticClass:"prodCard card col-12 col-md-6 col-lg-4 mx-0 px-0 mb-5 rounded-sm border-light"},[a("div",{staticClass:"psevProdCard mx-0 px-0"},[a("button",{staticClass:"d-flex justify-content-around",on:{click:function(e){return t.addItem(t.item.id)}}},[a("i",{staticClass:"fas fa-cart-plus"}),t._v("Add to Cart ")])]),t.item.img?a("img",{staticClass:"card-img-top",attrs:{src:t.item.img[0]["path"],alt:t.item.title}}):t._e(),a("div",{staticClass:"psevProdCardBody card-body d-flex flex-column align-content-start pb-0 px-3"},[a("a",{staticClass:"card-text",attrs:{href:"#"},on:{click:function(e){return t.getOneProduct(t.item.id)}}},[t._v(t._s(t.item.title))]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("p",{staticClass:"d-flex justify-content-between"},[t._v("$"+t._s(t.item.price))]),a("button",{staticClass:"d-flex d-md-none justify-content-around",on:{click:function(e){return t.addItem(t.item.id)}}},[t._v(" Add to Cart "),a("i",{staticClass:"fas fa-cart-plus pl-2"})])])])])]:t._e(),"basket"===t.type?[a("div",{directives:[{name:"show",rawName:"v-show",value:t.item,expression:"item"}]},[a("div",{staticClass:"d-flex px-3 justify-content-between align-items-center py-1"},[a("router-link",{attrs:{to:{name:"SinglePage",params:t.item}}},[t.item.img?a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:t.item.img[0]["path"],alt:t.item.title}})]):t._e()]),a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center product__text"},[a("h3",{staticClass:"mb-0"},[t._v(t._s(t.item.title))]),t._m(0),a("p",{staticClass:"mt-1"},[t._v(t._s(+t.item.quantity)+" x $ "),a("span",{staticClass:"product__Price"},[t._v(t._s(+t.item.price))])])]),a("button",{staticClass:"dell__Product fa fa-times-circle",attrs:{name:"remove","aria-hidden":"true"},on:{click:function(e){return t.removeItem(t.item.id)}}})],1),a("div",{staticClass:"dropdown-divider mx-3"})])]:t._e()],2)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stars py-0"},[a("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}}),a("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}}),a("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}}),a("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}})])}],r={props:{type:{type:String,default:"catalog"},item:{type:Object}},methods:{getOneProduct:function(t){var e=this;this.$store.dispatch("getProductOne",t).then((function(){return e.$router.push({path:"/single-page/".concat(t)})}))},addItem:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.commit("addProduct",{itemId:t,quantity:e})},removeItem:function(t){this.$store.commit("removeProduct",{itemId:t})}},mounted:function(){}},n=r,c=a("2877"),d=Object(c["a"])(n,i,s,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d3ad3.b2499cde.js.map