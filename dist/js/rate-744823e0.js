"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[905],{9287:function(t,e,n){n.r(e),n.d(e,{default:function(){return V}});var l=n(6252);const r={class:"relax-doc"},a=(0,l._)("h1",null,"Rate 评分",-1),o=(0,l._)("p",null,"用于展示评分",-1),d=(0,l._)("h4",{id:"ji-ben-yong-fa"},[(0,l._)("a",{class:"header-anchor",href:"#ji-ben-yong-fa"}),(0,l.Uk)(" 基本用法")],-1),u=(0,l._)("p",null,"基本用法",-1),c=(0,l._)("p",null,"基本用法",-1),h=(0,l._)("pre",null,[(0,l._)("code",{class:"html"},'\n<template>\n  <v-rate v-model="val" :max="5"></v-rate>\n</template>\n\n<script>\n  import { ref } from \'vue\';\n\n  export default {\n    setup() {\n      const val = ref(3);\n      return {\n        val\n      }\n    }\n  }\n<\/script>\n\n')],-1),s=(0,l._)("h4",{id:"fu-zhu-wen-zi"},[(0,l._)("a",{class:"header-anchor",href:"#fu-zhu-wen-zi"}),(0,l.Uk)(" 辅助文字")],-1),m=(0,l._)("p",null,"自定义展示内容",-1),p=(0,l._)("p",null,"设置text",-1),i=(0,l._)("pre",null,[(0,l._)("code",{class:"html"},'\n<template>\n  <v-rate :texts="text" v-model="val" :max="5"></v-rate>\n</template>\n\n<script>\n  import { ref } from \'vue\';\n\n  export default {\n    setup() {\n      const val = ref(3);\n      let text = ref([11, 22, 33, 44, 55]);\n      return {\n        val,\n        text\n      }\n    }\n  }\n<\/script>\n\n')],-1),f=(0,l._)("h4",{id:"zhi-du"},[(0,l._)("a",{class:"header-anchor",href:"#zhi-du"}),(0,l.Uk)(" 只读")],-1),v=(0,l._)("p",null,"只读，不可操作。允许图标部分选中。",-1),x=(0,l._)("p",null,"设置 disabled，设置是否可操作",-1),_=(0,l._)("pre",null,[(0,l._)("code",{class:"html"},'\n<template>\n  <v-rate v-model="val" disabled :max="5"></v-rate>\n</template>\n<script>\n  import { ref } from \'vue\';\n\n  export default {\n    setup() {\n      let val = ref(3.5);\n      return {\n        val\n      }\n    }\n  }\n<\/script>\n')],-1),b=(0,l.uE)('<h3 id="api"><a class="header-anchor" href="#api"></a> API</h3><h4 id="props"><a class="header-anchor" href="#props"></a> props</h4><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>值</td><td>Number</td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>是否禁止操作</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>max</td><td>最大值</td><td>number</td><td>Number</td><td>-</td></tr><tr><td>showText</td><td>是否展示文字提示</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>texts</td><td>选中时对应的文本</td><td>Array</td><td>-</td><td>[]</td></tr></tbody></table><h4 id="event"><a class="header-anchor" href="#event"></a> event</h4><table class="example-table"><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>修改</td><td>值</td></tr></tbody></table>',5);var k=n(7869),g=n.n(k),y=n(9812),w={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=y;const{ref:l}=y;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,g().highlightBlock)}))},render:function(l,r){const a=t("v-rate");return e(),n(a,{modelValue:l.val,"onUpdate:modelValue":t=>l.val=t,max:5},null,8,["modelValue","onUpdate:modelValue"])},...{setup(){return{val:l(3)}}}}}(),"element-demo1":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=y;const{ref:l}=y;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,g().highlightBlock)}))},render:function(l,r){const a=t("v-rate");return e(),n(a,{texts:l.text,modelValue:l.val,"onUpdate:modelValue":t=>l.val=t,max:5},null,8,["texts","modelValue","onUpdate:modelValue"])},...{setup(){return{val:l(3),text:l([11,22,33,44,55])}}}}}(),"element-demo2":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=y;const{ref:l}=y;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,g().highlightBlock)}))},render:function(l,r){const a=t("v-rate");return e(),n(a,{modelValue:l.val,"onUpdate:modelValue":t=>l.val=t,disabled:"",max:5},null,8,["modelValue","onUpdate:modelValue"])},...{setup(){return{val:l(3.5)}}}}}()}};var V=(0,n(3744).Z)(w,[["render",function(t,e,n,k,g,y){const w=(0,l.up)("element-demo0"),V=(0,l.up)("demo-block"),B=(0,l.up)("element-demo1"),U=(0,l.up)("element-demo2");return(0,l.wg)(),(0,l.iD)("section",r,[a,o,d,u,(0,l.Wm)(V,null,{source:(0,l.w5)((()=>[(0,l.Wm)(w)])),highlight:(0,l.w5)((()=>[h])),default:(0,l.w5)((()=>[c])),_:1}),s,m,(0,l.Wm)(V,null,{source:(0,l.w5)((()=>[(0,l.Wm)(B)])),highlight:(0,l.w5)((()=>[i])),default:(0,l.w5)((()=>[p])),_:1}),f,v,(0,l.Wm)(V,null,{source:(0,l.w5)((()=>[(0,l.Wm)(U)])),highlight:(0,l.w5)((()=>[_])),default:(0,l.w5)((()=>[x])),_:1}),b])}]])}}]);
//# sourceMappingURL=rate-744823e0.js.map