(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-buy_orders-index"],{"322d":function(e,a,t){"use strict";t("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t("fb67"),i=t("3df4"),n={data:function(){return{trades:[],tabIndex:1,tabTitles:[{title:"已取消"},{title:"交易中"},{title:"待确认"},{title:"已完成"}]}},watch:{tabIndex:function(e,a){this.getBuyList(this.trades[e],0)}},onLoad:function(e){e.index&&(this.tabIndex=e.index);for(var a=0;a<this.tabTitles.length;a++)this.trades.push({state:a,page:1,limit:10,list:[],more:"loading"});this.getBuyList(this.trades[this.tabIndex],0)},methods:{getBuyList:function(e,a){0===a&&0!==e.list.length||"noMore"!==e.more&&(e.more="loading",console.log(e),(0,i.buyList)({state:0===e.state?0:e.state+1,page:e.page,limit:e.limit}).then((function(a){console.log(a),e.more="more",a.data.length<e.limit&&(e.more="noMore"),e.list=e.list.concat(a.data),e.page++})).catch((function(e){uni.showToast({title:e,icon:"loading"})})))},onLoadmore:function(e){this.getBuyList(this.trades[this.tabIndex],1)},onTabTitleTap:function(e){this.tabIndex=e},onTabChange:function(e){this.tabIndex=e.detail.current}},filters:{dateFilter:function(e){return(0,r.formatDate)(1e3*e)}},onNavigationBarSearchInputConfirmed:function(e){console.log(e.text)},onNavigationBarButtonTap:function(e){"home"===e.type&&uni.switchTab({url:"/pages/index/index"})}};a.default=n},"355f":function(e,a,t){"use strict";var r=t("5d78"),i=t.n(r);i.a},"3df4":function(e,a,t){"use strict";var r=t("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.plateList=n,a.plateDetail=f,a.userScore=d,a.payType=o,a.payTypeEdit=s,a.tradeList=l,a.sell=g,a.sellThree=u,a.pay=c,a.buy=p,a.confirmOrder=v,a.placeOrdercom=m,a.sellInfo=b,a.sellList=h,a.buyList=x,a.tradeDetail=w,a.postProof=y,a.sellCancel=_,a.buyCancel=k,a.confirmTrade=z,a.appeal=C,a.getUser=T,a.transfer=L,a.confirmReceive=I,a.concelReceive=G,a.tradeLog=O;var i=r(t("f3de"));function n(e){return i.default.post("User/bantongList",e)}function f(e){return i.default.post("User/bantongGetOne",{bantong_id:e})}function d(){return i.default.post("User/getUserzhi")}function o(){return i.default.post("User/getWithdrawal")}function s(e){return i.default.post("User/setWithdrawal",e)}function l(e){return i.default.get("/gamai/selectGamai",e)}function g(e){return i.default.post("/gamai/add",e)}function u(e){return i.default.post("/Gamai/addbantong3",e)}function c(e){return i.default.post("/User/user_pay",e)}function p(e,a){return i.default.post("/gamai/transaction",{id:e,pay_pwd:a})}function v(e){return i.default.post("Order/confirmOrder",{zhicount:e})}function m(e){return i.default.post("Order/placeOrdercom",{zhicount:e})}function b(){return i.default.get("/gamai/userOneGamai")}function h(e){return i.default.get("/gamai/gamaiList",e)}function x(e){return i.default.post("/Gamai/orderList",e)}function w(e){return i.default.post("/gamai/oneGamai",e)}function y(e){return i.default.post("/gamai/addComplete",e)}function _(e){return i.default.post("/gamai/shqxGamai",{id:e})}function k(e){return i.default.post("/gamai/mjqxGamai",{id:e})}function z(e){return i.default.post("/gamai/confirmGamai",{id:e})}function C(e,a){return i.default.post("/gamai/addAppeal",{gamai_id:e,appeal_content:a})}function T(e){return i.default.post("/User/pay_get_user",{name:e})}function L(e){return i.default.post("/User/user_pay",e)}function I(e){return i.default.post("/Gamai/user_transaction",e)}function G(e){return i.default.post("/Gamai/user_qx_gamai",e)}function O(e){return i.default.post("/Gamai/moneyLog_list",e)}},4711:function(e,a,t){"use strict";t.r(a);var r=t("5b26"),i=t("ce58");for(var n in i)"default"!==n&&function(e){t.d(a,e,(function(){return i[e]}))}(n);t("355f");var f,d=t("f0c5"),o=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"f76fe63e",null,!1,r["a"],f);a["default"]=o.exports},"5b26":function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return r}));var r={uniLoadMore:t("ea4e").default},i=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("v-uni-view",{staticClass:"gradient-peachpuff fixed page"},[r("v-uni-view",{staticClass:"row margin-sm center middle"},e._l(e.tabTitles,(function(a,t){return r("v-uni-view",{key:t,staticClass:"flex-1 middle tabTitle",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onTabTitleTap(t)}}},[r("v-uni-text",{staticClass:"size30"},[e._v(e._s(a.title))]),e.tabIndex===t?r("v-uni-view",{staticClass:"title-line gradient-pink"}):e._e()],1)})),1),r("v-uni-swiper",{staticClass:"flex-1",attrs:{duration:300,current:e.tabIndex},on:{change:function(a){arguments[0]=a=e.$handleEvent(a),e.onTabChange.apply(void 0,arguments)}}},e._l(e.trades,(function(a,i){return r("v-uni-swiper-item",{key:a.state},[r("list",{attrs:{"show-scrollbar":"false"},on:{loadmore:function(a){arguments[0]=a=e.$handleEvent(a),e.onLoadmore.apply(void 0,arguments)}}},[e._l(a.list,(function(a,t){return r("cell",{key:t},[r("v-uni-view",{staticClass:"row middle pad-xs radius-base margin-xs bg-white relative"},[r("v-uni-image",{staticClass:"img",attrs:{src:"/static/images/coupons.png",mode:""}}),r("v-uni-view",{staticClass:"between margin-left-sm flex-1"},[r("v-uni-view",{staticClass:"row"},[r("v-uni-text",{staticClass:"size20 gray"},[e._v("订单号: "+e._s(a.order_sn))]),r("v-uni-text",{staticClass:"size20 gray margin-left-sm"},[e._v("["+e._s(e._f("dateFilter")(a.addtime))+"]")])],1),r("v-uni-view",{staticClass:"row foot"},[r("v-uni-view",[r("v-uni-text",{staticClass:"size24 red"},[e._v("总额: "+e._s(a.all_price))]),r("v-uni-view",{staticClass:"row margin-top-xs"},[r("v-uni-text",{staticClass:"size20 gray"},[e._v("单价: "+e._s(a.money_one))]),r("v-uni-text",{staticClass:"size20 gray margin-left-xs"},[e._v("数量: "+e._s(parseInt(a.ga_quota)))])],1)],1),r("v-uni-view",{staticClass:"margin-left-sm"})],1)],1),r("v-uni-navigator",{staticClass:"absolute detail",attrs:{url:"/pages/trade/order_detail/index?id="+a.id}},[r("v-uni-text",{staticClass:"red size30 margin-right-base"},[e._v("详情")])],1)],1)],1)})),r("header",[0!=a.list.length?r("uni-load-more",{attrs:{status:a.more}}):r("v-uni-image",{staticClass:"nothing",attrs:{src:t("f9c1")}})],1)],2)],1)})),1)],1)},n=[]},"5d78":function(e,a,t){var r=t("7263");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=t("4f06").default;i("6cc607e1",r,!0,{sourceMap:!1,shadowMode:!1})},7263:function(e,a,t){var r=t("24fb");a=r(!1),a.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 布局 */.row[data-v-f76fe63e]{display:flex;flex-direction:row}.column[data-v-f76fe63e]{display:flex;flex-direction:column}.index-1[data-v-f76fe63e]{z-index:1}.index-10[data-v-f76fe63e]{z-index:10}.index-100[data-v-f76fe63e]{z-index:10}.lines-1[data-v-f76fe63e]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page[data-v-f76fe63e]{top:0;left:0;right:0;bottom:0}.fixed[data-v-f76fe63e]{position:fixed}.top-right[data-v-f76fe63e]{top:0;right:0}.top-left[data-v-f76fe63e]{top:0;left:0}.bottom-right[data-v-f76fe63e]{bottom:0;right:0}.top[data-v-f76fe63e]{top:0}.bottom[data-v-f76fe63e]{bottom:0}.absolute[data-v-f76fe63e]{position:absolute}.relative[data-v-f76fe63e]{position:relative}.row-reverse[data-v-f76fe63e]{flex-direction:row-reverse}.between[data-v-f76fe63e]{justify-content:space-between}.around[data-v-f76fe63e]{justify-content:space-around}.widthMax[data-v-f76fe63e]{width:%?750?%}.height-750[data-v-f76fe63e]{height:%?750?%}.margin-base[data-v-f76fe63e]{margin:%?30?% %?30?%}.margin-lg[data-v-f76fe63e]{margin:%?40?% %?40?%}.margin-xl[data-v-f76fe63e]{margin:%?50?% %?50?%}.margin-sm[data-v-f76fe63e]{margin:%?20?% %?20?%}.margin-xs[data-v-f76fe63e]{margin:%?10?% %?10?%}.margin-right-xl[data-v-f76fe63e]{margin-right:%?50?%}.margin-right-lg[data-v-f76fe63e]{margin-right:%?40?%}.margin-right-base[data-v-f76fe63e]{margin-right:%?30?%}.margin-right-xs[data-v-f76fe63e]{margin-right:%?10?%}.margin-right-sm[data-v-f76fe63e]{margin-right:%?20?%}.margin-left-xl[data-v-f76fe63e]{margin-left:%?50?%}.margin-left-lg[data-v-f76fe63e]{margin-left:%?40?%}.margin-left-base[data-v-f76fe63e]{margin-left:%?30?%}.margin-left-sm[data-v-f76fe63e]{margin-left:%?20?%}.margin-left-xs[data-v-f76fe63e]{margin-left:%?10?%}.margin-top-xl[data-v-f76fe63e]{margin-top:%?50?%}.margin-top-lg[data-v-f76fe63e]{margin-top:%?40?%}.margin-top-base[data-v-f76fe63e]{margin-top:%?30?%}.margin-top-sm[data-v-f76fe63e]{margin-top:%?20?%}.margin-top-xs[data-v-f76fe63e]{margin-top:%?10?%}.margin-bottom-xl[data-v-f76fe63e]{margin-bottom:%?50?%}.margin-bottom-base[data-v-f76fe63e]{margin-bottom:%?30?%}.margin-bottom-sm[data-v-f76fe63e]{margin-bottom:%?20?%}.margin-bottom-xs[data-v-f76fe63e]{margin-bottom:%?10?%}.margin-horizontal-xs[data-v-f76fe63e]{margin-left:%?10?%;margin-right:%?10?%}.margin-horizontal-sm[data-v-f76fe63e]{margin-left:%?20?%;margin-right:%?20?%}.margin-horizontal-base[data-v-f76fe63e]{margin-left:%?30?%;margin-right:%?30?%}.margin-horizontal-lg[data-v-f76fe63e]{margin-left:%?40?%;margin-right:%?40?%}.margin-horizontal-xl[data-v-f76fe63e]{margin-left:%?50?%;margin-right:%?50?%}.margin-vertical-xs[data-v-f76fe63e]{margin-top:%?10?%;margin-bottom:%?10?%}.margin-vertical-sm[data-v-f76fe63e]{margin-top:%?20?%;margin-bottom:%?20?%}.margin-vertical-base[data-v-f76fe63e]{margin-top:%?30?%;margin-bottom:%?30?%}.margin-vertical-lg[data-v-f76fe63e]{margin-top:%?40?%;margin-bottom:%?40?%}.margin-vertical-xl[data-v-f76fe63e]{margin-top:%?50?%;margin-bottom:%?50?%}.pad-xl[data-v-f76fe63e]{padding:%?50?% %?50?%}.pad-lg[data-v-f76fe63e]{padding:%?40?% %?40?%}.pad-base[data-v-f76fe63e]{padding:%?30?% %?30?%}.pad-sm[data-v-f76fe63e]{padding:%?20?% %?20?%}.pad-xs[data-v-f76fe63e]{padding:%?10?% %?10?%}.pad-top-lg[data-v-f76fe63e]{padding-top:%?40?%}.pad-top-xl[data-v-f76fe63e]{padding-top:%?50?%}.pad-top-base[data-v-f76fe63e]{padding-top:%?30?%}.pad-top-sm[data-v-f76fe63e]{padding-top:%?20?%}.pad-top-xs[data-v-f76fe63e]{padding-top:%?10?%}.pad-left-xl[data-v-f76fe63e]{padding-left:%?50?%}.pad-left-lg[data-v-f76fe63e]{padding-left:%?40?%}.pad-left-base[data-v-f76fe63e]{padding-left:%?30?%}.pad-left-sm[data-v-f76fe63e]{padding-left:%?20?%}.pad-left-xs[data-v-f76fe63e]{padding-left:%?10?%}.pad-right-xl[data-v-f76fe63e]{padding-right:%?50?%}.pad-right-lg[data-v-f76fe63e]{padding-right:%?40?%}.pad-right-base[data-v-f76fe63e]{padding-right:%?30?%}.pad-right-sm[data-v-f76fe63e]{padding-right:%?20?%}.pad-right-xs[data-v-f76fe63e]{padding-right:%?10?%}.pad-bottom-xl[data-v-f76fe63e]{padding-bottom:%?50?%}.pad-bottom-base[data-v-f76fe63e]{padding-bottom:%?30?%}.pad-bottom-sm[data-v-f76fe63e]{padding-bottom:%?20?%}.pad-bottom-xs[data-v-f76fe63e]{padding-bottom:%?10?%}.pad-horizontal-xs[data-v-f76fe63e]{padding-left:%?10?%;padding-right:%?10?%}.pad-horizontal-sm[data-v-f76fe63e]{padding-left:%?20?%;padding-right:%?20?%}.pad-horizontal-base[data-v-f76fe63e]{padding-left:%?30?%;padding-right:%?30?%}.pad-horizontal-lg[data-v-f76fe63e]{padding-left:%?40?%;padding-right:%?40?%}.pad-horizontal-xl[data-v-f76fe63e]{padding-left:%?50?%;padding-right:%?50?%}.pad-vertical-xs[data-v-f76fe63e]{padding-top:%?10?%;padding-bottom:%?10?%}.pad-vertical-sm[data-v-f76fe63e]{padding-top:%?20?%;padding-bottom:%?20?%}.pad-vertical-base[data-v-f76fe63e]{padding-top:%?30?%;padding-bottom:%?30?%}.pad-vertical-lg[data-v-f76fe63e]{padding-top:%?40?%;padding-bottom:%?40?%}.pad-vertical-xl[data-v-f76fe63e]{padding-top:%?50?%;padding-bottom:%?50?%}.text-center[data-v-f76fe63e]{text-align:center}.center[data-v-f76fe63e]{justify-content:center}.start[data-v-f76fe63e]{justify-content:flex-start}.end[data-v-f76fe63e]{justify-content:flex-end}.middle[data-v-f76fe63e]{align-items:center}.head[data-v-f76fe63e]{align-items:flex-start}.foot[data-v-f76fe63e]{align-items:flex-end}.flex-1[data-v-f76fe63e]{flex:1}.nowrap[data-v-f76fe63e]{flex-wrap:nowrap}.wrap[data-v-f76fe63e]{flex-wrap:wrap}.wrap-reverse[data-v-f76fe63e]{flex-wrap:wrap-reverse}\r\n/* 样式 */.ellipsis[data-v-f76fe63e]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ellipsis[data-v-f76fe63e]{text-overflow:ellipsis}.lines-1[data-v-f76fe63e]{lines:1}.bg-white[data-v-f76fe63e]{background-color:#fff}.bg-gray[data-v-f76fe63e]{background-color:grey}.bg-green[data-v-f76fe63e]{background-color:green}.bg-orange[data-v-f76fe63e]{background-color:orange}.bg-pink[data-v-f76fe63e]{background-color:pink}.bg-base[data-v-f76fe63e]{background-color:#ebebeb}.bg-black[data-v-f76fe63e]{background-color:#000}.bg-ghostwhite[data-v-f76fe63e]{background-color:#f8f8f8}.bg-blue[data-v-f76fe63e]{background-color:#00f}.bg-red[data-v-f76fe63e]{background-color:red}.bg-firebrick[data-v-f76fe63e]{background-color:#b22222}.bg-firebrick[data-v-f76fe63e]{background-color:#b22222}.bg-lightyellow[data-v-f76fe63e]{background-color:#ffffe0}.bg-peachpuff[data-v-f76fe63e]{background-color:#ffdab9}.gradient-peachpuff[data-v-f76fe63e]{background:linear-gradient(180deg,#ffdab9,#fdb676)}.gradient-blue[data-v-f76fe63e]{background:linear-gradient(180deg,#589cf8,#035acf)}.gradient-pink[data-v-f76fe63e]{background:linear-gradient(180deg,#fb8484,#fd5454)}.gradient-yellow[data-v-f76fe63e]{background:linear-gradient(180deg,#f3ea8b,#635424)}.gradient-pink-row[data-v-f76fe63e]{background:linear-gradient(90deg,#fb8484,#fd5454)}.gradient-cyan[data-v-f76fe63e]{background:linear-gradient(180deg,#05d4ce,#01939e)}.gradient-red[data-v-f76fe63e]{background:linear-gradient(180deg,red,#f5f5f5)}.gradient-base[data-v-f76fe63e]{background:linear-gradient(180deg,#fff,#f8f8f8)}.size12[data-v-f76fe63e]{font-size:%?12?%}.size20[data-v-f76fe63e]{font-size:%?20?%}.size24[data-v-f76fe63e]{font-size:%?24?%}.size30[data-v-f76fe63e]{font-size:%?30?%}.size40[data-v-f76fe63e]{font-size:%?40?%}.size80[data-v-f76fe63e]{font-size:%?80?%}.bold[data-v-f76fe63e]{font-weight:700}.text-center[data-v-f76fe63e]{text-align:center}.border-white[data-v-f76fe63e]{border:1px solid #f1f1f1}.border-red[data-v-f76fe63e]{border:1px solid #ee5a52}.border-gray[data-v-f76fe63e]{border:1px dashed grey}.border-gray-s[data-v-f76fe63e]{border:1px solid grey}.border-base[data-v-f76fe63e]{border:1px solid #ebebeb}.border-black[data-v-f76fe63e]{border:1px solid #000}.border-top[data-v-f76fe63e]{border-top:1px solid #ebebeb}.border-bottom[data-v-f76fe63e]{border-bottom:1px solid #ebebeb}.border-bottom-lightgray[data-v-f76fe63e]{border-bottom:1px solid #d3d3d3}.border-bottom-gray[data-v-f76fe63e]{border-bottom:1px solid #e0e0e0}.border-bottom-2[data-v-f76fe63e]{border-bottom:%?2?% solid #f0f0f0}.line-coffee[data-v-f76fe63e]{border-bottom:%?1?% solid #af6a5b}.radius-xl[data-v-f76fe63e]{border-radius:%?50?%}.radius-lg[data-v-f76fe63e]{border-radius:%?30?%}.radius-base[data-v-f76fe63e]{border-radius:%?20?%}.radius-sm[data-v-f76fe63e]{border-radius:%?12?%}.radius-xs[data-v-f76fe63e]{border-radius:%?8?%}.black[data-v-f76fe63e]{color:#000}.orange[data-v-f76fe63e]{color:orange}.dark-orange[data-v-f76fe63e]{color:#d84606}.white[data-v-f76fe63e]{color:#fff}.gray[data-v-f76fe63e]{color:grey}.red[data-v-f76fe63e]{color:red}.green[data-v-f76fe63e]{color:#33ae84}.firebrick[data-v-f76fe63e]{color:#b22222}.blue[data-v-f76fe63e]{color:#00f}.light-blue[data-v-f76fe63e]{color:#87cefa}.turquoise[data-v-f76fe63e]{color:#40e0d0}.base[data-v-f76fe63e]{color:#ebebeb}.slateblue[data-v-f76fe63e]{color:#6a5acd}.light-gray[data-v-f76fe63e]{color:hsla(0,0%,100%,.6)}.line-through[data-v-f76fe63e]{text-decoration:line-through}.tabTitle[data-v-f76fe63e]{height:%?38?%}.title-line[data-v-f76fe63e]{width:%?80?%;height:%?8?%}.img[data-v-f76fe63e]{width:%?110?%;height:%?110?%}.between[data-v-f76fe63e]{height:%?120?%}.detail[data-v-f76fe63e]{right:%?20?%;bottom:%?50?%}.nothing[data-v-f76fe63e]{width:%?414?%;height:%?336?%;margin-left:%?168?%}',""]),e.exports=a},ce58:function(e,a,t){"use strict";t.r(a);var r=t("322d"),i=t.n(r);for(var n in r)"default"!==n&&function(e){t.d(a,e,(function(){return r[e]}))}(n);a["default"]=i.a},f9c1:function(e,a,t){e.exports=t.p+"static/img/nothing.3f9e862e.png"},fb67:function(e,a,t){"use strict";function r(e){return e.substring(0,3)+"****"+e.substr(e.length-4)}function i(e){var a;if(2===e.length)a=e.substr(0,1)+"*";else if(e.length>2){for(var t="",r=0,i=e.length-2;r<i;r++)t+="*";a=e.substr(0,1)+t+e.substr(-1,1)}else a=e;return a}function n(e){if(e){var a=e.length,t=new Date(1e3*parseInt(e)),r=new Date(parseInt(e)),i=10==a?t:r,n=function(e){return e<10?"0".concat(e):e},f=[i.getFullYear(),n(i.getMonth()+1),n(i.getDate()),n(i.getHours()),n(i.getMinutes()),n(i.getSeconds())],d=f[0],o=f[1],s=f[2],l=f[3],g=f[4],u=f[5];return"".concat(d,"-").concat(o,"-").concat(s," ").concat(l,":").concat(g,":").concat(u)}return" "}t("99af"),t("e25e"),Object.defineProperty(a,"__esModule",{value:!0}),a.formatPhone=r,a.formatName=i,a.formatDate=n}}]);