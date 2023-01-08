"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[674],{4914:function(t,n,e){e.r(n),e.d(n,{default:function(){return W}});var o=e(6252);const r={class:"relax-doc"},u=(0,o._)("h2",{id:"inputnumber-ji-shu-qi"},[(0,o._)("a",{class:"header-anchor",href:"#inputnumber-ji-shu-qi"}),(0,o.Uk)(" InputNumber 计数器")],-1),l=(0,o._)("p",null,"在一定范围内，变化数据",-1),d=(0,o._)("h4",{id:"ji-chu-yong-fa"},[(0,o._)("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),(0,o.Uk)(" 基础用法")],-1),c=(0,o._)("p",null,"基础用法",-1),i=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},'\n<template>\n  <v-input-number v-model="counter" @input="input">\n  </v-input-number>\n</template>\n<script>\n  import { ref } from \'vue\'\n\n  export default {\n\n    setup() {\n      const counter = ref(3);\n\n      function input(val) {\n        console.log(val);\n      }\n\n      return {\n        counter,\n        input,\n      }\n    }\n  }\n<\/script>\n')],-1),p=(0,o._)("h4",{id:"jin-zhi-cao-zuo"},[(0,o._)("a",{class:"header-anchor",href:"#jin-zhi-cao-zuo"}),(0,o.Uk)(" 禁止操作")],-1),a=(0,o._)("p",null,"禁止填写和点击来改变数字",-1),s=(0,o._)("p",null,"添加disabled属性",-1),m=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},"\n<template>\n  <v-input-number v-model=\"counter\" disabled></v-input-number>\n</template>\n<script>\n  import { ref } from 'vue'\n\n  export default {\n\n    setup() {\n      const counter = ref(3);\n\n      return {\n        counter,\n      }\n    }\n  }\n<\/script>\n")],-1),h=(0,o._)("h4",{id:"bu-shu"},[(0,o._)("a",{class:"header-anchor",href:"#bu-shu"}),(0,o.Uk)(" 步数")],-1),f=(0,o._)("p",null,"控制每次点击增加 / 减少 改变的大小",-1),b=(0,o._)("p",null,"通过 step 属性控制",-1),v=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},'\n<template>\n  <v-input-number v-model="counter" :step="2" @input="input"></v-input-number>\n</template>\n<script>\n  import { ref } from \'vue\'\n\n  export default {\n\n    setup() {\n      const counter = ref(3);\n\n      function input(val) {\n        console.log(val);\n      }\n\n      return {\n        counter,\n        input,\n      }\n    }\n  }\n<\/script>\n')],-1),g=(0,o._)("h4",{id:"fan-wei"},[(0,o._)("a",{class:"header-anchor",href:"#fan-wei"}),(0,o.Uk)(" 范围")],-1),_=(0,o._)("p",null,"改变区域的范围",-1),k=(0,o._)("p",null,"通过控制 max 和 min 属性",-1),w=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},'\n<template>\n  <v-input-number v-model="counter" :min="-3" :max="10" @input="input"></v-input-number>\n</template>\n<script>\n  import { ref } from \'vue\'\n\n  export default {\n\n    setup() {\n      const counter = ref(3);\n\n      function input(val) {\n        console.log(val);\n      }\n\n      return {\n        counter,\n        input,\n      }\n    }\n  }\n<\/script>\n')],-1),V=(0,o._)("h4",{id:"wei-zhi"},[(0,o._)("a",{class:"header-anchor",href:"#wei-zhi"}),(0,o.Uk)(" 位置")],-1),y=(0,o._)("p",null,"控制点击区域的位置",-1),x=(0,o._)("p",null,"controlsPosition属性的 bothSides 和 rightSide 属性",-1),U=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},'\n<template>\n  <v-input-number\n    v-model="counter"\n    controlsPosition="rightSide"\n    @input="input"\n  ></v-input-number>\n</template>\n<script>\n  import { ref } from \'vue\'\n\n  export default {\n\n    setup() {\n      const counter = ref(3);\n\n      function input(val) {\n        console.log(val);\n      }\n\n      return {\n        counter,\n        input,\n      }\n    }\n  }\n<\/script>\n')],-1),A=(0,o.uE)('<h3 id="api"><a class="header-anchor" href="#api"></a> API</h3><h4 id="props"><a class="header-anchor" href="#props"></a> props</h4><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>值</td><td>-</td><td>-</td><td>-</td></tr><tr><td>controlsPosition</td><td>点击区域的位置</td><td>String</td><td>bothSides / rightSide</td><td>bothSides</td></tr><tr><td>disabled</td><td>是否禁止选中</td><td>-</td><td>-</td><td>false</td></tr><tr><td>width</td><td>宽度</td><td>String</td><td>-</td><td>180px</td></tr><tr><td>height</td><td>高度</td><td>String</td><td>-</td><td>40px</td></tr><tr><td>min</td><td>最小值</td><td>Number</td><td>-</td><td>-Number.MAX_VALUE</td></tr><tr><td>max</td><td>最大值</td><td>Number</td><td>-</td><td>Number.MAX_VALUE</td></tr><tr><td>step</td><td>每次改变的大小</td><td>Number</td><td>-</td><td>1</td></tr></tbody></table><h4 id="event"><a class="header-anchor" href="#event"></a> event</h4><table class="example-table"><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>input</td><td>输入</td><td>值</td></tr></tbody></table>',5);var B=e(7869),S=e.n(B),j=e(9812),I={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:t,openBlock:n,createBlock:e}=j;const{ref:o}=j;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,S().highlightBlock)}))},render:function(o,r){const u=t("v-input-number");return n(),e(u,{modelValue:o.counter,"onUpdate:modelValue":t=>o.counter=t,onInput:o.input},null,8,["modelValue","onUpdate:modelValue","onInput"])},...{setup(){return{counter:o(3),input:function(t){console.log(t)}}}}}}(),"element-demo1":function(){const{resolveComponent:t,openBlock:n,createBlock:e}=j;const{ref:o}=j;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,S().highlightBlock)}))},render:function(o,r){const u=t("v-input-number");return n(),e(u,{modelValue:o.counter,"onUpdate:modelValue":t=>o.counter=t,disabled:""},null,8,["modelValue","onUpdate:modelValue"])},...{setup(){return{counter:o(3)}}}}}(),"element-demo2":function(){const{resolveComponent:t,openBlock:n,createBlock:e}=j;const{ref:o}=j;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,S().highlightBlock)}))},render:function(o,r){const u=t("v-input-number");return n(),e(u,{modelValue:o.counter,"onUpdate:modelValue":t=>o.counter=t,step:2,onInput:o.input},null,8,["modelValue","onUpdate:modelValue","onInput"])},...{setup(){return{counter:o(3),input:function(t){console.log(t)}}}}}}(),"element-demo3":function(){const{resolveComponent:t,openBlock:n,createBlock:e}=j;const{ref:o}=j;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,S().highlightBlock)}))},render:function(o,r){const u=t("v-input-number");return n(),e(u,{modelValue:o.counter,"onUpdate:modelValue":t=>o.counter=t,min:-3,max:10,onInput:o.input},null,8,["modelValue","onUpdate:modelValue","onInput"])},...{setup(){return{counter:o(3),input:function(t){console.log(t)}}}}}}(),"element-demo4":function(){const{resolveComponent:t,openBlock:n,createBlock:e}=j;const{ref:o}=j;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,S().highlightBlock)}))},render:function(o,r){const u=t("v-input-number");return n(),e(u,{modelValue:o.counter,"onUpdate:modelValue":t=>o.counter=t,controlsPosition:"rightSide",onInput:o.input},null,8,["modelValue","onUpdate:modelValue","onInput"])},...{setup(){return{counter:o(3),input:function(t){console.log(t)}}}}}}()}};var W=(0,e(3744).Z)(I,[["render",function(t,n,e,B,S,j){const I=(0,o.up)("element-demo0"),W=(0,o.up)("demo-block"),E=(0,o.up)("element-demo1"),q=(0,o.up)("element-demo2"),C=(0,o.up)("element-demo3"),z=(0,o.up)("element-demo4");return(0,o.wg)(),(0,o.iD)("section",r,[u,l,d,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(I)])),highlight:(0,o.w5)((()=>[i])),default:(0,o.w5)((()=>[c])),_:1}),p,a,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(E)])),highlight:(0,o.w5)((()=>[m])),default:(0,o.w5)((()=>[s])),_:1}),h,f,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(q)])),highlight:(0,o.w5)((()=>[v])),default:(0,o.w5)((()=>[b])),_:1}),g,_,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(C)])),highlight:(0,o.w5)((()=>[w])),default:(0,o.w5)((()=>[k])),_:1}),V,y,(0,o.Wm)(W,null,{source:(0,o.w5)((()=>[(0,o.Wm)(z)])),highlight:(0,o.w5)((()=>[U])),default:(0,o.w5)((()=>[x])),_:1}),A])}]])}}]);
//# sourceMappingURL=inputNumber-e8fe89fa.js.map