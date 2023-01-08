"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[661],{3628:function(t,e,n){n.r(e),n.d(e,{default:function(){return W}});var o=n(6252);const d={class:"relax-doc"},r=(0,o._)("h1",null,"Textarea 文本框",-1),l=(0,o._)("p",null,"文本框相关操作",-1),a=(0,o._)("h4",{id:"ji-ben-yong-fa"},[(0,o._)("a",{class:"header-anchor",href:"#ji-ben-yong-fa"}),(0,o.Uk)(" 基本用法")],-1),u=(0,o._)("p",null,"最大高度为默认高度",-1),i=(0,o._)("p",null,"基本用法",-1),c=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},'\n<template>\n  <v-textarea\n    v-model="text"\n    resize="horizontal"\n    @input="input"\n  ></v-textarea>\n</template>\n\n<script>\n\n  import { ref } from \'vue\';\n\n  export default {\n\n    setup() {\n\n      let text = ref(\'123\');\n\n      function input(val) {\n        console.log(val);\n      }\n\n      return {\n        text,\n        input,\n      }\n    }\n  }\n<\/script>\n\n')],-1),s=(0,o._)("h4",{id:"zi-gua-ying"},[(0,o._)("a",{class:"header-anchor",href:"#zi-gua-ying"}),(0,o.Uk)(" 自适应")],-1),h=(0,o._)("p",null,"高度自适应",-1),p=(0,o._)("p",null,"设置 autosize 属性为true",-1),m=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},"\n<template>\n  <v-textarea\n    v-model=\"text\"\n    autosize\n    @input=\"input\"\n  ></v-textarea>\n</template>\n\n<script>\n\n  import { ref } from 'vue';\n\n  export default {\n\n    setup() {\n\n      let text = ref('123');\n\n      function input(val) {\n        console.log(val);\n      }\n\n      return {\n        text,\n        input,\n      }\n    }\n  }\n<\/script>\n\n")],-1),f=(0,o._)("h4",{id:"she-zhi-gao-du-fan-wei"},[(0,o._)("a",{class:"header-anchor",href:"#she-zhi-gao-du-fan-wei"}),(0,o.Uk)(" 设置高度范围")],-1),x=(0,o._)("p",null,"设置高度范围",-1),v=(0,o._)("p",null,'设置autosize对象，如 :autosize="{ minRows: 2, maxRows: 4}"',-1),g=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},'\n<template>\n  <v-textarea\n    v-model="text"\n    :autosize="{ minRows: 2, maxRows: 4}"\n    @input="input"\n  ></v-textarea>\n</template>\n<script>\n  import { ref } from \'vue\';\n\n  export default {\n    setup() {\n      let text = ref(\'123\');\n\n      function input(val) {\n        console.log(val);\n      }\n\n      return {\n        text,\n        input,\n      }\n    }\n  }\n<\/script>\n')],-1),_=(0,o._)("h4",{id:"she-zhi-zui-da-shu-ru-shu-mu"},[(0,o._)("a",{class:"header-anchor",href:"#she-zhi-zui-da-shu-ru-shu-mu"}),(0,o.Uk)(" 设置最大输入数目")],-1),w=(0,o._)("p",null,"超过数量禁止输入",-1),z=(0,o._)("p",null,"基本用法",-1),k=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},'\n<template>\n\n  <v-textarea\n    v-model="text"\n    showWordLimit\n    resize="horizontal"\n    :maxLength="10"\n    @input="input"\n  ></v-textarea>\n\n</template>\n\n<script>\n\n  import { ref } from \'vue\';\n\n  export default {\n\n    setup() {\n\n      let text = ref(\'123\');\n\n      function input(val) {\n        console.log(val);\n      }\n\n      return {\n        text,\n        input,\n      }\n    }\n  }\n<\/script>\n\n')],-1),b=(0,o.uE)('<h3 id="api"><a class="header-anchor" href="#api"></a> API</h3><h4 id="props"><a class="header-anchor" href="#props"></a> props</h4><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>值</td><td>-</td><td>-</td><td>-</td></tr><tr><td>width</td><td>组件宽度</td><td>String</td><td>-</td><td>420px</td></tr><tr><td>placeholder</td><td>默认展示内容</td><td>String</td><td>-</td><td>&#39;&#39;</td></tr><tr><td>autosize</td><td>自适应配置</td><td>Boolean, Object</td><td>-</td><td>-</td></tr><tr><td>showWordLimit</td><td>是否显示字数限制</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>maxLength</td><td>最大长度</td><td>Number</td><td>-</td><td>-</td></tr><tr><td>resize</td><td>resize方向</td><td>String</td><td>vertical/horizontal</td><td>vertical</td></tr></tbody></table><h4 id="event"><a class="header-anchor" href="#event"></a> event</h4><table class="example-table"><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>input</td><td>输入时触发</td><td>值</td></tr><tr><td>change</td><td>离开时</td><td>值</td></tr><tr><td>focus</td><td>聚焦时</td><td>值</td></tr><tr><td>blur</td><td>离开时</td><td>值</td></tr><tr><td>enter</td><td>回车时</td><td>值</td></tr><tr><td>compositionstart</td><td>中文输入开始</td><td>event</td></tr><tr><td>compositionupdate</td><td>中文输入中</td><td>event</td></tr><tr><td>compositionend</td><td>中文输入结束</td><td>event</td></tr></tbody></table><h4 id="attr"><a class="header-anchor" href="#attr"></a> attr</h4><table class="example-table"><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>clear</td><td>清空内容</td><td>-</td></tr><tr><td>select</td><td>选中</td><td>-</td></tr><tr><td>focus</td><td>聚焦</td><td>-</td></tr><tr><td>blur</td><td>脱离焦点</td><td>-</td></tr><tr><td>ref</td><td>textarea dom</td><td></td></tr></tbody></table>',7);var y=n(7869),V=n.n(y),B=n(9812),U={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=B;const{ref:o}=B;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,V().highlightBlock)}))},render:function(o,d){const r=t("v-textarea");return e(),n(r,{modelValue:o.text,"onUpdate:modelValue":t=>o.text=t,resize:"horizontal",onInput:o.input},null,8,["modelValue","onUpdate:modelValue","onInput"])},...{setup(){return{text:o("123"),input:function(t){console.log(t)}}}}}}(),"element-demo1":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=B;const{ref:o}=B;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,V().highlightBlock)}))},render:function(o,d){const r=t("v-textarea");return e(),n(r,{modelValue:o.text,"onUpdate:modelValue":t=>o.text=t,autosize:"",onInput:o.input},null,8,["modelValue","onUpdate:modelValue","onInput"])},...{setup(){return{text:o("123"),input:function(t){console.log(t)}}}}}}(),"element-demo2":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=B;const{ref:o}=B;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,V().highlightBlock)}))},render:function(o,d){const r=t("v-textarea");return e(),n(r,{modelValue:o.text,"onUpdate:modelValue":t=>o.text=t,autosize:{minRows:2,maxRows:4},onInput:o.input},null,8,["modelValue","onUpdate:modelValue","onInput"])},...{setup(){return{text:o("123"),input:function(t){console.log(t)}}}}}}(),"element-demo3":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=B;const{ref:o}=B;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,V().highlightBlock)}))},render:function(o,d){const r=t("v-textarea");return e(),n(r,{modelValue:o.text,"onUpdate:modelValue":t=>o.text=t,showWordLimit:"",resize:"horizontal",maxLength:10,onInput:o.input},null,8,["modelValue","onUpdate:modelValue","onInput"])},...{setup(){return{text:o("123"),input:function(t){console.log(t)}}}}}}()}};var W=(0,n(3744).Z)(U,[["render",function(t,e,n,y,V,B){const U=(0,o.up)("element-demo0"),W=(0,o.up)("demo-block"),A=(0,o.up)("element-demo1"),I=(0,o.up)("element-demo2"),j=(0,o.up)("element-demo3");return(0,o.wg)(),(0,o.iD)("section",d,[r,l,a,u,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(U)])),highlight:(0,o.w5)((()=>[c])),default:(0,o.w5)((()=>[i])),_:1}),s,h,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(A)])),highlight:(0,o.w5)((()=>[m])),default:(0,o.w5)((()=>[p])),_:1}),f,x,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(I)])),highlight:(0,o.w5)((()=>[g])),default:(0,o.w5)((()=>[v])),_:1}),_,w,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(j)])),highlight:(0,o.w5)((()=>[k])),default:(0,o.w5)((()=>[z])),_:1}),b])}]])}}]);
//# sourceMappingURL=textarea-d3e12e78.js.map