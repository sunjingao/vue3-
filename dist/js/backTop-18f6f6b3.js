"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[560],{2651:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var o=n(6252);const c={class:"relax-doc"},l=(0,o._)("h1",null,"BackTop 回到顶部",-1),r=(0,o._)("p",null,"提供返回页面顶部的功能",-1),d=(0,o._)("h4",{id:"ji-chu-yong-fa"},[(0,o._)("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),(0,o.Uk)(" 基础用法")],-1),a=(0,o._)("p",null,"基础用法",-1),i=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},'\n<template>\n  <div>\n    滑动页面至下方，可以看见组件\n    <v-back-top selector=".main-wrapper-container" bottom="260px" @click="click">\n      <div\n        style="{\n                height: 100%;\n                width: 100%;\n                background-color: #f2f5f6;\n                box-shadow: 0 0 6px rgba(0,0,0, .12);\n                text-align: center;\n                line-height: 40px;\n                color: #1989fa;\n              }"\n      >UP\n      </div>\n    </v-back-top>\n  </div>\n</template>\n\n<script>\n\n  export default {\n\n    setup() {\n\n      function click(event) {\n        console.log(\'click:\', event);\n      }\n\n      return {\n        click\n      }\n    }\n  }\n<\/script>\n\n')],-1),h=(0,o._)("h4",{id:"zai-ju-bu-nei-rong-zhong-zhan-shi"},[(0,o._)("a",{class:"header-anchor",href:"#zai-ju-bu-nei-rong-zhong-zhan-shi"}),(0,o.Uk)(" 在局部内容中展示")],-1),s=(0,o._)("p",null,"通过局部容器滚动展示回到顶部按钮",-1),p=(0,o._)("p",null,"设置selector属性为选择器",-1),u=(0,o._)("pre",null,[(0,o._)("code",{class:"html"},'\n<template>\n  <div id="test" class="vBackTopDoc">\n    <div class="testpart"></div>\n  </div>\n  <div>\n    <v-back-top selector="#test" bottom="200px" @click="click"></v-back-top>\n  </div>\n</template>\n<script>\n  export default {\n    setup() {\n      function click(event) {\n        console.log(\'click:\', event);\n      }\n\n      return {\n        click\n      }\n    }\n  }\n<\/script>\n')],-1),k=(0,o.uE)('<h3 id="api"><a class="header-anchor" href="#api"></a> API</h3><h4 id="props"><a class="header-anchor" href="#props"></a> props</h4><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>selector</td><td>选择器</td><td>String</td><td>root、selector选择器</td><td>root</td></tr><tr><td>visibilityHeight</td><td>滚动高度达到此参数值才出现</td><td>Number</td><td>-</td><td>200</td></tr><tr><td>right</td><td>页面右边距离</td><td>String</td><td>-</td><td>40px</td></tr><tr><td>bottom</td><td>页面底部距离</td><td>String</td><td>-</td><td>40px</td></tr><tr><td>timeout</td><td>节流时间</td><td>Number</td><td>-</td><td>500</td></tr></tbody></table><h4 id="event"><a class="header-anchor" href="#event"></a> event</h4><table class="example-table"><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时触发</td><td>event</td></tr></tbody></table><h4 id="slot"><a class="header-anchor" href="#slot"></a> slot</h4><table class="example-table"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>内容</td></tr></tbody></table>',7);var m=n(7869),b=n.n(m),f=n(9812),v={name:"component-doc",components:{"element-demo0":function(){const{createElementVNode:t,resolveComponent:e,withCtx:n,createVNode:o,createTextVNode:c,openBlock:l,createElementBlock:r}=f;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,b().highlightBlock)}))},render:function(d,a){const i=e("v-back-top");return l(),r("div",null,[c(" 滑动页面至下方，可以看见组件 "),o(i,{selector:".main-wrapper-container",bottom:"260px",onClick:d.click},{default:n((()=>[t("div",{style:{"{\n                height":"100%",width:"100%","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0,0,0, .12)","text-align":"center","line-height":"40px",color:"#1989fa"}},"UP ")])),_:1},8,["onClick"])])},...{setup(){return{click:function(t){console.log("click:",t)}}}}}}(),"element-demo1":function(){const{createElementVNode:t,resolveComponent:e,createVNode:n,Fragment:o,openBlock:c,createElementBlock:l}=f;return{mounted(){this.$nextTick((()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,b().highlightBlock)}))},render:function(r,d){const a=e("v-back-top");return c(),l(o,null,[t("div",{id:"test",class:"vBackTopDoc"},[t("div",{class:"testpart"})]),t("div",null,[n(a,{selector:"#test",bottom:"200px",onClick:r.click},null,8,["onClick"])])],64)},...{setup(){return{click:function(t){console.log("click:",t)}}}}}}()}};var g=(0,n(3744).Z)(v,[["render",function(t,e,n,m,b,f){const v=(0,o.up)("element-demo0"),g=(0,o.up)("demo-block"),x=(0,o.up)("element-demo1");return(0,o.wg)(),(0,o.iD)("section",c,[l,r,d,a,(0,o.Wm)(g,null,{source:(0,o.w5)((()=>[(0,o.Wm)(v)])),highlight:(0,o.w5)((()=>[i])),_:1}),h,s,(0,o.Wm)(g,null,{source:(0,o.w5)((()=>[(0,o.Wm)(x)])),highlight:(0,o.w5)((()=>[u])),default:(0,o.w5)((()=>[p])),_:1}),k])}]])}}]);
//# sourceMappingURL=backTop-18f6f6b3.js.map