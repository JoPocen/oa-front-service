(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5523a126"],{"0f66":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return o}));var a=n("22b6");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a["a"].post("project/node",{module:e})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a["a"].post("project/node/allList",{module:e,node:t})}function l(e){return a["a"].post("project/node/save",{list:e})}function o(){return a["a"].post("project/node/clear")}},1542:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editable-cell"},[e.editable?n("div",{staticClass:"editable-cell-input-wrapper"},[n("a-input",{attrs:{value:e.value},on:{change:e.handleChange,pressEnter:e.check}}),n("a-icon",{staticClass:"editable-cell-icon-check",attrs:{type:"check"},on:{click:e.check}})],1):n("div",{staticClass:"editable-cell-text-wrapper"},[e.value?n("span",[e._v(e._s(e.value))]):0==e.value?n("span",[e._v(e._s(e.value))]):n("span"),n("a-icon",{staticClass:"editable-cell-icon",attrs:{type:"edit"},on:{click:e.edit}})],1)])},i=[],c=(n("c5f6"),n("b558")),l=n("0c63"),o={name:"EditableCell",components:{"a-input":c["a"],"a-icon":l["a"]},props:{text:[String,Number],showEdit:{type:[Boolean]}},data:function(){return{value:this.text,editable:!1}},methods:{handleChange:function(e){var t=e.target.value;this.value=t},check:function(){this.editable=!1,this.$emit("change",this.value)},edit:function(){this.editable=!0}}},s=o,r=(n("5092"),n("2877")),u=Object(r["a"])(s,a,i,!1,null,null,null);t["default"]=u.exports},"19ba":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin-menu"},[n("wrapper-content",[n("div",{staticClass:"action"},[n("Button",{attrs:{type:"primary",icon:"delete"},on:{click:e.clearNode}},[e._v("清理无效记录")])],1),e.data.length?n("Table",{attrs:{columns:e.columns,dataSource:e.data,rowKey:"node",defaultExpandAllRows:"",pagination:!1},scopedSlots:e._u([{key:"titles",fn:function(t,a){return[n("EditableCell",{attrs:{text:a.title?a.title:"-"},on:{change:function(t){return e.onCellChange(t,a.node)}}})]}},{key:"action",fn:function(t,a,i){return[-1!==a.node.indexOf("/")?n("div",[!a.children&&a.pnode?n("span",{staticStyle:{"margin-left":"24px"}}):e._e(),n("Checkbox",{attrs:{checked:e.isChecked(a,"is_login")},on:{change:function(t){return e.onChange(t,a,"is_login")}}},[a.children?n("span",[e._v("全部")]):e._e(),e._v("加入登录控制\n          ")]),!a.children&&a.pnode?n("span",{staticStyle:{"margin-left":"24px"}}):e._e(),n("Checkbox",{attrs:{checked:e.isChecked(a,"is_auth")},on:{change:function(t){return e.onChange(t,a,"is_auth")}}},[a.children?n("span",[e._v("全部")]):e._e(),e._v("加入权限控制\n          ")]),!a.children&&a.pnode?n("span",{staticStyle:{"margin-left":"24px"}}):e._e()],1):e._e()]}}],null,!1,2516118012)}):e._e()],1)],1)},i=[],c=(n("7f7f"),n("ac6a"),n("3af3")),l=n("0020"),o=n("5efb"),s=n("a79d"),r=n("ed3b"),u=n("b558"),d=n("bb76"),h=n("1542"),p=n("0f66"),f=(n("2f14"),n("68fe"),c["a"].Item),v=[{title:"节点",dataIndex:"node",width:"30%"},{title:"名称",width:"12%",scopedSlots:{customRender:"titles"}},{title:"操作",scopedSlots:{customRender:"action"}}],b={components:{Table:l["a"],Button:o["a"],Divider:s["a"],Modal:r["a"],Form:c["a"],FormItem:f,Input:u["a"],EditableCell:h["default"],Checkbox:d["a"]},data:function(){return{columns:v,data:[],loading:!0}},created:function(){this.init()},methods:{init:function(){var e=this;e.$store.dispatch("pageLoading",!0),Object(p["c"])().then((function(t){e.$store.dispatch("pageLoading",!1),e.data=t.data.nodes}))},clearNode:function(){Object(p["b"])()},onCellChange:function(e,t){Object(p["d"])(JSON.stringify([{name:[{name:"title"}],value:[{value:e}],node:t}]))},onChange:function(e,t,n){var a=e.target.checked;t[n]=a;var i=[],c={name:[{name:n}],value:[{value:a}],node:t.node};t.children&&t.children.forEach((function(e){e[n]=a;var t={name:[{name:n}],value:[{value:a}],node:e.node};a&&"is_auth"===n&&(e["is_login"]=a,t.name.push({name:"is_login"}),t.value.push({value:a})),i.push(t)})),a&&"is_auth"===n&&(t["is_login"]=a,c.name.push({name:"is_login"}),c.value.push({value:a})),i.push(c),i&&Object(p["d"])(JSON.stringify(i))},rowClick:function(e,t){},isChecked:function(e,t){if(!e.children)return!!e[t];var n=0;return e.children.forEach((function(e){e[t]&&n++})),n===e.children.length}}},g=b,m=n("2877"),_=Object(m["a"])(g,a,i,!1,null,null,null);t["default"]=_.exports},"1cb2":function(e,t,n){},5092:function(e,t,n){"use strict";var a=n("1cb2"),i=n.n(a);i.a}}]);