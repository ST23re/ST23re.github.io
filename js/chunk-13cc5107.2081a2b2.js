(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13cc5107"],{"3fe4":function(t,e,l){"use strict";l("7fb9")},"7fb9":function(t,e,l){},8308:function(t,e,l){t.exports=l.p+"img/back.37672142.svg"},d794:function(t,e,l){"use strict";l("f7aa")},f6f8:function(t,e,l){"use strict";l.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"analysisPage"}},[n("header-component",[n("div",{staticClass:"icons"},[n("div",{staticClass:"top-button"},[n("img",{staticClass:"icon",attrs:{src:l("8308")}}),n("span",{staticClass:"word"},[t._v("返回")])])])]),n("el-col",{attrs:{span:4}},[n("el-menu",{staticClass:"menu",attrs:{"default-active":"2"},on:{open:t.handleOpen,close:t.handleClose}},[n("el-menu-item",{attrs:{index:"1"}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("统计结果")])]),n("el-menu-item",{attrs:{index:"2"}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("答卷列表")])])],1)],1),n("el-container",{staticClass:"container1"},[n("div",{staticClass:"title"},[n("div",{staticClass:"pageTitle"},[t._v("当前问卷名称")]),n("div",{staticClass:"subtitle"},[t._v("分析")]),n("div",{staticClass:"questionnaire-number"},[t._v("各题情况")])]),n("check-row"),n("el-container",{staticClass:"container2"},[n("div",{staticClass:"Row"},[n("el-row",{attrs:{type:"flex",align:"center"}},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"showBox"},[t._v(" 1.这是一道单选题 有效作答份数：100 ")])])],1)],1),n("el-table",{staticStyle:{width:"100%",overflow:"auto"},attrs:{data:t.multipleChoice_TableData,"header-cell-style":{textAlign:"left"},"cell-style":{textAlign:"left"}}},[n("el-table-column",{attrs:{prop:"number",label:"选项",width:"350%"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.row.number))])]}}])}),n("el-table-column",{attrs:{prop:"effortNumber",label:"有效作答份数"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.effortNumber)+" ")]}}])}),n("el-table-column",{attrs:{prop:"proportion",label:"比例"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.proportion)+" ")]}}])})],1),n("div",{staticClass:"Row"},[n("el-row",{attrs:{type:"flex",align:"center"}},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"showBox"},[t._v(" 2.这是一道多选题 有效作答份数：100 ")])])],1)],1),n("el-table",{staticStyle:{width:"100%",overflow:"auto"},attrs:{data:t.multipleChoiceQuestions_TableData,"header-cell-style":{textAlign:"left"},"cell-style":{textAlign:"left"}}},[n("el-table-column",{attrs:{prop:"number",label:"选项",width:"350%"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.row.number))])]}}])}),n("el-table-column",{attrs:{prop:"effortNumber",label:"有效作答份数"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.effortNumber)+" ")]}}])}),n("el-table-column",{attrs:{prop:"proportion",label:"比例"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.proportion)+" ")]}}])})],1),n("div",{staticClass:"Row"},[n("el-row",{attrs:{type:"flex",align:"center"}},[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"showBox"},[t._v(" 3.这是一道问答题 有效作答份数：100 ")])])],1)],1),n("el-table",{staticStyle:{width:"100%",overflow:"auto"},attrs:{data:t.QA,"header-cell-style":{textAlign:"left"},"cell-style":{textAlign:"left"}}},[n("el-table-column",{attrs:{prop:"number",label:"序号",width:"350%"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.row.number))])]}}])}),n("el-table-column",{attrs:{prop:"content",label:"内容"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.content)+" ")]}}])})],1)],1)],1)],1)},a=[],o=l("f983"),s=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"checkRow"}},[l("el-row",{attrs:{type:"flex",align:"center"}},[l("el-col",{attrs:{span:8}},[l("div",{staticClass:"showBox"},[t._v(" 快捷查看第 "),l("el-select",{attrs:{placeholder:"请选择",size:"small"},model:{value:t.numValue,callback:function(e){t.numValue=e},expression:"numValue"}},t._l(t.numOptions,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" 题 ")],1)]),l("el-col",{attrs:{span:8}},[l("el-button",{staticStyle:{"background-color":"#5F7880"}},[l("div",{staticClass:"bottonBox"},[t._v("查看")])])],1)],1)],1)},r=[],i={name:"checkRow",data:function(){return{numOptions:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"}],numValue:""}},watch:{showValue:function(t,e){console.log(t,e)},sortValue:function(t,e){console.log(t,e)}}},u=i,c=(l("3fe4"),l("2877")),f=Object(c["a"])(u,s,r,!1,null,"97361cb6",null),p=f.exports,b={name:"HomePage",components:{HeaderComponent:o["a"],CheckRow:p},data:function(){return{multipleChoice_TableData:[{number:"选项一",effortNumber:"20",proportion:"20.00%"},{number:"选项二",effortNumber:"50",proportion:"50.00%"},{number:"选项三",effortNumber:"30",proportion:"30.00%"}],multipleChoiceQuestions_TableData:[{number:"选项一",effortNumber:"100",proportion:"100.00%"},{number:"选项二",effortNumber:"20",proportion:"20.00%"}],QA:[{number:"1",content:"阿巴"},{number:"2",content:"阿巴阿巴"},{number:"3",content:"阿巴阿巴阿巴"},{number:"4",content:"阿巴阿巴阿巴"},{number:"5",content:"阿巴阿巴阿巴"},{number:"6",content:"阿巴阿巴阿巴"},{number:"7",content:"阿巴阿巴阿巴"}]}},methods:{}},d=b,m=(l("d794"),Object(c["a"])(d,n,a,!1,null,"dca02290",null));e["default"]=m.exports},f7aa:function(t,e,l){}}]);
//# sourceMappingURL=chunk-13cc5107.2081a2b2.js.map