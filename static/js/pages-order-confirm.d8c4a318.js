(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-confirm"],{"1f8e":function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 布局 */.row[data-v-5e151ba4]{display:flex;flex-direction:row}.column[data-v-5e151ba4]{display:flex;flex-direction:column}.index-1[data-v-5e151ba4]{z-index:1}.index-10[data-v-5e151ba4]{z-index:10}.index-100[data-v-5e151ba4]{z-index:10}.lines-1[data-v-5e151ba4]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page[data-v-5e151ba4]{top:0;left:0;right:0;bottom:0}.fixed[data-v-5e151ba4]{position:fixed}.top-right[data-v-5e151ba4]{top:0;right:0}.top-left[data-v-5e151ba4]{top:0;left:0}.bottom-right[data-v-5e151ba4]{bottom:0;right:0}.top[data-v-5e151ba4]{top:0}.bottom[data-v-5e151ba4]{bottom:0}.absolute[data-v-5e151ba4]{position:absolute}.relative[data-v-5e151ba4]{position:relative}.row-reverse[data-v-5e151ba4]{flex-direction:row-reverse}.between[data-v-5e151ba4]{justify-content:space-between}.around[data-v-5e151ba4]{justify-content:space-around}.widthMax[data-v-5e151ba4]{width:%?750?%}.height-750[data-v-5e151ba4]{height:%?750?%}.margin-base[data-v-5e151ba4]{margin:%?30?% %?30?%}.margin-lg[data-v-5e151ba4]{margin:%?40?% %?40?%}.margin-xl[data-v-5e151ba4]{margin:%?50?% %?50?%}.margin-sm[data-v-5e151ba4]{margin:%?20?% %?20?%}.margin-xs[data-v-5e151ba4]{margin:%?10?% %?10?%}.margin-right-xl[data-v-5e151ba4]{margin-right:%?50?%}.margin-right-lg[data-v-5e151ba4]{margin-right:%?40?%}.margin-right-base[data-v-5e151ba4]{margin-right:%?30?%}.margin-right-xs[data-v-5e151ba4]{margin-right:%?10?%}.margin-right-sm[data-v-5e151ba4]{margin-right:%?20?%}.margin-left-xl[data-v-5e151ba4]{margin-left:%?50?%}.margin-left-lg[data-v-5e151ba4]{margin-left:%?40?%}.margin-left-base[data-v-5e151ba4]{margin-left:%?30?%}.margin-left-sm[data-v-5e151ba4]{margin-left:%?20?%}.margin-left-xs[data-v-5e151ba4]{margin-left:%?10?%}.margin-top-xl[data-v-5e151ba4]{margin-top:%?50?%}.margin-top-lg[data-v-5e151ba4]{margin-top:%?40?%}.margin-top-base[data-v-5e151ba4]{margin-top:%?30?%}.margin-top-sm[data-v-5e151ba4]{margin-top:%?20?%}.margin-top-xs[data-v-5e151ba4]{margin-top:%?10?%}.margin-bottom-xl[data-v-5e151ba4]{margin-bottom:%?50?%}.margin-bottom-base[data-v-5e151ba4]{margin-bottom:%?30?%}.margin-bottom-sm[data-v-5e151ba4]{margin-bottom:%?20?%}.margin-bottom-xs[data-v-5e151ba4]{margin-bottom:%?10?%}.margin-horizontal-xs[data-v-5e151ba4]{margin-left:%?10?%;margin-right:%?10?%}.margin-horizontal-sm[data-v-5e151ba4]{margin-left:%?20?%;margin-right:%?20?%}.margin-horizontal-base[data-v-5e151ba4]{margin-left:%?30?%;margin-right:%?30?%}.margin-horizontal-lg[data-v-5e151ba4]{margin-left:%?40?%;margin-right:%?40?%}.margin-horizontal-xl[data-v-5e151ba4]{margin-left:%?50?%;margin-right:%?50?%}.margin-vertical-xs[data-v-5e151ba4]{margin-top:%?10?%;margin-bottom:%?10?%}.margin-vertical-sm[data-v-5e151ba4]{margin-top:%?20?%;margin-bottom:%?20?%}.margin-vertical-base[data-v-5e151ba4]{margin-top:%?30?%;margin-bottom:%?30?%}.margin-vertical-lg[data-v-5e151ba4]{margin-top:%?40?%;margin-bottom:%?40?%}.margin-vertical-xl[data-v-5e151ba4]{margin-top:%?50?%;margin-bottom:%?50?%}.pad-xl[data-v-5e151ba4]{padding:%?50?% %?50?%}.pad-lg[data-v-5e151ba4]{padding:%?40?% %?40?%}.pad-base[data-v-5e151ba4]{padding:%?30?% %?30?%}.pad-sm[data-v-5e151ba4]{padding:%?20?% %?20?%}.pad-xs[data-v-5e151ba4]{padding:%?10?% %?10?%}.pad-top-lg[data-v-5e151ba4]{padding-top:%?40?%}.pad-top-xl[data-v-5e151ba4]{padding-top:%?50?%}.pad-top-base[data-v-5e151ba4]{padding-top:%?30?%}.pad-top-sm[data-v-5e151ba4]{padding-top:%?20?%}.pad-top-xs[data-v-5e151ba4]{padding-top:%?10?%}.pad-left-xl[data-v-5e151ba4]{padding-left:%?50?%}.pad-left-lg[data-v-5e151ba4]{padding-left:%?40?%}.pad-left-base[data-v-5e151ba4]{padding-left:%?30?%}.pad-left-sm[data-v-5e151ba4]{padding-left:%?20?%}.pad-left-xs[data-v-5e151ba4]{padding-left:%?10?%}.pad-right-xl[data-v-5e151ba4]{padding-right:%?50?%}.pad-right-lg[data-v-5e151ba4]{padding-right:%?40?%}.pad-right-base[data-v-5e151ba4]{padding-right:%?30?%}.pad-right-sm[data-v-5e151ba4]{padding-right:%?20?%}.pad-right-xs[data-v-5e151ba4]{padding-right:%?10?%}.pad-bottom-xl[data-v-5e151ba4]{padding-bottom:%?50?%}.pad-bottom-base[data-v-5e151ba4]{padding-bottom:%?30?%}.pad-bottom-sm[data-v-5e151ba4]{padding-bottom:%?20?%}.pad-bottom-xs[data-v-5e151ba4]{padding-bottom:%?10?%}.pad-horizontal-xs[data-v-5e151ba4]{padding-left:%?10?%;padding-right:%?10?%}.pad-horizontal-sm[data-v-5e151ba4]{padding-left:%?20?%;padding-right:%?20?%}.pad-horizontal-base[data-v-5e151ba4]{padding-left:%?30?%;padding-right:%?30?%}.pad-horizontal-lg[data-v-5e151ba4]{padding-left:%?40?%;padding-right:%?40?%}.pad-horizontal-xl[data-v-5e151ba4]{padding-left:%?50?%;padding-right:%?50?%}.pad-vertical-xs[data-v-5e151ba4]{padding-top:%?10?%;padding-bottom:%?10?%}.pad-vertical-sm[data-v-5e151ba4]{padding-top:%?20?%;padding-bottom:%?20?%}.pad-vertical-base[data-v-5e151ba4]{padding-top:%?30?%;padding-bottom:%?30?%}.pad-vertical-lg[data-v-5e151ba4]{padding-top:%?40?%;padding-bottom:%?40?%}.pad-vertical-xl[data-v-5e151ba4]{padding-top:%?50?%;padding-bottom:%?50?%}.text-center[data-v-5e151ba4]{text-align:center}.center[data-v-5e151ba4]{justify-content:center}.start[data-v-5e151ba4]{justify-content:flex-start}.end[data-v-5e151ba4]{justify-content:flex-end}.middle[data-v-5e151ba4]{align-items:center}.head[data-v-5e151ba4]{align-items:flex-start}.foot[data-v-5e151ba4]{align-items:flex-end}.flex-1[data-v-5e151ba4]{flex:1}.nowrap[data-v-5e151ba4]{flex-wrap:nowrap}.wrap[data-v-5e151ba4]{flex-wrap:wrap}.wrap-reverse[data-v-5e151ba4]{flex-wrap:wrap-reverse}\r\n/* 样式 */.ellipsis[data-v-5e151ba4]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ellipsis[data-v-5e151ba4]{text-overflow:ellipsis}.lines-1[data-v-5e151ba4]{lines:1}.bg-white[data-v-5e151ba4]{background-color:#fff}.bg-gray[data-v-5e151ba4]{background-color:grey}.bg-green[data-v-5e151ba4]{background-color:green}.bg-orange[data-v-5e151ba4]{background-color:orange}.bg-pink[data-v-5e151ba4]{background-color:pink}.bg-base[data-v-5e151ba4]{background-color:#ebebeb}.bg-black[data-v-5e151ba4]{background-color:#000}.bg-ghostwhite[data-v-5e151ba4]{background-color:#f8f8f8}.bg-blue[data-v-5e151ba4]{background-color:#00f}.bg-red[data-v-5e151ba4]{background-color:red}.bg-firebrick[data-v-5e151ba4]{background-color:#b22222}.bg-firebrick[data-v-5e151ba4]{background-color:#b22222}.bg-lightyellow[data-v-5e151ba4]{background-color:#ffffe0}.bg-peachpuff[data-v-5e151ba4]{background-color:#ffdab9}.gradient-peachpuff[data-v-5e151ba4]{background:linear-gradient(180deg,#ffdab9,#fdb676)}.gradient-blue[data-v-5e151ba4]{background:linear-gradient(180deg,#589cf8,#035acf)}.gradient-pink[data-v-5e151ba4]{background:linear-gradient(180deg,#fb8484,#fd5454)}.gradient-yellow[data-v-5e151ba4]{background:linear-gradient(180deg,#f3ea8b,#635424)}.gradient-pink-row[data-v-5e151ba4]{background:linear-gradient(90deg,#fb8484,#fd5454)}.gradient-cyan[data-v-5e151ba4]{background:linear-gradient(180deg,#05d4ce,#01939e)}.gradient-red[data-v-5e151ba4]{background:linear-gradient(180deg,red,#f5f5f5)}.gradient-base[data-v-5e151ba4]{background:linear-gradient(180deg,#fff,#f8f8f8)}.size12[data-v-5e151ba4]{font-size:%?12?%}.size20[data-v-5e151ba4]{font-size:%?20?%}.size24[data-v-5e151ba4]{font-size:%?24?%}.size30[data-v-5e151ba4]{font-size:%?30?%}.size40[data-v-5e151ba4]{font-size:%?40?%}.size80[data-v-5e151ba4]{font-size:%?80?%}.bold[data-v-5e151ba4]{font-weight:700}.text-center[data-v-5e151ba4]{text-align:center}.border-white[data-v-5e151ba4]{border:1px solid #f1f1f1}.border-red[data-v-5e151ba4]{border:1px solid #ee5a52}.border-gray[data-v-5e151ba4]{border:1px dashed grey}.border-gray-s[data-v-5e151ba4]{border:1px solid grey}.border-base[data-v-5e151ba4]{border:1px solid #ebebeb}.border-black[data-v-5e151ba4]{border:1px solid #000}.border-top[data-v-5e151ba4]{border-top:1px solid #ebebeb}.border-bottom[data-v-5e151ba4]{border-bottom:1px solid #ebebeb}.border-bottom-lightgray[data-v-5e151ba4]{border-bottom:1px solid #d3d3d3}.border-bottom-gray[data-v-5e151ba4]{border-bottom:1px solid #e0e0e0}.border-bottom-2[data-v-5e151ba4]{border-bottom:%?2?% solid #f0f0f0}.line-coffee[data-v-5e151ba4]{border-bottom:%?1?% solid #af6a5b}.radius-xl[data-v-5e151ba4]{border-radius:%?50?%}.radius-lg[data-v-5e151ba4]{border-radius:%?30?%}.radius-base[data-v-5e151ba4]{border-radius:%?20?%}.radius-sm[data-v-5e151ba4]{border-radius:%?12?%}.radius-xs[data-v-5e151ba4]{border-radius:%?8?%}.black[data-v-5e151ba4]{color:#000}.orange[data-v-5e151ba4]{color:orange}.dark-orange[data-v-5e151ba4]{color:#d84606}.white[data-v-5e151ba4]{color:#fff}.gray[data-v-5e151ba4]{color:grey}.red[data-v-5e151ba4]{color:red}.green[data-v-5e151ba4]{color:#33ae84}.firebrick[data-v-5e151ba4]{color:#b22222}.blue[data-v-5e151ba4]{color:#00f}.light-blue[data-v-5e151ba4]{color:#87cefa}.turquoise[data-v-5e151ba4]{color:#40e0d0}.base[data-v-5e151ba4]{color:#ebebeb}.slateblue[data-v-5e151ba4]{color:#6a5acd}.light-gray[data-v-5e151ba4]{color:hsla(0,0%,100%,.6)}.line-through[data-v-5e151ba4]{text-decoration:line-through}.button[data-v-5e151ba4]{width:%?130?%}.tab[data-v-5e151ba4]{border-top-left-radius:%?5?%;border-top-right-radius:%?5?%}.tab.on[data-v-5e151ba4]{background-color:#fff;padding:%?30?% %?121?%}.tab.off[data-v-5e151ba4]{background-color:pink;padding:%?20?% %?120?%;margin-top:%?30?%}.address[data-v-5e151ba4]{width:%?713?%}.input[data-v-5e151ba4]{height:%?30?%;width:%?380?%}.remask[data-v-5e151ba4]{background-color:#f9f9f9;font-size:%?30?%;width:%?690?%;height:%?140?%;border-radius:%?5?%;margin-top:%?30?%;padding:%?25?% %?28?%}.icon[data-v-5e151ba4]{width:%?30?%;height:%?30?%}',""]),a.exports=t},4762:function(a,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}));var i={uniIcons:e("a58e").default,orderGoods:e("de84").default},s=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("scroller",[i("header",{staticClass:"row bg-red fixed top-left widthMax",style:{height:a.statusHeight+"px"}}),i("list",[i("cell",{staticClass:"gradient-red pad-top-sm pad-left-sm pad-right-sm"},[i("v-uni-view",{staticClass:"row foot center"},[a.store_self_mention?i("v-uni-text",{staticClass:"red size30 tab",class:0==a.shippingType?"on":"off",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.addressType(0)}}},[a._v("快递配送")]):a._e(),a.store_self_mention?i("v-uni-text",{staticClass:"red size30 tab",class:1==a.shippingType?"on":"off",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.addressType(1)}}},[a._v("门店消费")]):a._e()],1),0==a.shippingType?i("v-uni-view",{staticClass:"address row between middle bg-white pad-base",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.onAddress.apply(void 0,arguments)}}},[a.addressInfo.real_name?i("v-uni-view",[i("v-uni-view",{staticClass:"row"},[i("v-uni-text",{staticClass:"size30 bold"},[a._v(a._s(a.addressInfo.real_name))]),i("v-uni-text",{staticClass:"size30 bold margin-left-xl"},[a._v(a._s(a.addressInfo.phone))])],1),i("v-uni-view",{staticClass:"row margin-top-sm"},[a.addressInfo.is_default?i("v-uni-text",{staticClass:"size24 red"},[a._v("[默认]")]):a._e(),i("v-uni-text",{staticClass:"size24 gray margin-left-sm"},[a._v(a._s(a.addressInfo.province)+a._s(a.addressInfo.city)+a._s(a.addressInfo.district)+a._s(a.addressInfo.detail))])],1)],1):i("v-uni-text",{staticClass:"size30"},[a._v("设置收货地址")]),i("uni-icons",{attrs:{type:"forward",size:"24",color:"gray"}})],1):i("v-uni-view",{staticClass:"bg-white pad-base"},[a.cartInfo[0].productInfo.detailed_address?i("v-uni-view",{staticClass:"row between middle"},[i("v-uni-text",{staticClass:"size30 gray"},[a._v(a._s(a.cartInfo[0].productInfo.detailed_address))]),i("v-uni-view",{staticClass:"bnt border-red row",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.showMaoLocation.apply(void 0,arguments)}}},[i("uni-icons",{attrs:{type:"location-filled",color:"red",size:"20"}}),i("v-uni-text",{staticClass:"size24 red"},[a._v("查看位置")])],1)],1):i("v-uni-text",{staticClass:"map"},[a._v("暂无门店信息")])],1)],1),i("cell",{staticClass:"pad-xs"},[i("order-goods",{staticClass:"margin-bottom-xs",attrs:{cartInfo:a.cartInfo}})],1),i("cell",{staticClass:"bg-white border-bottom-2"},[0==a.shippingType?i("v-uni-view",{staticClass:"row between pad-base middle"},[i("v-uni-text",{staticClass:"size30"},[a._v("快递费用")]),a.priceGroup.storePostage>0?i("v-uni-text",{staticClass:"size24 gray"},[a._v("+￥"+a._s(a.priceGroup.storePostage))]):i("v-uni-text",{staticClass:"size24 gray"},[a._v("免运费")])],1):i("v-uni-view",[i("v-uni-view",{staticClass:"row between pad-base border-bottom-2 middle"},[i("v-uni-text",{staticClass:"size30"},[a._v("联系人")]),i("v-uni-input",{staticClass:"input size30",attrs:{type:"text",placeholder:"请填写您的联系姓名"},on:{blur:function(t){arguments[0]=t=a.$handleEvent(t),a.realName.apply(void 0,arguments)}},model:{value:a.contacts,callback:function(t){a.contacts=t},expression:"contacts"}})],1),i("v-uni-view",{staticClass:"row between pad-base border-bottom-2"},[i("v-uni-text",{staticClass:"size30"},[a._v("联系电话")]),i("v-uni-input",{staticClass:"input size30",attrs:{type:"number",placeholder:"请填写您的联系电话"},on:{blur:function(t){arguments[0]=t=a.$handleEvent(t),a.phone.apply(void 0,arguments)}},model:{value:a.contactsTel,callback:function(t){a.contactsTel=t},expression:"contactsTel"}})],1)],1),a.textareaStatus?i("v-uni-view",{staticClass:"bg-white pad-base"},[i("v-uni-text",{staticClass:"size30"},[a._v("备注信息")]),!1===a.coupon.coupon?i("v-uni-textarea",{staticClass:"remask",attrs:{"placeholder-class":"placeholder",value:"",name:"mark",placeholder:"请添加备注（150字以内）"},on:{input:function(t){arguments[0]=t=a.$handleEvent(t),a.bindHideKeyboard.apply(void 0,arguments)}}}):a._e()],1):a._e()],1),i("cell",[1==a.is_yi?i("v-uni-view",{staticClass:"bg-white margin-top-sm margin-bottom-sm pad-base"},[i("v-uni-text",{staticClass:"size30 margin-bottom-base"},[a._v("易物结算")]),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{class:4==a.active?"border-red":"border-base",staticStyle:{height:"auto"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.payMer(4)}}},[i("v-uni-view",{staticClass:"row between middle border-bottom pad-sm"},[i("v-uni-view",{staticClass:"row margin-left-base pad-left-base"},[i("v-uni-image",{staticClass:"icon margin-right-sm",attrs:{src:e("9b66"),mode:""}}),i("v-uni-text",{staticClass:"size30"},[a._v("易物券+支付宝")])],1),i("v-uni-text",{staticClass:"base"},[a._v("|")]),i("v-uni-text",{staticClass:"size24 gray margin-right-base pad-right-base"},[a._v("易物券+支付宝")])],1),4==a.active?i("v-uni-view",[i("v-uni-view",{staticClass:"row between border-bottom pad-sm"},[i("v-uni-text",{staticClass:"size30"},[a._v("支付易物券")]),i("v-uni-text",{staticClass:"red size30 red size30"},[a._v(a._s(a.total_price)+" 易物券")])],1),i("v-uni-view",{staticClass:"row between border-bottom pad-sm"},[i("v-uni-text",{staticClass:"size30"},[a._v("抵押易物券")]),i("v-uni-text",{staticClass:"red size30"},[a._v(a._s(Number(a.frozen_money))+" 易物券")])],1),i("v-uni-view",{staticClass:"row between border-bottom pad-sm"},[i("v-uni-text",{staticClass:"size30"},[a._v("手续费")]),i("v-uni-text",{staticClass:"red size30"},[a._v(a._s(a.handling_fee||0)+" 元")])],1),i("v-uni-view",{staticClass:"row between border-bottom pad-sm"},[i("v-uni-text",{staticClass:"size30"},[a._v("快递费")]),i("v-uni-text",{staticClass:"red size30"},[a._v(a._s(a.pay_postage>0?a.pay_postage+" 元":"免运费"))])],1),i("v-uni-view",{staticClass:"row between border-bottom pad-sm"},[i("v-uni-text",{staticClass:"size30"},[a._v("契约奖励")]),i("v-uni-text",{staticClass:"red size30"},[a._v(a._s(2*a.frozen_money)+" 易物券")])],1)],1):a._e()],1),i("v-uni-view",{class:3==a.active?"border-red":"border-base",staticStyle:{height:"auto"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.payMer(3)}}},[i("v-uni-view",{staticClass:"row between middle border-bottom pad-sm"},[i("v-uni-view",{staticClass:"row margin-left-base pad-left-base"},[i("v-uni-image",{staticClass:"icon margin-right-sm",attrs:{src:e("8e61"),mode:""}}),i("v-uni-text",{staticClass:"size30"},[a._v("易物券+微信")])],1),i("v-uni-text",{staticClass:"base"},[a._v("|")]),i("v-uni-text",{staticClass:"size24 gray margin-right-base pad-right-base"},[a._v("易物券+微信")])],1),3==a.active?i("v-uni-view",[i("v-uni-view",{staticClass:"row between border-bottom pad-sm"},[i("v-uni-text",{staticClass:"size30"},[a._v("支付易物券")]),i("v-uni-text",{staticClass:"red size30 red size30"},[a._v(a._s(a.total_price)+" 易物券")])],1),i("v-uni-view",{staticClass:"row between border-bottom pad-sm"},[i("v-uni-text",{staticClass:"size30"},[a._v("抵押易物券")]),i("v-uni-text",{staticClass:"red size30"},[a._v(a._s(Number(a.frozen_money))+" 易物券")])],1),i("v-uni-view",{staticClass:"row between border-bottom pad-sm"},[i("v-uni-text",{staticClass:"size30"},[a._v("手续费")]),i("v-uni-text",{staticClass:"red size30"},[a._v(a._s(a.handling_fee||0)+" 元")])],1),i("v-uni-view",{staticClass:"row between border-bottom pad-sm"},[i("v-uni-text",{staticClass:"size30"},[a._v("快递费")]),i("v-uni-text",{staticClass:"red size30"},[a._v(a._s(a.pay_postage>0?a.pay_postage+" 元":"免运费"))])],1),i("v-uni-view",{staticClass:"row between border-bottom pad-sm"},[i("v-uni-text",{staticClass:"size30"},[a._v("契约奖励")]),i("v-uni-text",{staticClass:"red size30"},[a._v(a._s(2*a.frozen_money)+" 易物券")])],1)],1):a._e()],1)],1)],1):i("v-uni-view",{staticClass:"item"},[i("v-uni-view",[a._v("现金支付")]),i("v-uni-view",{staticClass:"list"},a._l(a.cartArr,(function(t,e){return 1==t.payStatus?i("v-uni-view",{key:e,staticClass:"payItem acea-row row-middle",class:a.active==e?"on":"",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.payItem(e)}}},[i("v-uni-view",{staticClass:"name acea-row row-center-wrapper"},[i("v-uni-view",{staticClass:"iconfont animated",class:t.icon+" "+(1==a.animated&&a.active==e?"bounceIn":"")}),a._v(a._s(t.name))],1),i("v-uni-view",{staticClass:"tip"},[a._v(a._s(t.title))])],1):a._e()})),1)],1)],1),i("cell",{staticClass:"bg-white pad-sm"},[i("v-uni-view",{staticClass:"row between pad-xs"},[i("v-uni-text",{staticClass:"size30"},[a._v("商品总价：")]),i("v-uni-text",{staticClass:"size30 gray"},[a._v("￥"+a._s(a.priceGroup.totalPrice))])],1),a.coupon_price>0?i("v-uni-view",{staticClass:"row between pad-xs"},[i("v-uni-text",{staticClass:"size30"},[a._v("优惠券抵扣：")]),i("v-uni-text",{staticClass:"size30 gray"},[a._v("￥-"+a._s(a.coupon_price))])],1):a._e(),a.integral_price>0?i("v-uni-view",{staticClass:"row between pad-xs"},[i("v-uni-text",{staticClass:"size30"},[a._v("积分抵扣：")]),i("v-uni-text",{staticClass:"size30 gray"},[a._v("￥-"+a._s(a.integral_price))])],1):a._e(),a.priceGroup.storePostage>0?i("v-uni-view",{staticClass:"row between pad-xs"},[i("v-uni-text",{staticClass:"size30"},[a._v("运费：")]),i("v-uni-text",{staticClass:"size30 gray"},[a._v("￥+"+a._s(a.priceGroup.storePostage))])],1):a._e()],1),i("cell",{staticStyle:{height:"100rpx"}})],1),i("header",{staticClass:"fixed bottom row middle between widthMax pad-sm bg-white"},[i("v-uni-view",{staticClass:"row middle"},[i("v-uni-text",{staticClass:"size24 margin-xs"},[a._v("合计:")]),i("v-uni-view",[3==a.active||4==a.active?i("v-uni-text",{staticClass:"red size24"},[a._v(a._s(a.total_price)+" 易物券")]):a._e(),3==a.active||4==a.active?i("v-uni-text",{staticClass:"red size24"},[a._v(a._s((Number(a.handling_fee)+Number(a.pay_postage)).toFixed(2)||0)+" 元")]):i("v-uni-text",{staticClass:"red size24"},[a._v(a._s(a.totalPrice||0))])],1)],1),a.canSettle?i("v-uni-text",{staticClass:"bnt bg-red",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.SubOrder.apply(void 0,arguments)}}},[a._v("立即结算")]):i("v-uni-text",{staticClass:"bnt bg-red"},[a._v("立即结算")])],1)],1)},r=[]},"86da":function(a,t,e){"use strict";e.r(t);var i=e("4762"),s=e("fa25");for(var r in s)"default"!==r&&function(a){e.d(t,a,(function(){return s[a]}))}(r);e("c225");var n,d=e("f0c5"),o=Object(d["a"])(s["default"],i["b"],i["c"],!1,null,"5e151ba4",null,!1,i["a"],n);t["default"]=o.exports},"8e61":function(a,t){a.exports="data:image/png;base64,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"},"9b66":function(a,t,e){a.exports=e.p+"static/img/alipay.a05bd6af.png"},a2a6:function(a,t,e){"use strict";e("acd8"),e("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e("bfd6"),s=e("839e"),r=e("26cb"),n={data:function(){return{statusHeight:getApp().globalData.systemInfo.statusBarHeight,cartArr:[{name:"微信支付",icon:"icon-weixin2",value:"weixin",title:"微信快捷支付",payStatus:1},{name:"余额支付",icon:"icon-icon-test",value:"yue",title:"可用余额:",payStatus:1},{name:"线下支付",icon:"icon-yinhangqia",value:"offline",title:"线下支付",payStatus:2}],userInfo:{},addressInfo:{},addressId:"",address:{address:!1},contacts:"",contactsTel:"",cartInfo:[],store_self_mention:0,integral:0,integralRatio:"0",offlinePostage:"",orderKey:"",priceGroup:{},totalPrice:0,seckillId:0,shippingType:0,is_yi:0,ChangePrice:0,textareaStatus:!0,coupon:{coupon:!1,list:[],statusTile:"立即使用"},active:4,frozen_money:"",handling_fee:""}},computed:(0,r.mapGetters)(["isLogin"]),onLoad:function(a){if(!a.cartId)return uni.showToast({title:"请选择要购买的商品",icon:"loading"});this.couponId=a.couponId||0,this.pinkId=a.pinkid?parseInt(a.pinkid):0,this.addressId=a.addressId||0,this.cartId=a.cartId,this.is_address=!!a.is_address,this.getConfirm()},onShow:function(){},methods:{getAddressInfo:function(){var a=this;this.addressId?(0,i.addressDetail)(this.addressId).then((function(t){a.addressInfo=t.data||{},a.addressId=t.data.id||0,a.address.addressId=t.data.id||0,a.contacts=t.data.real_name,a.contactsTel=t.data.phone})).catch((function(a){uni.showToast({title:a,icon:"loading"})})):(0,i.addressDefault)().then((function(t){a.addressInfo=t.data||{},a.addressId=t.data.id||0,a.address.addressId=t.data.id||0,a.contacts=t.data.real_name,a.contactsTel=t.data.phone})).catch((function(a){uni.showToast({title:a,icon:"loading"})}))},getConfirm:function(){var a=this;(0,s.orderConfirm)(this.cartId).then((function(t){a.$set(a,"userInfo",t.data.userInfo),a.$set(a,"integral",t.data.userInfo.integral),a.$set(a,"cartInfo",t.data.cartInfo),a.$set(a,"integralRatio",t.data.integralRatio),a.$set(a,"offlinePostage",t.data.offlinePostage),a.$set(a,"orderKey",t.data.orderKey),a.$set(a,"priceGroup",t.data.priceGroup),a.$set(a,"totalPrice",(parseFloat(t.data.priceGroup.totalPrice)+parseFloat(t.data.priceGroup.storePostage)).toFixed(2)),a.$set(a,"seckillId",parseInt(t.data.seckill_id)),1==t.data.cartInfo[0].productInfo.is_yi&&(a.is_yi=1,a.payMer(4)),1==t.data.cartInfo[0].productInfo.is_check&&(a.shippingType=1),a.$set(a,"store_self_mention",t.data.store_self_mention),a.cartArr[1].title="可用余额:"+t.data.userInfo.now_money,a.cartArr[1].payStatus=t.data.yue_pay_status||0,2==t.data.offline_pay_status?a.cartArr[2].payStatus=0:a.cartArr[2].payStatus=1,a.$set(a,"ChangePrice",a.totalPrice),a.getAddressInfo()})).catch((function(a){uni.showToast({title:a,icon:"loading"})}))},payMer:function(a){3==a?this.payType="weixin":4==a&&(this.payType="alipay",this.from="alipay"),this.active=a,this.animated=!0,this.computedPrice()},computedPrice:function(){var a=this;(0,s.orderComputed)(this.orderKey,{addressId:this.addressId,useIntegral:this.useIntegral?1:0,couponId:this.couponId,shipping_type:parseInt(this.shippingType)+1,payType:this.payType}).then((function(t){a.canSettle=!0,t.data.result&&(a.total_price=parseInt(t.data.result.total_price),a.handling_fee=t.data.result.handling_fee,a.pay_postage=t.data.result.pay_postage,a.totalPrice=t.data.result.pay_price,a.integral_price=t.data.result.deduction_price,a.coupon_price=t.data.result.coupon_price,a.frozen_money=t.data.result.frozen_money,a.integral=a.useIntegral?t.data.result.SurplusIntegral:a.userInfo.integral,a.$set(a.priceGroup,"storePostage",1==a.shippingType?0:t.data.result.pay_postage))})).catch((function(t){a.total_price=parseInt(a.cartInfo[0].productInfo.price),a.pay_postage=a.priceGroup.storePostage,uni.showToast({title:t,icon:"loading"})}))},addressType:function(a){a>this.shippingType?this.$util.Tips({title:"该商品未支持门店消费"}):a<this.shippingType&&uni.showToast({title:"该商品仅支持门店消费",icon:"loading"})}}};t.default=n},c225:function(a,t,e){"use strict";var i=e("ea90"),s=e.n(i);s.a},ea90:function(a,t,e){var i=e("1f8e");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var s=e("4f06").default;s("bd09eda2",i,!0,{sourceMap:!1,shadowMode:!1})},fa25:function(a,t,e){"use strict";e.r(t);var i=e("a2a6"),s=e.n(i);for(var r in i)"default"!==r&&function(a){e.d(t,a,(function(){return i[a]}))}(r);t["default"]=s.a}}]);