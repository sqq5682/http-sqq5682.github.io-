(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cca0369"],{"28bd":function(t,e,n){},"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];n("a9e3");Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function l(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(t,e,n){var a=s(),i=t-a,r=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=r;var s=Math.easeInOutQuad(c,a,i,e);l(s),c<e?o(t):n&&"function"===typeof n&&n()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&r(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},u=c,d=(n("5301"),n("2877")),p=Object(d["a"])(u,a,i,!1,null,"0c785daf",null);e["a"]=p.exports},"3b1d":function(t,e,n){"use strict";var a=n("8580"),i=n.n(a);i.a},"49a9":function(t,e,n){},5301:function(t,e,n){"use strict";var a=n("28bd"),i=n.n(a);i.a},"81e8":function(t,e,n){"use strict";var a=n("49a9"),i=n.n(a);i.a},8580:function(t,e,n){},b87f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card mab20"},[n("div",{staticClass:"wrapSearch"},[n("div",{staticClass:"searchInput"},[n("el-input",{attrs:{placeholder:"请输入订单编号/姓名/电话/会员ID"},model:{value:t.searchInfo,callback:function(e){t.searchInfo=e},expression:"searchInfo"}})],1),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.search}},[t._v("搜索")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.reset}},[t._v("重置")])],1)]),n("orderListTable",{attrs:{list:t.list,listLoading:t.listLoading},on:{viewContent:t.viewContent,editContent:t.editContent}}),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.condition.page,limit:t.condition.limit},on:{"update:page":function(e){return t.$set(t.condition,"page",e)},"update:limit":function(e){return t.$set(t.condition,"limit",e)},pagination:t.fetchListData}})],1)},i=[],o=n("5530"),l=n("333d"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"orderEdit mab20"},[n("el-button",{attrs:{type:"primary",disabled:t.manageStatus,size:"small"},on:{click:t.allSelect}},[t._v("全选")]),n("el-button",{attrs:{type:"primary",disabled:!t.manageStatus,size:"small"},on:{click:t.clearSelect}},[t._v("重置选择")]),n("el-button",{attrs:{type:"primary",disabled:!t.manageStatus,size:"small"}},[t._v("批量删除")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange,"select-all":t.selectAll}},[t._v(" > "),n("el-table-column",{attrs:{type:"selection",width:"55",label:"全选"}}),n("el-table-column",{attrs:{align:"center",label:"订单编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),n("el-table-column",{attrs:{"class-name":"status-col",label:"订单状态",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.status)+" ")]}}])}),n("el-table-column",{attrs:{label:"成交价",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.pageviews)+" ")]}}])}),n("el-table-column",{attrs:{label:"商品数量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.pageviews)+" ")]}}])}),n("el-table-column",{attrs:{label:"购买平台",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.pageviews)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),n("span",[t._v(t._s(e.row.display_time))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$emit("viewGoods",a)}}},[t._v("查看订单")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$emit("editGoods",a)}}},[t._v("编辑订单")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$emit("editGoods",a)}}},[t._v("查看物流")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$emit("editGoods",a)}}},[t._v("取消订单")])]}}])})],1)],1)},r=[],c=(n("4160"),n("159b"),{props:{list:Array,listLoading:Boolean},data:function(){return{multipleSelection:[],manageStatus:!1}},methods:{handleSelectionChange:function(t){console.log(t),this.multipleSelection=t,this.multipleSelection.length==this.list.length&&(this.manageStatus=!0)},selectAll:function(){this.manageStatus=!0},rowSelect:function(){this.manageStatus=!0},toggleSelection:function(t){var e=this;t?t.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})):this.$refs.multipleTable.clearSelection()},clearSelect:function(){this.$refs.multipleTable.clearSelection(),this.manageStatus=!1},allSelect:function(){this.$refs.multipleTable.toggleAllSelection()}}}),u=c,d=(n("81e8"),n("2877")),p=Object(d["a"])(u,s,r,!1,null,"568ca95a",null),f=p.exports,g=n("b775"),m=n("da71"),h=m.orderListU;m.orderDetailU,m.updataOrderU,m.addOrderU;function b(t){return Object(g["a"])({url:h,method:"get",params:t})}var v={components:{orderListTable:f,pagination:l["a"]},data:function(){return{list:null,listLoading:!0,total:100,searchInfo:"",condition:{page:1,limit:10}}},created:function(){this.fetchListData()},methods:{fetchListData:function(){var t=this;this.listLoading=!0,b(Object(o["a"])(Object(o["a"])({},this.condition),{},{ordername:this.searchInfo})).then((function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1}))},editContent:function(t){this.$router.push({path:"/goodsManage/addGoods",query:{goodsManage:"edit",goodsId:t.id}})},search:function(){this.condition={page:1,limit:10},this.fetchListData()},reset:function(){this.searchInfo="",this.condition={page:1,limit:10},this.fetchListData()},viewContent:function(t){this.$router.push({path:"/orderManage/OrderDetail",query:{type:"detail",id:t.id}})}}},y=v,S=(n("3b1d"),Object(d["a"])(y,a,i,!1,null,"9cffaea6",null));e["default"]=S.exports}}]);