(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16bb6314"],{"31dd":function(t,e,i){"use strict";i("a9ad")},"95a5":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"prodHeaders row col-12 d-flex justify-content-between mt-4 mb-3 text-uppercase"},[i("div",{staticClass:"row col-5 img-responsive"},[i("div",{staticClass:"productDet d-flex"},[i("router-link",{attrs:{to:{name:"SinglePage",params:t.item}}},[t.item.img?i("img",{attrs:{src:t.item.img[0]["path"],alt:t.item.title}}):t._e()]),i("div",{staticClass:"ProdDetText d-flex flex-column ml-3 text-capitalize "},[i("router-link",{staticClass:"item__name",attrs:{to:{name:"SinglePage",params:t.item}}},[i("h3",{staticClass:"my-2"},[t._v(t._s(t.item.title))])]),i("span",[t._v("Color: "),i("mark",[t._v(t._s(t.item.color))])]),i("span",[t._v("Size: "),i("mark",[t._v(t._s(t.item.size))])])],1)],1)]),i("div",{staticClass:"row col-7 d-flex"},[i("span",{staticClass:"col-12 col-md-3 d-flex justify-content-center align-items-center"},[t._v("$"+t._s(+t.item.price))]),i("div",{staticClass:"ProdHeadInp col-12 col-md-3 d-flex justify-content-center align-items-center"},[i("label",[i("input",{attrs:{type:"number",min:"1",max:"20",step:"1",quantity:t.quantity,required:"",pattern:"^[0-9]+$"},on:{change:function(e){return t.updateProduct(t.item.id,t.quantity)}}})])]),i("span",{staticClass:"col-12 col-md-2 pl-md-0 d-flex justify-content-center align-items-center"},[t._v("free")]),i("span",{staticClass:"col-12 col-md-2 d-flex justify-content-center align-items-center"},[t._v("$"+t._s(+t.item.price*+t.item.quantity))]),i("button",{staticClass:"dell__Product fa fa-times-circle d-flex col-12 col-md-2 justify-content-center align-items-center",attrs:{name:"remove","data-id":"${item.id}","aria-hidden":"true"},on:{click:function(e){return t.removeItem(t.item.id)}}})])])},a=[],s=(i("d3b7"),function(){return i.e("chunk-2d0d3ad3").then(i.bind(null,"5e7d"))}),c={name:"ItemShopCart",components:{Item:s},data:function(){return{quantity:0}},props:{type:{type:String},item:{type:Object}},methods:{removeItem:function(t){this.$store.commit("removeProduct",{itemId:t})},updateProduct:function(t,e){this.$store.commit("updateProduct",{itemId:t,quantity:e})}},mounted:function(){}},r=c,o=(i("31dd"),i("2877")),l=Object(o["a"])(r,n,a,!1,null,null,null);e["default"]=l.exports},a9ad:function(t,e,i){}}]);
//# sourceMappingURL=chunk-16bb6314.0b9c8732.js.map