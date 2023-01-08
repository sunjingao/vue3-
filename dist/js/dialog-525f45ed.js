"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[802],{1537:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var l=n(6252);const o={class:"relax-doc"},i=(0,l._)("h1",null,"Dialog 对话框",-1),a=(0,l._)("p",null,"Dialog 对话框",-1),d=(0,l._)("h4",{id:"ji-ben-yong-fa"},[(0,l._)("a",{class:"header-anchor",href:"#ji-ben-yong-fa"}),(0,l.Uk)(" 基本用法")],-1),s=(0,l._)("p",null,"基本用法",-1),r=(0,l._)("p",null,"基本用法",-1),c=(0,l._)("pre",null,[(0,l._)("code",{class:"html"},'\n<template>\n\n  <v-dialog\n    v-model="visible"\n    title="this is title"\n    class="vDialogDoc"\n  >\n    <div>这是一段信息</div>\n    <template #footer>\n        <span>\n          <v-button @click="visible=false">取 消</v-button>\n          <v-button type="primary" @click="visible=false" class="v-ml5">确 定</v-button>\n        </span>\n    </template>\n  </v-dialog>\n  <v-button @click="open">open</v-button>\n</template>\n<script>\n  import { ref } from \'vue\';\n\n  export default {\n    setup() {\n      const visible = ref(null);\n\n      function open() {\n        visible.value = true;\n      }\n\n      return {\n        visible,\n        open\n      }\n    },\n  }\n<\/script>\n')],-1),u=(0,l._)("h4",{id:"ju-zhong-bu-ju"},[(0,l._)("a",{class:"header-anchor",href:"#ju-zhong-bu-ju"}),(0,l.Uk)(" 居中布局")],-1),p=(0,l._)("p",null,"标题和footer部分可居中对局",-1),v=(0,l._)("p",null,"设置center属性",-1),h=(0,l._)("pre",null,[(0,l._)("code",{class:"html"},'\n<template>\n\n  <v-dialog\n    title="this is title"\n    v-model="visible"\n    center\n    width="300"\n    class="vDialogDoc"\n  >\n    <div style="">这是一段信息</div>\n    <template #footer>\n        <span>\n          <v-button @click="visible=false">取 消</v-button>\n          <v-button type="primary" @click="visible=false" class="v-ml5">确 定</v-button>\n        </span>\n    </template>\n  </v-dialog>\n  <v-button @click="open">open</v-button>\n</template>\n<script>\n  import { ref } from \'vue\';\n\n  export default {\n    setup() {\n      const visible = ref(null);\n\n      function open() {\n        visible.value = true;\n      }\n\n      return {\n        visible,\n        open\n      }\n    },\n  }\n<\/script>\n')],-1),m=(0,l._)("h4",{id:"qian-tao"},[(0,l._)("a",{class:"header-anchor",href:"#qian-tao"}),(0,l.Uk)(" 嵌套")],-1),f=(0,l._)("p",null,"打开对话框后，点击嵌套按钮，可以打开新的对话框。",-1),b=(0,l._)("p",null,"嵌套",-1),k=(0,l._)("pre",null,[(0,l._)("code",{class:"html"},'\n<template>\n\n  <v-dialog\n    title="222222222"\n    v-model="nest"\n    width="500"\n    class="vDialogDoc"\n  >\n    <div style="height: 500px">这是嵌套内容</div>\n    <template #footer>\n         <span>\n          <v-button @click="nest=false">取 消</v-button>\n          <v-button type="primary" @click="nest=false" class="v-ml5">确 定</v-button>\n        </span>\n    </template>\n  </v-dialog>\n\n  <v-dialog\n    title="this is title"\n    v-model="visible"\n    center\n    width="300"\n    class="vDialogDoc">\n    <div style="">这是一段信息</div>\n    <template #footer>\n        <span>\n          <v-button @click="visible=false">取 消</v-button>\n          <v-button type="primary" @click="nest=true" class="v-ml5">嵌 套</v-button>\n        </span>\n    </template>\n  </v-dialog>\n  <v-button @click="open">open</v-button>\n</template>\n<script>\n  import { ref } from \'vue\';\n\n  export default {\n    setup() {\n      const nest = ref(false);\n      const visible = ref(null);\n\n      function open() {\n        visible.value = true;\n      }\n\n      return {\n        nest,\n        visible,\n        open\n      }\n    },\n  }\n<\/script>\n')],-1),g=(0,l.uE)('<h3 id="api"><a class="header-anchor" href="#api"></a> API</h3><h4 id="props"><a class="header-anchor" href="#props"></a> props</h4><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>值</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>title</td><td>标题</td><td>String</td><td>-</td><td>&#39;&#39;</td></tr><tr><td>center</td><td>是否居中</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>showClose</td><td>是否展示close按钮</td><td>Boolean</td><td>-</td><td>true</td></tr><tr><td>width</td><td>宽度</td><td>String</td><td>-</td><td>50%</td></tr><tr><td>closeCallBack</td><td>点击关闭前的回调</td><td>Function</td><td>-</td><td>true</td></tr></tbody></table><h4 id="slot"><a class="header-anchor" href="#slot"></a> slot</h4><table class="example-table"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>标题处的插槽</td></tr><tr><td>default</td><td>内容处的插槽</td></tr><tr><td>footer</td><td>footer处的插槽</td></tr></tbody></table>',5);var _=n(7869),y=n.n(_),C=n(9812),V={name:"component-doc",components:{"element-demo0":function(){const{createElementVNode:t,createTextVNode:e,resolveComponent:n,withCtx:l,createVNode:o,Fragment:i,openBlock:a,createElementBlock:d}=C;const{ref:s}=C;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,y().highlightBlock)}))},render:function(s,r){const c=n("v-button"),u=n("v-dialog");return a(),d(i,null,[o(u,{modelValue:s.visible,"onUpdate:modelValue":t=>s.visible=t,title:"this is title",class:"vDialogDoc"},{footer:l((()=>[t("span",null,[o(c,{onClick:t=>s.visible=!1},{default:l((()=>[e("取 消")])),_:1},8,["onClick"]),o(c,{type:"primary",onClick:t=>s.visible=!1,class:"v-ml5"},{default:l((()=>[e("确 定")])),_:1},8,["onClick"])])])),default:l((()=>[t("div",null,"这是一段信息")])),_:1},8,["modelValue","onUpdate:modelValue"]),o(c,{onClick:s.open},{default:l((()=>[e("open")])),_:1},8,["onClick"])],64)},...{setup(){const t=s(null);return{visible:t,open:function(){t.value=!0}}}}}}(),"element-demo1":function(){const{createElementVNode:t,createTextVNode:e,resolveComponent:n,withCtx:l,createVNode:o,Fragment:i,openBlock:a,createElementBlock:d}=C;const{ref:s}=C;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,y().highlightBlock)}))},render:function(s,r){const c=n("v-button"),u=n("v-dialog");return a(),d(i,null,[o(u,{title:"this is title",modelValue:s.visible,"onUpdate:modelValue":t=>s.visible=t,center:"",width:"300",class:"vDialogDoc"},{footer:l((()=>[t("span",null,[o(c,{onClick:t=>s.visible=!1},{default:l((()=>[e("取 消")])),_:1},8,["onClick"]),o(c,{type:"primary",onClick:t=>s.visible=!1,class:"v-ml5"},{default:l((()=>[e("确 定")])),_:1},8,["onClick"])])])),default:l((()=>[t("div",{style:{}},"这是一段信息")])),_:1},8,["modelValue","onUpdate:modelValue"]),o(c,{onClick:s.open},{default:l((()=>[e("open")])),_:1},8,["onClick"])],64)},...{setup(){const t=s(null);return{visible:t,open:function(){t.value=!0}}}}}}(),"element-demo2":function(){const{createElementVNode:t,createTextVNode:e,resolveComponent:n,withCtx:l,createVNode:o,Fragment:i,openBlock:a,createElementBlock:d}=C;const{ref:s}=C;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,y().highlightBlock)}))},render:function(s,r){const c=n("v-button"),u=n("v-dialog");return a(),d(i,null,[o(u,{title:"222222222",modelValue:s.nest,"onUpdate:modelValue":t=>s.nest=t,width:"500",class:"vDialogDoc"},{footer:l((()=>[t("span",null,[o(c,{onClick:t=>s.nest=!1},{default:l((()=>[e("取 消")])),_:1},8,["onClick"]),o(c,{type:"primary",onClick:t=>s.nest=!1,class:"v-ml5"},{default:l((()=>[e("确 定")])),_:1},8,["onClick"])])])),default:l((()=>[t("div",{style:{height:"500px"}},"这是嵌套内容")])),_:1},8,["modelValue","onUpdate:modelValue"]),o(u,{title:"this is title",modelValue:s.visible,"onUpdate:modelValue":t=>s.visible=t,center:"",width:"300",class:"vDialogDoc"},{footer:l((()=>[t("span",null,[o(c,{onClick:t=>s.visible=!1},{default:l((()=>[e("取 消")])),_:1},8,["onClick"]),o(c,{type:"primary",onClick:t=>s.nest=!0,class:"v-ml5"},{default:l((()=>[e("嵌 套")])),_:1},8,["onClick"])])])),default:l((()=>[t("div",{style:{}},"这是一段信息")])),_:1},8,["modelValue","onUpdate:modelValue"]),o(c,{onClick:s.open},{default:l((()=>[e("open")])),_:1},8,["onClick"])],64)},...{setup(){const t=s(!1),e=s(null);return{nest:t,visible:e,open:function(){e.value=!0}}}}}}()}};var w=(0,n(3744).Z)(V,[["render",function(t,e,n,_,y,C){const V=(0,l.up)("element-demo0"),w=(0,l.up)("demo-block"),D=(0,l.up)("element-demo1"),x=(0,l.up)("element-demo2");return(0,l.wg)(),(0,l.iD)("section",o,[i,a,d,s,(0,l.Wm)(w,null,{source:(0,l.w5)((()=>[(0,l.Wm)(V)])),highlight:(0,l.w5)((()=>[c])),default:(0,l.w5)((()=>[r])),_:1}),u,p,(0,l.Wm)(w,null,{source:(0,l.w5)((()=>[(0,l.Wm)(D)])),highlight:(0,l.w5)((()=>[h])),default:(0,l.w5)((()=>[v])),_:1}),m,f,(0,l.Wm)(w,null,{source:(0,l.w5)((()=>[(0,l.Wm)(x)])),highlight:(0,l.w5)((()=>[k])),default:(0,l.w5)((()=>[b])),_:1}),g])}]])}}]);
//# sourceMappingURL=dialog-525f45ed.js.map