"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[173],{1871:function(t,n,e){e.r(n),e.d(n,{default:function(){return W}});var o=e(6252);const r={class:"relax-doc"},l=(0,o._)("h1",null,"MessageBox 弹框",-1),c=(0,o._)("p",null,"MessageBox 弹框",-1),s=(0,o._)("h4",{id:"xiao-xi-lei-xing-ti-shi"},[(0,o._)("a",{class:"header-anchor",href:"#xiao-xi-lei-xing-ti-shi"}),(0,o.Uk)(" 消息类型提示")],-1),a=(0,o._)("p",null,"默认为message类型。右下角仅有确认按钮",-1),i=(0,o._)("p",null,"默认的type为message类型",-1),p=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},"\n<template>\n  <div>\n    <button @click=\"open\">click</button>\n  </div>\n</template>\n<script>\n  import { getCurrentInstance } from 'vue';\n\n  export default {\n    setup() {\n\n      const instance = getCurrentInstance();\n\n      function open() {\n\n        const messageBox = instance.appContext.config.globalProperties.$messageBox({\n          title: '这是标题',\n          content: '这是内容',\n        });\n        messageBox.open();\n      }\n\n      return {\n        open\n      }\n    },\n  }\n<\/script>\n")],-1),d=(0,o._)("h4",{id:"que-ren-lei-xing-ti-shi"},[(0,o._)("a",{class:"header-anchor",href:"#que-ren-lei-xing-ti-shi"}),(0,o.Uk)(" 确认类型提示")],-1),u=(0,o._)("p",null,"确认类型。右下角有取消及确认按钮",-1),m=(0,o._)("p",null,"设置type为confirm",-1),h=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},"\n<template>\n  <div>\n    <button @click=\"open\">click</button>\n  </div>\n</template>\n<script>\n  import { getCurrentInstance } from 'vue';\n\n  export default {\n    setup() {\n      const ins = getCurrentInstance().appContext.config.globalProperties;\n\n      function open() {\n\n        const messageBox = ins.$messageBox({\n          type: 'confirm',\n          title: '这是标题',\n          content: '这是内容',\n          cancelCallBack(val) {\n            ins.$message({\n              title: 'cancel时的错误提示',\n              type: 'error'\n            }).open();\n            return true;\n          },\n          confirmCallBack(val) {\n            ins.$message({\n              title: 'confirm时的错误提示',\n              type: 'error'\n            }).open();\n            return true;\n          },\n          closeCallBack(val) {\n            ins.$message({\n              title: 'close时的错误提示',\n              type: 'error'\n            }).open();\n            return true;\n          },\n        });\n        messageBox.open();\n      }\n\n      return {\n        open\n      }\n    },\n  }\n<\/script>\n")],-1),g=(0,o._)("h4",{id:"ti-jiao-lei-xing-ti-shi"},[(0,o._)("a",{class:"header-anchor",href:"#ti-jiao-lei-xing-ti-shi"}),(0,o.Uk)(" 提交类型提示")],-1),f=(0,o._)("p",null,"提交类型。带有输入内容",-1),k=(0,o._)("p",null,"设置type为prompt",-1),x=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},"\n<template>\n  <div>\n    <button @click=\"open\">click</button>\n  </div>\n</template>\n<script>\n  import { getCurrentInstance } from 'vue';\n\n  export default {\n    setup() {\n      const ins = getCurrentInstance().appContext.config.globalProperties;\n\n      function open() {\n        const messageBox = ins.$messageBox({\n          type: 'prompt',\n          title: '这是标题',\n          content: '这是内容',\n        });\n        messageBox.open();\n      }\n\n      return {\n        open\n      }\n    },\n  }\n<\/script>\n")],-1),B=(0,o._)("h4",{id:"shi-yong-htmlzi-ding-yi-zhan-shi"},[(0,o._)("a",{class:"header-anchor",href:"#shi-yong-htmlzi-ding-yi-zhan-shi"}),(0,o.Uk)(" 使用html自定义展示")],-1),C=(0,o._)("p",null,"使用html自定义展示标题及正文",-1),y=(0,o._)("p",null,"使用html自定义",-1),b=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},"\n<template>\n  <div>\n    <button @click=\"open\">click</button>\n  </div>\n</template>\n<script>\n  import { getCurrentInstance } from 'vue';\n\n  export default {\n\n    setup() {\n\n      const ins = getCurrentInstance().appContext.config.globalProperties;\n\n      function open() {\n\n        const messageBox = ins.$messageBox({\n          type: 'prompt',\n          title: '<span style=\"color:red;\">这是自定义标题</span>',\n          content: '<span style=\"color:red;\">这是自定义内容</span>',\n        });\n        messageBox.open();\n      }\n\n      return {\n        open\n      }\n    },\n  }\n<\/script>\n")],-1),_=(0,o._)("h4",{id:"hui-diao"},[(0,o._)("a",{class:"header-anchor",href:"#hui-diao"}),(0,o.Uk)(" 回调")],-1),v=(0,o._)("p",null,"允许通过回调函数控制关闭",-1),$=(0,o._)("p",null,"分为cancelCallBack，confirmCallBack，closeCallBack等几个回调",-1),w=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},"\n<template>\n  <div>\n    <button @click=\"open\">click</button>\n  </div>\n</template>\n<script>\n  import { getCurrentInstance } from 'vue';\n\n  export default {\n    setup() {\n      const ins = getCurrentInstance().appContext.config.globalProperties;\n\n      function open() {\n\n        const messageBox = ins.$messageBox({\n          type: 'prompt',\n          title: '这是标题',\n          content: '这是内容',\n          cancelCallBack(val) {\n            const message = ins.$message({\n              title: '取消失败',\n              type: 'error'\n            });\n            message.open();\n            return false;\n          },\n          confirmCallBack(val) {\n            const message = ins.$message({\n              title: '确认失败',\n              type: 'error'\n            });\n            message.open();\n            return false;\n          },\n          closeCallBack(val) {\n            const message = ins.$message({\n              title: '关闭失败',\n              type: 'error'\n            });\n            message.open();\n            return false;\n          },\n        });\n        messageBox.open();\n      }\n\n      return {\n        open\n      }\n    },\n  }\n<\/script>\n")],-1),E=(0,o.uE)('<h3 id="api"><a class="header-anchor" href="#api"></a> API</h3><h4 id="props"><a class="header-anchor" href="#props"></a> props</h4><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>弹框类型</td><td>String</td><td>message、confirm、prompt</td><td>message</td></tr><tr><td>title</td><td>标题内容</td><td>String</td><td>-</td><td>&#39;&#39;</td></tr><tr><td>content</td><td>content内容</td><td>String</td><td>-</td><td>&#39;&#39;</td></tr><tr><td>cancelButtonText</td><td>取消按钮中的内容</td><td>String</td><td>-</td><td>取消</td></tr><tr><td>confirmButtonText</td><td>确认按钮中的内容</td><td>String</td><td>-</td><td>确认</td></tr><tr><td>cancelCallBack</td><td>点击取消按钮时的回调</td><td>Function</td><td>-</td><td>如果type为prompt，参数为输入的值</td></tr><tr><td>confirmCallBack</td><td>点击确认按钮时的回调</td><td>Function</td><td>-</td><td>如果type为prompt，参数为输入的值</td></tr><tr><td>closeCallBack</td><td>点击关闭符号时的回调</td><td>Function</td><td>-</td><td>如果type为prompt，参数为输入的值</td></tr></tbody></table><h4 id="attr"><a class="header-anchor" href="#attr"></a> attr</h4><table class="example-table"><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>show</td><td>显示</td><td>-</td></tr><tr><td>hide</td><td>关闭</td><td>-</td></tr></tbody></table>',5);var I=e(7869),A=e.n(I),P=e(9812),S={name:"component-doc",components:{"element-demo0":function(){const{createElementVNode:t,openBlock:n,createElementBlock:e}=P;const{getCurrentInstance:o}=P;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,A().highlightBlock)}))},render:function(o,r){return n(),e("div",null,[t("button",{onClick:o.open},"click",8,["onClick"])])},...{setup(){const t=o();return{open:function(){t.appContext.config.globalProperties.$messageBox({title:"这是标题",content:"这是内容"}).open()}}}}}}(),"element-demo1":function(){const{createElementVNode:t,openBlock:n,createElementBlock:e}=P;const{getCurrentInstance:o}=P;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,A().highlightBlock)}))},render:function(o,r){return n(),e("div",null,[t("button",{onClick:o.open},"click",8,["onClick"])])},...{setup(){const t=o().appContext.config.globalProperties;return{open:function(){t.$messageBox({type:"confirm",title:"这是标题",content:"这是内容",cancelCallBack(n){return t.$message({title:"cancel时的错误提示",type:"error"}).open(),!0},confirmCallBack(n){return t.$message({title:"confirm时的错误提示",type:"error"}).open(),!0},closeCallBack(n){return t.$message({title:"close时的错误提示",type:"error"}).open(),!0}}).open()}}}}}}(),"element-demo2":function(){const{createElementVNode:t,openBlock:n,createElementBlock:e}=P;const{getCurrentInstance:o}=P;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,A().highlightBlock)}))},render:function(o,r){return n(),e("div",null,[t("button",{onClick:o.open},"click",8,["onClick"])])},...{setup(){const t=o().appContext.config.globalProperties;return{open:function(){t.$messageBox({type:"prompt",title:"这是标题",content:"这是内容"}).open()}}}}}}(),"element-demo3":function(){const{createElementVNode:t,openBlock:n,createElementBlock:e}=P;const{getCurrentInstance:o}=P;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,A().highlightBlock)}))},render:function(o,r){return n(),e("div",null,[t("button",{onClick:o.open},"click",8,["onClick"])])},...{setup(){const t=o().appContext.config.globalProperties;return{open:function(){t.$messageBox({type:"prompt",title:'<span style="color:red;">这是自定义标题</span>',content:'<span style="color:red;">这是自定义内容</span>'}).open()}}}}}}(),"element-demo4":function(){const{createElementVNode:t,openBlock:n,createElementBlock:e}=P;const{getCurrentInstance:o}=P;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,A().highlightBlock)}))},render:function(o,r){return n(),e("div",null,[t("button",{onClick:o.open},"click",8,["onClick"])])},...{setup(){const t=o().appContext.config.globalProperties;return{open:function(){t.$messageBox({type:"prompt",title:"这是标题",content:"这是内容",cancelCallBack(n){return t.$message({title:"取消失败",type:"error"}).open(),!1},confirmCallBack(n){return t.$message({title:"确认失败",type:"error"}).open(),!1},closeCallBack(n){return t.$message({title:"关闭失败",type:"error"}).open(),!1}}).open()}}}}}}()}};var W=(0,e(3744).Z)(S,[["render",function(t,n,e,I,A,P){const S=(0,o.up)("element-demo0"),W=(0,o.up)("demo-block"),j=(0,o.up)("element-demo1"),q=(0,o.up)("element-demo2"),T=(0,o.up)("element-demo3"),N=(0,o.up)("element-demo4");return(0,o.wg)(),(0,o.iD)("section",r,[l,c,s,a,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(S)])),highlight:(0,o.w5)((()=>[p])),default:(0,o.w5)((()=>[i])),_:1}),d,u,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(j)])),highlight:(0,o.w5)((()=>[h])),default:(0,o.w5)((()=>[m])),_:1}),g,f,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(q)])),highlight:(0,o.w5)((()=>[x])),default:(0,o.w5)((()=>[k])),_:1}),B,C,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(T)])),highlight:(0,o.w5)((()=>[b])),default:(0,o.w5)((()=>[y])),_:1}),_,v,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(N)])),highlight:(0,o.w5)((()=>[w])),default:(0,o.w5)((()=>[$])),_:1}),E])}]])}}]);
//# sourceMappingURL=messageBox-096fbf50.js.map