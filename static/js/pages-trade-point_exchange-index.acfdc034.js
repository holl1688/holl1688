(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-point_exchange-index"],{"2ad0":function(a,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return e}));var e={uniLoadMore:r("ea4e").default},d=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("scroller",{staticClass:"fixed page"},[r("list",{staticClass:"flex-1 pad-left-sm pad-right-sm pad-top-sm",attrs:{"show-scrollbar":"false"}},[a._l(a.list,(function(t,e){return r("cell",{staticClass:"row middle bg-white radius-xs"},[r("v-uni-image",{staticClass:"product radius-xs margin-bottom-sm",attrs:{src:t.img}}),r("v-uni-view",{staticClass:"product-info flex-1 margin-left-sm around"},[r("v-uni-view",{staticClass:"row middle"},[r("v-uni-text",[a._v(a._s(t.pname))]),r("v-uni-text",{staticClass:"product-code radius-xl size24 text-center"},[a._v(a._s(t.product_code))])],1),r("v-uni-text",{staticClass:"size24 gray"},[a._v("当前 / 价值")]),r("v-uni-view",{staticClass:"row foot"},[r("v-uni-text",{staticClass:"firebrick size30"}),r("v-uni-text",{staticClass:"firebrick"},[a._v(a._s(t.current_price))])],1),r("v-uni-view",{staticClass:"row foot"},[r("v-uni-text",{staticClass:"size24"}),r("v-uni-text",{staticClass:"size30"},[a._v("0")])],1)],1),r("v-uni-button",{staticClass:"margin-right-sm radius-base",attrs:{type:"warn",plain:"true",size:"mini"},on:{click:function(r){arguments[0]=r=a.$handleEvent(r),a.navigate("/pages/trade/list/index?id="+t.id+"&pname="+t.pname)}}},[a._v("兑换")])],1)})),a.more?r("header",[r("uni-load-more",{attrs:{status:a.more}})],1):a._e()],2)],1)},i=[]},"3df4":function(a,t,r){"use strict";var e=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.plateList=i,t.plateDetail=o,t.userScore=n,t.payType=f,t.payTypeEdit=g,t.tradeList=s,t.sell=l,t.sellThree=p,t.pay=c,t.buy=u,t.confirmOrder=v,t.placeOrdercom=m,t.sellInfo=b,t.sellList=h,t.buyList=x,t.tradeDetail=w,t.postProof=k,t.sellCancel=y,t.buyCancel=z,t.confirmTrade=_,t.appeal=C,t.getUser=L,t.transfer=G,t.confirmReceive=O,t.concelReceive=U,t.tradeLog=j;var d=e(r("f3de"));function i(a){return d.default.post("User/bantongList",a)}function o(a){return d.default.post("User/bantongGetOne",{bantong_id:a})}function n(){return d.default.post("User/getUserzhi")}function f(){return d.default.post("User/getWithdrawal")}function g(a){return d.default.post("User/setWithdrawal",a)}function s(a){return d.default.get("/gamai/selectGamai",a)}function l(a){return d.default.post("/gamai/add",a)}function p(a){return d.default.post("/Gamai/addbantong3",a)}function c(a){return d.default.post("/User/user_pay",a)}function u(a,t){return d.default.post("/gamai/transaction",{id:a,pay_pwd:t})}function v(a){return d.default.post("Order/confirmOrder",{zhicount:a})}function m(a){return d.default.post("Order/placeOrdercom",{zhicount:a})}function b(){return d.default.get("/gamai/userOneGamai")}function h(a){return d.default.get("/gamai/gamaiList",a)}function x(a){return d.default.post("/Gamai/orderList",a)}function w(a){return d.default.post("/gamai/oneGamai",a)}function k(a){return d.default.post("/gamai/addComplete",a)}function y(a){return d.default.post("/gamai/shqxGamai",{id:a})}function z(a){return d.default.post("/gamai/mjqxGamai",{id:a})}function _(a){return d.default.post("/gamai/confirmGamai",{id:a})}function C(a,t){return d.default.post("/gamai/addAppeal",{gamai_id:a,appeal_content:t})}function L(a){return d.default.post("/User/pay_get_user",{name:a})}function G(a){return d.default.post("/User/user_pay",a)}function O(a){return d.default.post("/Gamai/user_transaction",a)}function U(a){return d.default.post("/Gamai/user_qx_gamai",a)}function j(a){return d.default.post("/Gamai/moneyLog_list",a)}},"47b4":function(a,t,r){var e=r("ef14");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var d=r("4f06").default;d("7650b15b",e,!0,{sourceMap:!1,shadowMode:!1})},"65b9":function(a,t,r){"use strict";var e=r("47b4"),d=r.n(e);d.a},"6a20":function(a,t,r){"use strict";r.r(t);var e=r("f066"),d=r.n(e);for(var i in e)"default"!==i&&function(a){r.d(t,a,(function(){return e[a]}))}(i);t["default"]=d.a},9057:function(a,t,r){"use strict";r.r(t);var e=r("2ad0"),d=r("6a20");for(var i in d)"default"!==i&&function(a){r.d(t,a,(function(){return d[a]}))}(i);r("65b9");var o,n=r("f0c5"),f=Object(n["a"])(d["default"],e["b"],e["c"],!1,null,"2f071062",null,!1,e["a"],o);t["default"]=f.exports},ef14:function(a,t,r){var e=r("24fb");t=e(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 布局 */.row[data-v-2f071062]{display:flex;flex-direction:row}.column[data-v-2f071062]{display:flex;flex-direction:column}.index-1[data-v-2f071062]{z-index:1}.index-10[data-v-2f071062]{z-index:10}.index-100[data-v-2f071062]{z-index:10}.lines-1[data-v-2f071062]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page[data-v-2f071062]{top:0;left:0;right:0;bottom:0}.fixed[data-v-2f071062]{position:fixed}.top-right[data-v-2f071062]{top:0;right:0}.top-left[data-v-2f071062]{top:0;left:0}.bottom-right[data-v-2f071062]{bottom:0;right:0}.top[data-v-2f071062]{top:0}.bottom[data-v-2f071062]{bottom:0}.absolute[data-v-2f071062]{position:absolute}.relative[data-v-2f071062]{position:relative}.row-reverse[data-v-2f071062]{flex-direction:row-reverse}.between[data-v-2f071062]{justify-content:space-between}.around[data-v-2f071062]{justify-content:space-around}.widthMax[data-v-2f071062]{width:%?750?%}.height-750[data-v-2f071062]{height:%?750?%}.margin-base[data-v-2f071062]{margin:%?30?% %?30?%}.margin-lg[data-v-2f071062]{margin:%?40?% %?40?%}.margin-xl[data-v-2f071062]{margin:%?50?% %?50?%}.margin-sm[data-v-2f071062]{margin:%?20?% %?20?%}.margin-xs[data-v-2f071062]{margin:%?10?% %?10?%}.margin-right-xl[data-v-2f071062]{margin-right:%?50?%}.margin-right-lg[data-v-2f071062]{margin-right:%?40?%}.margin-right-base[data-v-2f071062]{margin-right:%?30?%}.margin-right-xs[data-v-2f071062]{margin-right:%?10?%}.margin-right-sm[data-v-2f071062]{margin-right:%?20?%}.margin-left-xl[data-v-2f071062]{margin-left:%?50?%}.margin-left-lg[data-v-2f071062]{margin-left:%?40?%}.margin-left-base[data-v-2f071062]{margin-left:%?30?%}.margin-left-sm[data-v-2f071062]{margin-left:%?20?%}.margin-left-xs[data-v-2f071062]{margin-left:%?10?%}.margin-top-xl[data-v-2f071062]{margin-top:%?50?%}.margin-top-lg[data-v-2f071062]{margin-top:%?40?%}.margin-top-base[data-v-2f071062]{margin-top:%?30?%}.margin-top-sm[data-v-2f071062]{margin-top:%?20?%}.margin-top-xs[data-v-2f071062]{margin-top:%?10?%}.margin-bottom-xl[data-v-2f071062]{margin-bottom:%?50?%}.margin-bottom-base[data-v-2f071062]{margin-bottom:%?30?%}.margin-bottom-sm[data-v-2f071062]{margin-bottom:%?20?%}.margin-bottom-xs[data-v-2f071062]{margin-bottom:%?10?%}.margin-horizontal-xs[data-v-2f071062]{margin-left:%?10?%;margin-right:%?10?%}.margin-horizontal-sm[data-v-2f071062]{margin-left:%?20?%;margin-right:%?20?%}.margin-horizontal-base[data-v-2f071062]{margin-left:%?30?%;margin-right:%?30?%}.margin-horizontal-lg[data-v-2f071062]{margin-left:%?40?%;margin-right:%?40?%}.margin-horizontal-xl[data-v-2f071062]{margin-left:%?50?%;margin-right:%?50?%}.margin-vertical-xs[data-v-2f071062]{margin-top:%?10?%;margin-bottom:%?10?%}.margin-vertical-sm[data-v-2f071062]{margin-top:%?20?%;margin-bottom:%?20?%}.margin-vertical-base[data-v-2f071062]{margin-top:%?30?%;margin-bottom:%?30?%}.margin-vertical-lg[data-v-2f071062]{margin-top:%?40?%;margin-bottom:%?40?%}.margin-vertical-xl[data-v-2f071062]{margin-top:%?50?%;margin-bottom:%?50?%}.pad-xl[data-v-2f071062]{padding:%?50?% %?50?%}.pad-lg[data-v-2f071062]{padding:%?40?% %?40?%}.pad-base[data-v-2f071062]{padding:%?30?% %?30?%}.pad-sm[data-v-2f071062]{padding:%?20?% %?20?%}.pad-xs[data-v-2f071062]{padding:%?10?% %?10?%}.pad-top-lg[data-v-2f071062]{padding-top:%?40?%}.pad-top-xl[data-v-2f071062]{padding-top:%?50?%}.pad-top-base[data-v-2f071062]{padding-top:%?30?%}.pad-top-sm[data-v-2f071062]{padding-top:%?20?%}.pad-top-xs[data-v-2f071062]{padding-top:%?10?%}.pad-left-xl[data-v-2f071062]{padding-left:%?50?%}.pad-left-lg[data-v-2f071062]{padding-left:%?40?%}.pad-left-base[data-v-2f071062]{padding-left:%?30?%}.pad-left-sm[data-v-2f071062]{padding-left:%?20?%}.pad-left-xs[data-v-2f071062]{padding-left:%?10?%}.pad-right-xl[data-v-2f071062]{padding-right:%?50?%}.pad-right-lg[data-v-2f071062]{padding-right:%?40?%}.pad-right-base[data-v-2f071062]{padding-right:%?30?%}.pad-right-sm[data-v-2f071062]{padding-right:%?20?%}.pad-right-xs[data-v-2f071062]{padding-right:%?10?%}.pad-bottom-xl[data-v-2f071062]{padding-bottom:%?50?%}.pad-bottom-base[data-v-2f071062]{padding-bottom:%?30?%}.pad-bottom-sm[data-v-2f071062]{padding-bottom:%?20?%}.pad-bottom-xs[data-v-2f071062]{padding-bottom:%?10?%}.pad-horizontal-xs[data-v-2f071062]{padding-left:%?10?%;padding-right:%?10?%}.pad-horizontal-sm[data-v-2f071062]{padding-left:%?20?%;padding-right:%?20?%}.pad-horizontal-base[data-v-2f071062]{padding-left:%?30?%;padding-right:%?30?%}.pad-horizontal-lg[data-v-2f071062]{padding-left:%?40?%;padding-right:%?40?%}.pad-horizontal-xl[data-v-2f071062]{padding-left:%?50?%;padding-right:%?50?%}.pad-vertical-xs[data-v-2f071062]{padding-top:%?10?%;padding-bottom:%?10?%}.pad-vertical-sm[data-v-2f071062]{padding-top:%?20?%;padding-bottom:%?20?%}.pad-vertical-base[data-v-2f071062]{padding-top:%?30?%;padding-bottom:%?30?%}.pad-vertical-lg[data-v-2f071062]{padding-top:%?40?%;padding-bottom:%?40?%}.pad-vertical-xl[data-v-2f071062]{padding-top:%?50?%;padding-bottom:%?50?%}.text-center[data-v-2f071062]{text-align:center}.center[data-v-2f071062]{justify-content:center}.start[data-v-2f071062]{justify-content:flex-start}.end[data-v-2f071062]{justify-content:flex-end}.middle[data-v-2f071062]{align-items:center}.head[data-v-2f071062]{align-items:flex-start}.foot[data-v-2f071062]{align-items:flex-end}.flex-1[data-v-2f071062]{flex:1}.nowrap[data-v-2f071062]{flex-wrap:nowrap}.wrap[data-v-2f071062]{flex-wrap:wrap}.wrap-reverse[data-v-2f071062]{flex-wrap:wrap-reverse}\r\n/* 样式 */.ellipsis[data-v-2f071062]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ellipsis[data-v-2f071062]{text-overflow:ellipsis}.lines-1[data-v-2f071062]{lines:1}.bg-white[data-v-2f071062]{background-color:#fff}.bg-gray[data-v-2f071062]{background-color:grey}.bg-green[data-v-2f071062]{background-color:green}.bg-orange[data-v-2f071062]{background-color:orange}.bg-pink[data-v-2f071062]{background-color:pink}.bg-base[data-v-2f071062]{background-color:#ebebeb}.bg-black[data-v-2f071062]{background-color:#000}.bg-ghostwhite[data-v-2f071062]{background-color:#f8f8f8}.bg-blue[data-v-2f071062]{background-color:#00f}.bg-red[data-v-2f071062]{background-color:red}.bg-firebrick[data-v-2f071062]{background-color:#b22222}.bg-firebrick[data-v-2f071062]{background-color:#b22222}.bg-lightyellow[data-v-2f071062]{background-color:#ffffe0}.bg-peachpuff[data-v-2f071062]{background-color:#ffdab9}.gradient-peachpuff[data-v-2f071062]{background:linear-gradient(180deg,#ffdab9,#fdb676)}.gradient-blue[data-v-2f071062]{background:linear-gradient(180deg,#589cf8,#035acf)}.gradient-pink[data-v-2f071062]{background:linear-gradient(180deg,#fb8484,#fd5454)}.gradient-yellow[data-v-2f071062]{background:linear-gradient(180deg,#f3ea8b,#635424)}.gradient-pink-row[data-v-2f071062]{background:linear-gradient(90deg,#fb8484,#fd5454)}.gradient-cyan[data-v-2f071062]{background:linear-gradient(180deg,#05d4ce,#01939e)}.gradient-red[data-v-2f071062]{background:linear-gradient(180deg,red,#f5f5f5)}.gradient-base[data-v-2f071062]{background:linear-gradient(180deg,#fff,#f8f8f8)}.size12[data-v-2f071062]{font-size:%?12?%}.size20[data-v-2f071062]{font-size:%?20?%}.size24[data-v-2f071062]{font-size:%?24?%}.size30[data-v-2f071062]{font-size:%?30?%}.size40[data-v-2f071062]{font-size:%?40?%}.size80[data-v-2f071062]{font-size:%?80?%}.bold[data-v-2f071062]{font-weight:700}.text-center[data-v-2f071062]{text-align:center}.border-white[data-v-2f071062]{border:1px solid #f1f1f1}.border-red[data-v-2f071062]{border:1px solid #ee5a52}.border-gray[data-v-2f071062]{border:1px dashed grey}.border-gray-s[data-v-2f071062]{border:1px solid grey}.border-base[data-v-2f071062]{border:1px solid #ebebeb}.border-black[data-v-2f071062]{border:1px solid #000}.border-top[data-v-2f071062]{border-top:1px solid #ebebeb}.border-bottom[data-v-2f071062]{border-bottom:1px solid #ebebeb}.border-bottom-lightgray[data-v-2f071062]{border-bottom:1px solid #d3d3d3}.border-bottom-gray[data-v-2f071062]{border-bottom:1px solid #e0e0e0}.border-bottom-2[data-v-2f071062]{border-bottom:%?2?% solid #f0f0f0}.line-coffee[data-v-2f071062]{border-bottom:%?1?% solid #af6a5b}.radius-xl[data-v-2f071062]{border-radius:%?50?%}.radius-lg[data-v-2f071062]{border-radius:%?30?%}.radius-base[data-v-2f071062]{border-radius:%?20?%}.radius-sm[data-v-2f071062]{border-radius:%?12?%}.radius-xs[data-v-2f071062]{border-radius:%?8?%}.black[data-v-2f071062]{color:#000}.orange[data-v-2f071062]{color:orange}.dark-orange[data-v-2f071062]{color:#d84606}.white[data-v-2f071062]{color:#fff}.gray[data-v-2f071062]{color:grey}.red[data-v-2f071062]{color:red}.green[data-v-2f071062]{color:#33ae84}.firebrick[data-v-2f071062]{color:#b22222}.blue[data-v-2f071062]{color:#00f}.light-blue[data-v-2f071062]{color:#87cefa}.turquoise[data-v-2f071062]{color:#40e0d0}.base[data-v-2f071062]{color:#ebebeb}.slateblue[data-v-2f071062]{color:#6a5acd}.light-gray[data-v-2f071062]{color:hsla(0,0%,100%,.6)}.line-through[data-v-2f071062]{text-decoration:line-through}.header[data-v-2f071062]{height:%?106?%;background-color:#333}.head-left[data-v-2f071062]{width:%?200?%;background-color:#d43830}.head-right[data-v-2f071062]{width:%?550?%}.head-bg[data-v-2f071062]{height:%?330?%}.vertical[data-v-2f071062]{height:%?35?%;border-left:1px solid #fff}.img[data-v-2f071062]{width:%?35?%;height:%?32?%}.bottom[data-v-2f071062]{bottom:%?72?%}.nav[data-v-2f071062]{width:%?750?%;height:%?100?%;border-top-left-radius:%?20?%;border-top-right-radius:%?20?%}.nav-item[data-v-2f071062]{width:%?142?%;align-items:center}.time-box[data-v-2f071062]{background-color:#f2f2f2;height:%?90?%}.hammer[data-v-2f071062]{width:%?29?%;height:%?31?%}.time-bg[data-v-2f071062]{width:%?45?%;height:%?42?%;line-height:%?42?%;background-color:#a12630;border-radius:%?5?%;color:#fff;font-size:%?30?%}.colon[data-v-2f071062]{font-size:%?30?%;color:#a12630;margin:0 %?10?% %?4?% %?10?%}.product[data-v-2f071062]{width:%?205?%;height:%?217?%}.product-info[data-v-2f071062]{height:%?217?%}.product-code[data-v-2f071062]{width:%?118?%;background-color:#d6d6d6;color:#333}',""]),a.exports=t},f066:function(a,t,r){"use strict";r("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=r("3df4"),d={data:function(){return{pageHeight:getApp().globalData.systemInfo.windowHeight,params:{page:1,limit:15},list:[],more:""}},onLoad:function(){if(!this.$store.getters.isLogin)return uni.redirectTo({url:"/pages/users/login"});this.getList()},methods:{getList:function(){var a=this;this.more="loading",(0,e.plateList)(this.params).then((function(t){a.list=a.list.concat(t.data.list),a.more=""})).catch((function(a){console.log(a)}))},switchTab:function(a){uni.switchTab({url:a})},navigate:function(a){uni.navigateTo({url:a})}}};t.default=d}}]);