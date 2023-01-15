"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59],{5145:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var l=n(6252);const a={class:"relax-doc"},o=(0,l._)("h2",{id:"badge-biao-ji"},[(0,l._)("a",{class:"header-anchor",href:"#badge-biao-ji"}),(0,l.Uk)(" Badge 标记")],-1),r=(0,l._)("p",null,"区块标记信息",-1),d=(0,l._)("h4",{id:"ji-ben-yong-fa"},[(0,l._)("a",{class:"header-anchor",href:"#ji-ben-yong-fa"}),(0,l.Uk)(" 基本用法")],-1),u=(0,l._)("p",null,"基本用法",-1),c=(0,l._)("pre",null,[(0,l._)("code",{class:"html"},'\n<template>\n\n  <v-badge>\n    <v-button>button</v-button>\n  </v-badge>\n\n  <v-badge :value="val" class="v-ml20">\n    <v-button>button</v-button>\n  </v-badge>\n\n  <v-badge :value="val" iconClass="vBadgeColorDoc" class="v-ml20">\n    <v-button>button</v-button>\n  </v-badge>\n</template>\n<script>\n  import { ref } from \'vue\';\n\n  export default {\n    setup() {\n      const val = ref(\'10\');\n      return {\n        val\n      }\n    },\n  }\n<\/script>\n')],-1),s=(0,l._)("h4",{id:"zui-da-zhi-she-zhi"},[(0,l._)("a",{class:"header-anchor",href:"#zui-da-zhi-she-zhi"}),(0,l.Uk)(" 最大值设置")],-1),h=(0,l._)("p",null,"超过最大值，使用+",-1),v=(0,l._)("pre",null,[(0,l._)("code",{class:"html"},'\n<template>\n  <v-badge :value="val1" :max="9">\n    <v-button>button</v-button>\n  </v-badge>\n  <v-badge :value="val2" :max="99" class="v-ml20">\n    <v-button>button</v-button>\n  </v-badge>\n</template>\n<script>\n  import { ref } from \'vue\';\n\n  export default {\n    setup() {\n      const val1 = ref(\'10\');\n      const val2 = ref(\'100\');\n      return {\n        val1,\n        val2,\n      }\n    },\n  }\n<\/script>\n')],-1),i=(0,l._)("h4",{id:"xiao-hong-dian"},[(0,l._)("a",{class:"header-anchor",href:"#xiao-hong-dian"}),(0,l.Uk)(" 小红点")],-1),p=(0,l._)("p",null,"右上角以小红点形式进行提示",-1),m=(0,l._)("pre",null,[(0,l._)("code",{class:"html"},"\n<template>\n  <v-badge :value=\"val\" isDot>\n    <v-button>button</v-button>\n  </v-badge>\n</template>\n<script>\n  import { ref } from 'vue';\n\n  export default {\n    setup() {\n      const val = ref('10');\n      return {\n        val\n      }\n    }\n  }\n<\/script>\n<style>\n</style>\n")],-1),b=(0,l.uE)('<h3 id="api"><a class="header-anchor" href="#api"></a> API</h3><h4 id="props"><a class="header-anchor" href="#props"></a> props</h4><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>要展示的内容</td><td>String</td><td>-</td><td>&#39;&#39;</td></tr><tr><td>iconClass</td><td>右上角图标的自定义样式</td><td>String</td><td>-</td><td>-</td></tr><tr><td>max</td><td>最大值</td><td>Number</td><td>-</td><td>-</td></tr><tr><td>isDot</td><td>是否显示红点</td><td>Boolean</td><td>-</td><td>false</td></tr></tbody></table><h4 id="slot"><a class="header-anchor" href="#slot"></a> slot</h4><table class="example-table"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>内容</td></tr></tbody></table>',5);var f=n(7869),g=n.n(f),_=n(9812),x={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:t,resolveComponent:e,withCtx:n,createVNode:l,Fragment:a,openBlock:o,createElementBlock:r}=_;const{ref:d}=_;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,g().highlightBlock)}))},render:function(d,u){const c=e("v-button"),s=e("v-badge");return o(),r(a,null,[l(s,null,{default:n((()=>[l(c,null,{default:n((()=>[t("button")])),_:1})])),_:1}),l(s,{value:d.val,class:"v-ml20"},{default:n((()=>[l(c,null,{default:n((()=>[t("button")])),_:1})])),_:1},8,["value"]),l(s,{value:d.val,iconClass:"vBadgeColorDoc",class:"v-ml20"},{default:n((()=>[l(c,null,{default:n((()=>[t("button")])),_:1})])),_:1},8,["value"])],64)},...{setup(){return{val:d("10")}}}}}(),"element-demo1":function(){const{createTextVNode:t,resolveComponent:e,withCtx:n,createVNode:l,Fragment:a,openBlock:o,createElementBlock:r}=_;const{ref:d}=_;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,g().highlightBlock)}))},render:function(d,u){const c=e("v-button"),s=e("v-badge");return o(),r(a,null,[l(s,{value:d.val1,max:9},{default:n((()=>[l(c,null,{default:n((()=>[t("button")])),_:1})])),_:1},8,["value"]),l(s,{value:d.val2,max:99,class:"v-ml20"},{default:n((()=>[l(c,null,{default:n((()=>[t("button")])),_:1})])),_:1},8,["value"])],64)},...{setup(){return{val1:d("10"),val2:d("100")}}}}}(),"element-demo2":function(){const{createTextVNode:t,resolveComponent:e,withCtx:n,createVNode:l,openBlock:a,createBlock:o}=_;const{ref:r}=_;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,g().highlightBlock)}))},render:function(r,d){const u=e("v-button"),c=e("v-badge");return a(),o(c,{value:r.val,isDot:""},{default:n((()=>[l(u,null,{default:n((()=>[t("button")])),_:1})])),_:1},8,["value"])},...{setup(){return{val:r("10")}}}}}()}};var k=(0,n(3744).Z)(x,[["render",function(t,e,n,f,g,_){const x=(0,l.up)("element-demo0"),k=(0,l.up)("demo-block"),y=(0,l.up)("element-demo1"),B=(0,l.up)("element-demo2");return(0,l.wg)(),(0,l.iD)("section",a,[o,r,d,u,(0,l.Wm)(k,null,{source:(0,l.w5)((()=>[(0,l.Wm)(x)])),highlight:(0,l.w5)((()=>[c])),_:1}),s,h,(0,l.Wm)(k,null,{source:(0,l.w5)((()=>[(0,l.Wm)(y)])),highlight:(0,l.w5)((()=>[v])),_:1}),i,p,(0,l.Wm)(k,null,{source:(0,l.w5)((()=>[(0,l.Wm)(B)])),highlight:(0,l.w5)((()=>[m])),_:1}),b])}]])}}]);
//# sourceMappingURL=badge-1cdb5d65.js.map