(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-prove"],{"0293":function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 布局 */.row[data-v-ad4b0a34]{display:flex;flex-direction:row}.column[data-v-ad4b0a34]{display:flex;flex-direction:column}.index-1[data-v-ad4b0a34]{z-index:1}.index-10[data-v-ad4b0a34]{z-index:10}.index-100[data-v-ad4b0a34]{z-index:10}.lines-1[data-v-ad4b0a34]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page[data-v-ad4b0a34]{top:0;left:0;right:0;bottom:0}.fixed[data-v-ad4b0a34]{position:fixed}.top-right[data-v-ad4b0a34]{top:0;right:0}.top-left[data-v-ad4b0a34]{top:0;left:0}.bottom-right[data-v-ad4b0a34]{bottom:0;right:0}.top[data-v-ad4b0a34]{top:0}.bottom[data-v-ad4b0a34]{bottom:0}.absolute[data-v-ad4b0a34]{position:absolute}.relative[data-v-ad4b0a34]{position:relative}.row-reverse[data-v-ad4b0a34]{flex-direction:row-reverse}.between[data-v-ad4b0a34]{justify-content:space-between}.around[data-v-ad4b0a34]{justify-content:space-around}.widthMax[data-v-ad4b0a34]{width:%?750?%}.height-750[data-v-ad4b0a34]{height:%?750?%}.margin-base[data-v-ad4b0a34]{margin:%?30?% %?30?%}.margin-lg[data-v-ad4b0a34]{margin:%?40?% %?40?%}.margin-xl[data-v-ad4b0a34]{margin:%?50?% %?50?%}.margin-sm[data-v-ad4b0a34]{margin:%?20?% %?20?%}.margin-xs[data-v-ad4b0a34]{margin:%?10?% %?10?%}.margin-right-xl[data-v-ad4b0a34]{margin-right:%?50?%}.margin-right-lg[data-v-ad4b0a34]{margin-right:%?40?%}.margin-right-base[data-v-ad4b0a34]{margin-right:%?30?%}.margin-right-xs[data-v-ad4b0a34]{margin-right:%?10?%}.margin-right-sm[data-v-ad4b0a34]{margin-right:%?20?%}.margin-left-xl[data-v-ad4b0a34]{margin-left:%?50?%}.margin-left-lg[data-v-ad4b0a34]{margin-left:%?40?%}.margin-left-base[data-v-ad4b0a34]{margin-left:%?30?%}.margin-left-sm[data-v-ad4b0a34]{margin-left:%?20?%}.margin-left-xs[data-v-ad4b0a34]{margin-left:%?10?%}.margin-top-xl[data-v-ad4b0a34]{margin-top:%?50?%}.margin-top-lg[data-v-ad4b0a34]{margin-top:%?40?%}.margin-top-base[data-v-ad4b0a34]{margin-top:%?30?%}.margin-top-sm[data-v-ad4b0a34]{margin-top:%?20?%}.margin-top-xs[data-v-ad4b0a34]{margin-top:%?10?%}.margin-bottom-xl[data-v-ad4b0a34]{margin-bottom:%?50?%}.margin-bottom-base[data-v-ad4b0a34]{margin-bottom:%?30?%}.margin-bottom-sm[data-v-ad4b0a34]{margin-bottom:%?20?%}.margin-bottom-xs[data-v-ad4b0a34]{margin-bottom:%?10?%}.margin-horizontal-xs[data-v-ad4b0a34]{margin-left:%?10?%;margin-right:%?10?%}.margin-horizontal-sm[data-v-ad4b0a34]{margin-left:%?20?%;margin-right:%?20?%}.margin-horizontal-base[data-v-ad4b0a34]{margin-left:%?30?%;margin-right:%?30?%}.margin-horizontal-lg[data-v-ad4b0a34]{margin-left:%?40?%;margin-right:%?40?%}.margin-horizontal-xl[data-v-ad4b0a34]{margin-left:%?50?%;margin-right:%?50?%}.margin-vertical-xs[data-v-ad4b0a34]{margin-top:%?10?%;margin-bottom:%?10?%}.margin-vertical-sm[data-v-ad4b0a34]{margin-top:%?20?%;margin-bottom:%?20?%}.margin-vertical-base[data-v-ad4b0a34]{margin-top:%?30?%;margin-bottom:%?30?%}.margin-vertical-lg[data-v-ad4b0a34]{margin-top:%?40?%;margin-bottom:%?40?%}.margin-vertical-xl[data-v-ad4b0a34]{margin-top:%?50?%;margin-bottom:%?50?%}.pad-xl[data-v-ad4b0a34]{padding:%?50?% %?50?%}.pad-lg[data-v-ad4b0a34]{padding:%?40?% %?40?%}.pad-base[data-v-ad4b0a34]{padding:%?30?% %?30?%}.pad-sm[data-v-ad4b0a34]{padding:%?20?% %?20?%}.pad-xs[data-v-ad4b0a34]{padding:%?10?% %?10?%}.pad-top-lg[data-v-ad4b0a34]{padding-top:%?40?%}.pad-top-xl[data-v-ad4b0a34]{padding-top:%?50?%}.pad-top-base[data-v-ad4b0a34]{padding-top:%?30?%}.pad-top-sm[data-v-ad4b0a34]{padding-top:%?20?%}.pad-top-xs[data-v-ad4b0a34]{padding-top:%?10?%}.pad-left-xl[data-v-ad4b0a34]{padding-left:%?50?%}.pad-left-lg[data-v-ad4b0a34]{padding-left:%?40?%}.pad-left-base[data-v-ad4b0a34]{padding-left:%?30?%}.pad-left-sm[data-v-ad4b0a34]{padding-left:%?20?%}.pad-left-xs[data-v-ad4b0a34]{padding-left:%?10?%}.pad-right-xl[data-v-ad4b0a34]{padding-right:%?50?%}.pad-right-lg[data-v-ad4b0a34]{padding-right:%?40?%}.pad-right-base[data-v-ad4b0a34]{padding-right:%?30?%}.pad-right-sm[data-v-ad4b0a34]{padding-right:%?20?%}.pad-right-xs[data-v-ad4b0a34]{padding-right:%?10?%}.pad-bottom-xl[data-v-ad4b0a34]{padding-bottom:%?50?%}.pad-bottom-base[data-v-ad4b0a34]{padding-bottom:%?30?%}.pad-bottom-sm[data-v-ad4b0a34]{padding-bottom:%?20?%}.pad-bottom-xs[data-v-ad4b0a34]{padding-bottom:%?10?%}.pad-horizontal-xs[data-v-ad4b0a34]{padding-left:%?10?%;padding-right:%?10?%}.pad-horizontal-sm[data-v-ad4b0a34]{padding-left:%?20?%;padding-right:%?20?%}.pad-horizontal-base[data-v-ad4b0a34]{padding-left:%?30?%;padding-right:%?30?%}.pad-horizontal-lg[data-v-ad4b0a34]{padding-left:%?40?%;padding-right:%?40?%}.pad-horizontal-xl[data-v-ad4b0a34]{padding-left:%?50?%;padding-right:%?50?%}.pad-vertical-xs[data-v-ad4b0a34]{padding-top:%?10?%;padding-bottom:%?10?%}.pad-vertical-sm[data-v-ad4b0a34]{padding-top:%?20?%;padding-bottom:%?20?%}.pad-vertical-base[data-v-ad4b0a34]{padding-top:%?30?%;padding-bottom:%?30?%}.pad-vertical-lg[data-v-ad4b0a34]{padding-top:%?40?%;padding-bottom:%?40?%}.pad-vertical-xl[data-v-ad4b0a34]{padding-top:%?50?%;padding-bottom:%?50?%}.text-center[data-v-ad4b0a34]{text-align:center}.center[data-v-ad4b0a34]{justify-content:center}.start[data-v-ad4b0a34]{justify-content:flex-start}.end[data-v-ad4b0a34]{justify-content:flex-end}.middle[data-v-ad4b0a34]{align-items:center}.head[data-v-ad4b0a34]{align-items:flex-start}.foot[data-v-ad4b0a34]{align-items:flex-end}.flex-1[data-v-ad4b0a34]{flex:1}.nowrap[data-v-ad4b0a34]{flex-wrap:nowrap}.wrap[data-v-ad4b0a34]{flex-wrap:wrap}.wrap-reverse[data-v-ad4b0a34]{flex-wrap:wrap-reverse}\r\n/* 样式 */.ellipsis[data-v-ad4b0a34]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ellipsis[data-v-ad4b0a34]{text-overflow:ellipsis}.lines-1[data-v-ad4b0a34]{lines:1}.bg-white[data-v-ad4b0a34]{background-color:#fff}.bg-gray[data-v-ad4b0a34]{background-color:grey}.bg-green[data-v-ad4b0a34]{background-color:green}.bg-orange[data-v-ad4b0a34]{background-color:orange}.bg-pink[data-v-ad4b0a34]{background-color:pink}.bg-base[data-v-ad4b0a34]{background-color:#ebebeb}.bg-black[data-v-ad4b0a34]{background-color:#000}.bg-ghostwhite[data-v-ad4b0a34]{background-color:#f8f8f8}.bg-blue[data-v-ad4b0a34]{background-color:#00f}.bg-red[data-v-ad4b0a34]{background-color:red}.bg-firebrick[data-v-ad4b0a34]{background-color:#b22222}.bg-firebrick[data-v-ad4b0a34]{background-color:#b22222}.bg-lightyellow[data-v-ad4b0a34]{background-color:#ffffe0}.bg-peachpuff[data-v-ad4b0a34]{background-color:#ffdab9}.gradient-peachpuff[data-v-ad4b0a34]{background:linear-gradient(180deg,#ffdab9,#fdb676)}.gradient-blue[data-v-ad4b0a34]{background:linear-gradient(180deg,#589cf8,#035acf)}.gradient-pink[data-v-ad4b0a34]{background:linear-gradient(180deg,#fb8484,#fd5454)}.gradient-yellow[data-v-ad4b0a34]{background:linear-gradient(180deg,#f3ea8b,#635424)}.gradient-pink-row[data-v-ad4b0a34]{background:linear-gradient(90deg,#fb8484,#fd5454)}.gradient-cyan[data-v-ad4b0a34]{background:linear-gradient(180deg,#05d4ce,#01939e)}.gradient-red[data-v-ad4b0a34]{background:linear-gradient(180deg,red,#f5f5f5)}.gradient-base[data-v-ad4b0a34]{background:linear-gradient(180deg,#fff,#f8f8f8)}.size12[data-v-ad4b0a34]{font-size:%?12?%}.size20[data-v-ad4b0a34]{font-size:%?20?%}.size24[data-v-ad4b0a34]{font-size:%?24?%}.size30[data-v-ad4b0a34]{font-size:%?30?%}.size40[data-v-ad4b0a34]{font-size:%?40?%}.size80[data-v-ad4b0a34]{font-size:%?80?%}.bold[data-v-ad4b0a34]{font-weight:700}.text-center[data-v-ad4b0a34]{text-align:center}.border-white[data-v-ad4b0a34]{border:1px solid #f1f1f1}.border-red[data-v-ad4b0a34]{border:1px solid #ee5a52}.border-gray[data-v-ad4b0a34]{border:1px dashed grey}.border-gray-s[data-v-ad4b0a34]{border:1px solid grey}.border-base[data-v-ad4b0a34]{border:1px solid #ebebeb}.border-black[data-v-ad4b0a34]{border:1px solid #000}.border-top[data-v-ad4b0a34]{border-top:1px solid #ebebeb}.border-bottom[data-v-ad4b0a34]{border-bottom:1px solid #ebebeb}.border-bottom-lightgray[data-v-ad4b0a34]{border-bottom:1px solid #d3d3d3}.border-bottom-gray[data-v-ad4b0a34]{border-bottom:1px solid #e0e0e0}.border-bottom-2[data-v-ad4b0a34]{border-bottom:%?2?% solid #f0f0f0}.line-coffee[data-v-ad4b0a34]{border-bottom:%?1?% solid #af6a5b}.radius-xl[data-v-ad4b0a34]{border-radius:%?50?%}.radius-lg[data-v-ad4b0a34]{border-radius:%?30?%}.radius-base[data-v-ad4b0a34]{border-radius:%?20?%}.radius-sm[data-v-ad4b0a34]{border-radius:%?12?%}.radius-xs[data-v-ad4b0a34]{border-radius:%?8?%}.black[data-v-ad4b0a34]{color:#000}.orange[data-v-ad4b0a34]{color:orange}.dark-orange[data-v-ad4b0a34]{color:#d84606}.white[data-v-ad4b0a34]{color:#fff}.gray[data-v-ad4b0a34]{color:grey}.red[data-v-ad4b0a34]{color:red}.green[data-v-ad4b0a34]{color:#33ae84}.firebrick[data-v-ad4b0a34]{color:#b22222}.blue[data-v-ad4b0a34]{color:#00f}.light-blue[data-v-ad4b0a34]{color:#87cefa}.turquoise[data-v-ad4b0a34]{color:#40e0d0}.base[data-v-ad4b0a34]{color:#ebebeb}.slateblue[data-v-ad4b0a34]{color:#6a5acd}.light-gray[data-v-ad4b0a34]{color:hsla(0,0%,100%,.6)}.line-through[data-v-ad4b0a34]{text-decoration:line-through}.item[data-v-ad4b0a34]{padding:%?30?%;border-top:%?1?% solid #eee;flex-direction:row;justify-content:space-between}.input[data-v-ad4b0a34]{margin-left:%?20?%;width:%?475?%;height:%?38?%;font-size:%?30?%}.btn[data-v-ad4b0a34]{margin:%?20?%}.picker-view[data-v-ad4b0a34]{width:%?750?%;height:%?450?%;background-color:#fff}.picker-item[data-v-ad4b0a34]{height:50px;align-items:center;justify-content:center;text-align:center}',""]),a.exports=t},2224:function(a,t,e){var i=e("0293");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var d=e("4f06").default;d("212fb320",i,!0,{sourceMap:!1,shadowMode:!1})},"3b5f":function(a,t,e){"use strict";e.d(t,"b",(function(){return d})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return i}));var i={uniIcons:e("a58e").default,uniPopup:e("a776").default},d=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",[e("v-uni-form",{staticClass:"bg-color-white",attrs:{"report-submit":"true"},on:{submit:function(t){arguments[0]=t=a.$handleEvent(t),a.formSubmit.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"item"},[e("v-uni-text",{staticClass:"size32"},[a._v("商家名称")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入商家名称",name:"shop_name",value:a.userAddress.shop_name,"placeholder-class":"placeholder"}})],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-text",{staticClass:"size32"},[a._v("所在地区")]),e("v-uni-view",{staticClass:"acea-row",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.setAddress.apply(void 0,arguments)}}},[e("v-uni-text",[a._v(a._s(a.region[0])+"/"+a._s(a.region[1])+"/"+a._s(a.region[2]))]),e("uni-icons",{attrs:{type:"location-filled",color:"red",size:"16"}})],1)],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-text",{staticClass:"size32"},[a._v("详细地址")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请填写具体地址",name:"detail","placeholder-class":"placeholder",value:a.userAddress.detail}})],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-text",{staticClass:"size32"},[a._v("机构类型")]),e("v-uni-view",{staticClass:"type"},[e("v-uni-picker",{attrs:{mode:"selector",value:a.typeIndex,range:a.merchantType},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.typeChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"acea-row row-middle picker"},[e("v-uni-text",{staticClass:"size32"},[a._v(a._s(a.merchant))]),e("uni-icons",{attrs:{type:"arrowdown",color:"red",size:"16"}})],1)],1)],1)],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-text",{staticClass:"size32"},[a._v("联系人")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入联系人姓名",name:"contact_person",value:a.userAddress.contact_person,"placeholder-class":"placeholder"}})],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-text",{staticClass:"size32"},[a._v("联系电话")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入联系人电话",name:"contact_number",value:a.userAddress.contact_number,"placeholder-class":"placeholder"}})],1),e("v-uni-view",{staticClass:"item row-between-wrapper row-middle",staticStyle:{"flex-direction":"column"}},[e("v-uni-text",{staticClass:"size32"},[a._v("营业执照")]),e("v-uni-view",{staticClass:"prove"},[e("v-uni-view",{staticClass:"acea-row row-between-wrapper row-middle"},[e("v-uni-view",{staticStyle:{"align-items":"center"}},[a.proveImg?e("v-uni-view",{staticClass:"imgBox acea-row",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.upProve.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"image",attrs:{src:a.proveImg}})],1):e("v-uni-view",{staticClass:"imgBox acea-row",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.upProve.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cameraBg acea-row"},[e("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/service/camera.png"}})],1)],1),e("v-uni-text",{staticStyle:{color:"gray"}},[a._v("上传营业执照")])],1),e("v-uni-view",{staticStyle:{"align-items":"center"}},[a.coverImg?e("v-uni-view",{staticClass:"imgBox acea-row",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.upCover.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"image",attrs:{src:a.coverImg}})],1):e("v-uni-view",{staticClass:"imgBox acea-row",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.upCover.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cameraBg acea-row"},[e("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/service/camera.png"}})],1)],1),e("v-uni-text",{staticStyle:{color:"gray"}},[a._v("上传封面")])],1)],1)],1)],1),1==a.status?e("v-uni-button",{staticClass:"keepBnt",attrs:{type:"primary"}},[a._v("已通过审核")]):a.userAddress.is_default?e("v-uni-button",{staticClass:"keepBnt bg-color-hui"},[a._v("审核中")]):e("v-uni-button",{staticClass:"keepBnt bg-color",attrs:{"form-type":"submit"}},[a._v("确认提交")])],1),e("uni-popup",{ref:"picker",attrs:{type:"bottom"}},[e("v-uni-view",{staticClass:"bg-color-white"},[e("v-uni-view",{staticClass:"row",staticStyle:{"justify-content":"space-between","background-color":"#E5E5E5"}},[e("v-uni-text",{staticClass:"font-gray",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.close.apply(void 0,arguments)}}},[a._v("取消")]),e("v-uni-text",{staticClass:"slateblue",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.oks.apply(void 0,arguments)}}},[a._v("确定")])],1)],1),e("v-uni-picker-view",{staticClass:"picker-view",attrs:{"indicator-style":a.indicatorStyle,value:a.value},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.bindChange.apply(void 0,arguments)}}},[e("v-uni-picker-view-column",a._l(a.multiArray[0],(function(t,i){return e("v-uni-view",{key:i,staticClass:"picker-item"},[a._v(a._s(t))])})),1),e("v-uni-picker-view-column",a._l(a.multiArray[1],(function(t,i){return e("v-uni-view",{key:i,staticClass:"picker-item"},[a._v(a._s(t))])})),1),e("v-uni-picker-view-column",a._l(a.multiArray[2],(function(t,i){return e("v-uni-view",{key:i,staticClass:"picker-item"},[a._v(a._s(t))])})),1)],1)],1)],1)},n=[]},4969:function(a,t,e){"use strict";e.r(t);var i=e("3b5f"),d=e("55d1");for(var n in d)"default"!==n&&function(a){e.d(t,a,(function(){return d[a]}))}(n);e("75e7");var r,o=e("f0c5"),s=Object(o["a"])(d["default"],i["b"],i["c"],!1,null,"ad4b0a34",null,!1,i["a"],r);t["default"]=s.exports},"55d1":function(a,t,e){"use strict";e.r(t);var i=e("8e1f"),d=e.n(i);for(var n in i)"default"!==n&&function(a){e.d(t,a,(function(){return i[a]}))}(n);t["default"]=d.a},"75e7":function(a,t,e){"use strict";var i=e("2224"),d=e.n(i);d.a},"8e1f":function(a,t,e){"use strict";var i=e("4ea4");e("4160"),e("d81d"),e("d3b7"),e("25f0"),e("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=i(e("c61c")),n=e("1ab8"),r=e("bfd6"),o=e("f17b"),s=(e("0813"),e("26cb")),l={data:function(){return{visible:!0,indicatorStyle:"height: 50px;",status:"",merchant:"",proveImg:"",coverImg:"",merchantType:["工商个体户","私营企业"],typeIndex:0,regionDval:["浙江省","杭州市","滨江区"],cartId:"",pinkId:0,couponId:0,id:0,userAddress:{is_default:!1},region:["省","市","区"],valueRegion:[0,0,0],isAuto:!1,isShowAuth:!1,district:n.address.data,multiArray:[],multiIndex:[0,0,0],cityId:0,defaultRegion:["广东省","广州市","番禺区"],defaultRegionCode:"440113"}},computed:(0,s.mapGetters)(["isLogin"]),onLoad:function(a){this.initialize()},onNavigationBarButtonTap:function(a){this.status=0,this.userAddress.is_default=!1},methods:{setAddress:function(){this.$refs["picker"].open()},bindChange:function(a){var t=this.district[a.detail.value[0]];this.$set(this.multiArray,1,t.c.map((function(a){return a.n}))),a.detail.value[1]&&this.$set(this.multiArray,2,t.c[a.detail.value[1]].c.map((function(a){return a.n}))),this.multiIndex[0]=a.detail.value[0]||0,this.multiIndex[1]=a.detail.value[1]||0,this.multiIndex[2]=a.detail.value[2]||0},oks:function(){this.region=[this.multiArray[0][this.multiIndex[0]],this.multiArray[1][this.multiIndex[1]],this.multiArray[2][this.multiIndex[2]]],this.$refs["picker"].close()},close:function(){this.$refs["picker"].close()},upProve:function(){var a=this;d.default.uploadImageOne("upload/image",(function(t){a.$set(a,"proveImg",t.data.url)})),console.log(this.proveImg)},upCover:function(){var a=this;d.default.uploadImageOne("upload/image",(function(t){a.coverImg=t.data.url}))},getMerchantInfo:function(a){function t(){return a.apply(this,arguments)}return t.toString=function(){return a.toString()},t}((function(){var a=this;getMerchantInfo().then((function(t){if(t.data.id){var e=[t.data.province,t.data.city,t.data.area];a.$set(a,"region",e),a.$set(a,"userAddress",t.data),a.userAddress.is_default=!0,a.status=t.data.status,a.merchant=t.data.agency,a.proveImg=t.data.positive,a.coverImg=t.data.negative}else a.merchant="私营企业"}))})),getCityList:function(){var a=this,t=this;(0,o.getCity)().then((function(e){a.district=e.data,t.initialize()}))},initialize:function(){var a=this,t=[],e=[],i=[];if(a.district.length){var d=a.district[0].c||[],n=d.length&&d[0].c||[];a.district.forEach((function(a){t.push(a.n)})),d.forEach((function(a){e.push(a.n)})),n.forEach((function(a){i.push(a.n)})),this.multiArray=[t,e,i]}},typeChange:function(a){console.log(a),this.typeIndex=a.detail.value,this.merchant=this.merchantType[this.typeIndex]},bindRegionChange:function(a){var t=this.multiIndex,e=this.district[t[0]]||{c:[]},i=e.c[t[1]]||{v:0},d=this.multiArray,n=a.detail.value;this.region=[d[0][n[0]],d[1][n[1]],d[2][n[2]]],this.cityId=i.v,this.valueRegion=[0,0,0],this.initialize()},bindMultiPickerColumnChange:function(a){var t=this.district[a.detail.value]||{c:[]},e=this.multiArray,i=this.multiIndex;switch(i[a.detail.column]=a.detail.value,a.detail.column){case 0:console.log(this.multiArray[1]);var d=t.c[0]||{c:[]};e[1]=t.c.map((function(a){return a.n})),e[2]=d.c.map((function(a){return a.n}));break;case 1:var n=this.district[i[0]].c[i[1]].c||[];e[2]=n.map((function(a){return a.n}));break;case 2:break}this.multiArray=e,this.multiIndex=i,this.$forceUpdate()},onLoadFun:function(){this.getUserAddress()},authColse:function(a){this.isShowAuth=a},toggleTab:function(a){this.$refs[a].show()},onConfirm:function(a){this.region=a.checkArr[0]+"-"+a.checkArr[1]+"-"+a.checkArr[2]},getUserAddress:function(){if(!this.id)return!1;var a=this;(0,r.getAddressDetail)(this.id).then((function(t){var e=[t.data.province,t.data.city,t.data.district];a.$set(a,"userAddress",t.data),a.$set(a,"region",e),a.city_id=t.data.city_id}))},formSubmit:function(a){var t=this,e=a.detail.value;if(!e.shop_name)return t.$util.Tips({title:"请填写商家名称"});if(!e.contact_person)return t.$util.Tips({title:"请填写联系人姓名"});if(!e.contact_number)return t.$util.Tips({title:"请填写联系电话"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(e.contact_number))return t.$util.Tips({title:"请输入正确的手机号码"});if("省"==t.region[0])return t.$util.Tips({title:"请选择所在地区"});if(!e.detail)return t.$util.Tips({title:"请填写详细地址"});if(!t.proveImg)return t.$util.Tips({title:"请上传营业执照"});var i=t.region;e.province=i[0],e.city=i[1],e.area=i[2],e.agency=t.merchantType[t.typeIndex],e.positive=t.proveImg,e.negative=t.coverImg,uni.showLoading({title:"提交中",mask:!0}),addMerchantInfo(e).then((function(a){uni.hideLoading(),uni.showModal({title:"提示",content:"提交成功!请耐心等待审核...",success:function(a){(a.confirm||a.cancel)&&uni.switchTab({url:"/pages/user/index"})}})})).catch((function(a){return uni.hideLoading(),t.$util.Tips({title:a})}))},ChangeIsDefault:function(a){this.$set(this.userAddress,"is_default",!this.userAddress.is_default)}}};t.default=l},f17b:function(a,t,e){"use strict";var i=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.indexData=n,t.noticeList=r,t.shopList=o,t.shopDetail=s,t.groomList=l,t.categoryList=c,t.logo=u,t.registerVerify=v,t.passwordVerify=g,t.resetPassword=b,t.loginPassword=p,t.loginMobile=f,t.register=m,t.keyword=h,t.productslist=x,t.productHot=w,t.productDetail=y,t.articleList=k,t.articleDetail=C,t.exchangeRee=_;var d=i(e("f3de"));function n(){return d.default.get("/Index/banner",{},{noAuth:!0})}function r(){return d.default.get("/User/gonglist",{},{noAuth:!0})}function o(){return d.default.get("/User/home_shoplist",{},{noAuth:!0})}function s(a){return d.default.post("/User/home_shopone",{id:a},{noAuth:!0})}function l(){return d.default.get("/Index/store_product?page=1&limit=2",{},{noAuth:!0})}function c(){return d.default.get("/category",{},{noAuth:!0})}function u(){return d.default.get("/wechat/get_logo",{},{noAuth:!0})}function v(a){return d.default.post("/User/getCode",a,{noAuth:!0})}function g(a){return d.default.post("/User/getPwdCode",a,{noAuth:!0})}function b(a){return d.default.post("/User/set_pwd",a,{noAuth:!0})}function p(a){return d.default.post("/User/login",a,{noAuth:!0})}function f(a){return d.default.post("/login/mobile",a,{noAuth:!0})}function m(a){return d.default.post("/User/login",a,{noAuth:!0})}function h(){return d.default.get("/search/keyword",{},{noAuth:!0})}function x(a){return d.default.get("/products",a,{noAuth:!0})}function w(a,t){return d.default.get("/product/hot",{page:a,limit:t},{noAuth:!0})}function y(a){return d.default.get("/Index/store_product_one?id="+a,{},{noAuth:!0})}function k(){return d.default.post("/User/articleList",{},{noAuth:!0})}function C(a){return d.default.post("/User/articleGetone",{id:a},{noAuth:!0})}function _(){return d.default.post("/User/gettifree",{},{noAuth:!0})}}}]);