"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93],{458:function(n,t,e){e.r(t),e.d(t,{default:function(){return A}});var r=e(6252);const a={class:"relax-doc"},s=(0,r._)("h2",{id:"timepicker-shi-jian-xuan-ze-qi"},[(0,r._)("a",{class:"header-anchor",href:"#timepicker-shi-jian-xuan-ze-qi"}),(0,r.Uk)(" TimePicker 时间选择器")],-1),l=(0,r._)("p",null,"用于选择或输入时间",-1),d=(0,r._)("h4",{id:"ji-ben-yong-fa"},[(0,r._)("a",{class:"header-anchor",href:"#ji-ben-yong-fa"}),(0,r.Uk)(" 基本用法")],-1),c=(0,r._)("p",null,"基本用法",-1),o=(0,r._)("pre",null,[(0,r._)("code",{class:"html"},'\n<template>\n\n  <v-timepicker\n    :startRange="startRange"\n    @select="select"\n    placeholder="请选择时间"\n  ></v-timepicker>\n\n</template>\n\n<script>\n\n  import { reactive } from \'vue\';\n\n  export default {\n\n    setup() {\n\n      const startRange = reactive({\n        hour: [\n          {\n            start: 10,\n            end: 15\n          },\n          {\n            start: 2,\n            end: 5\n          }\n        ],\n        minute: [\n          {\n            start: 1,\n            end: 6\n          },\n          {\n            start: 30,\n            end: 55\n          },\n          {\n            start: 57,\n            end: 58\n          }\n        ],\n        second: [\n          {\n            start: 16,\n            end: 18\n          },\n          {\n            start: 7,\n            end: 9\n          }\n        ]\n      })\n\n      const startDefaultTime = reactive({\n        hour: 11,\n        minute: 2,\n        second: 18\n      })\n\n      function select(val1, val2) {\n        console.log(\'in select\', val1, val2);\n      }\n\n      return {\n        startRange,\n        startDefaultTime,\n        select\n      }\n    },\n  }\n<\/script>\n\n')],-1),i=(0,r._)("h4",{id:"kai-shi-shi-jian-he-jie-shu-shi-jian"},[(0,r._)("a",{class:"header-anchor",href:"#kai-shi-shi-jian-he-jie-shu-shi-jian"}),(0,r.Uk)(" 开始时间和结束时间")],-1),u=(0,r._)("p",null,"同时展示开始时间和结束时间",-1),h=(0,r._)("pre",null,[(0,r._)("code",{class:"html"},'\n<template>\n\n  <v-timepicker\n    showEndTime\n    :startRange="startRange"\n    :endRange="endRange"\n    :startDefaultTime="startDefaultTime"\n    :endDefaultTime="endDefaultTime"\n    @select="select"\n  ></v-timepicker>\n\n</template>\n\n<script>\n\n  import { reactive } from \'vue\';\n\n  export default {\n\n    setup() {\n\n      const startRange = reactive({\n        hour: [\n          {\n            start: 10,\n            end: 15\n          },\n          {\n            start: 2,\n            end: 5\n          }\n        ],\n        minute: [\n          {\n            start: 1,\n            end: 6\n          },\n          {\n            start: 30,\n            end: 55\n          },\n          {\n            start: 57,\n            end: 58\n          }\n        ],\n        second: [\n          {\n            start: 16,\n            end: 18\n          },\n          {\n            start: 7,\n            end: 9\n          }\n        ]\n      })\n\n      const endRange = reactive({\n        hour: [\n          {\n            start: 3,\n            end: 10\n          },\n          {\n            start: 15,\n            end: 20\n          }\n        ],\n        minute: [\n          {\n            start: 3,\n            end: 6\n          },\n          {\n            start: 30,\n            end: 50\n          },\n          {\n            start: 0,\n            end: 2\n          }\n        ],\n        second: [\n          {\n            start: 7,\n            end: 17\n          },\n          {\n            start: 18,\n            end: 30\n          }\n        ]\n      })\n\n      const startDefaultTime = reactive({\n        hour: 11,\n        minute: 6,\n        second: 18\n      })\n\n      const endDefaultTime = reactive({\n        hour: 10,\n        minute: 1,\n        second: 28\n      })\n\n      function select(val1, val2) {\n        console.log(\'in select\', val1, val2);\n      }\n\n      return {\n        startRange,\n        endRange,\n        startDefaultTime,\n        endDefaultTime,\n        select\n      }\n    }\n  }\n<\/script>\n\n')],-1),m=(0,r._)("h4",{id:"fen-ge-fu"},[(0,r._)("a",{class:"header-anchor",href:"#fen-ge-fu"}),(0,r.Uk)(" 分隔符")],-1),p=(0,r._)("p",null,"输入框中的时间展示按照分隔符进行分割",-1),g=(0,r._)("pre",null,[(0,r._)("code",{class:"html"},'\n<template>\n\n  <v-timepicker\n    :startRange="startRange"\n    @select="select"\n    placeholder="请选择时间"\n    separator="-"\n  ></v-timepicker>\n</template>\n\n<script>\n\n  import { reactive } from \'vue\';\n\n  export default {\n\n    setup() {\n\n      const startRange = reactive({\n        hour: [\n          {\n            start: 10,\n            end: 15\n          },\n          {\n            start: 2,\n            end: 5\n          }\n        ],\n        minute: [\n          {\n            start: 1,\n            end: 6\n          },\n          {\n            start: 30,\n            end: 55\n          },\n          {\n            start: 57,\n            end: 58\n          }\n        ],\n        second: [\n          {\n            start: 16,\n            end: 18\n          },\n          {\n            start: 7,\n            end: 9\n          }\n        ]\n      })\n\n      const startDefaultTime = reactive({\n        hour: 11,\n        minute: 2,\n        second: 18\n      })\n\n      function select(val1, val2) {\n        console.log(\'in select\', val1, val2);\n      }\n\n      return {\n        startRange,\n        startDefaultTime,\n        select\n      }\n    },\n  }\n<\/script>\n\n')],-1),f=(0,r._)("h4",{id:"qing-chu"},[(0,r._)("a",{class:"header-anchor",href:"#qing-chu"}),(0,r.Uk)(" 清除")],-1),v=(0,r._)("p",null,"输入框中的内容允许清空",-1),k=(0,r._)("pre",null,[(0,r._)("code",{class:"html"},'\n<template>\n\n  <v-timepicker\n    :startRange="startRange"\n    :startDefaultTime="startDefaultTime"\n    @select="select"\n    @clear="clear"\n    placeholder="请选择时间"\n    clearable\n  ></v-timepicker>\n\n</template>\n\n<script>\n\n  import { reactive } from \'vue\';\n\n  export default {\n\n    setup() {\n\n      const startRange = reactive({\n        hour: [\n          {\n            start: 10,\n            end: 15\n          },\n          {\n            start: 2,\n            end: 5\n          }\n        ],\n        minute: [\n          {\n            start: 1,\n            end: 6\n          },\n          {\n            start: 30,\n            end: 55\n          },\n          {\n            start: 57,\n            end: 58\n          }\n        ],\n        second: [\n          {\n            start: 16,\n            end: 18\n          },\n          {\n            start: 7,\n            end: 9\n          }\n        ]\n      })\n\n      const startDefaultTime = reactive({\n        hour: 11,\n        minute: 2,\n        second: 18\n      })\n\n      function select(val1, val2) {\n        console.log(\'in select\', val1, val2);\n      }\n\n      function clear(val1, val2) {\n        console.log(\'in clear\', val1, val2);\n      }\n      \n      return {\n        startRange,\n        startDefaultTime,\n        select,\n        clear,\n      }\n    },\n  }\n<\/script>\n\n')],-1),R=(0,r._)("h4",{id:"yun-xu-shu-ru"},[(0,r._)("a",{class:"header-anchor",href:"#yun-xu-shu-ru"}),(0,r.Uk)(" 允许输入")],-1),T=(0,r._)("p",null,[(0,r.Uk)("可以通过输入框进行时间输入，如果输入不正确，下拉关闭时会自动恢复至最近的正确时间。"),(0,r._)("br")],-1),D=(0,r._)("p",null,"支持回车，esc等键盘事件：修改某个时间段后，enter时如果时间不准确，会自动滚动至相应时间点，不会立即关闭下拉，操作离开时会恢复至最近准确的时间。",-1),_=(0,r._)("pre",null,[(0,r._)("code",{class:"html"},'\n<template>\n\n  <v-timepicker\n    :startRange="startRange"\n    @select="select"\n    placeholder="请选择时间"\n    editable\n  ></v-timepicker>\n\n</template>\n\n<script>\n\n  import { reactive } from \'vue\';\n\n  export default {\n\n    setup() {\n\n      const startRange = reactive({\n        hour: [\n          {\n            start: 10,\n            end: 15\n          },\n          {\n            start: 2,\n            end: 5\n          }\n        ],\n        minute: [\n          {\n            start: 1,\n            end: 6\n          },\n          {\n            start: 30,\n            end: 55\n          },\n          {\n            start: 57,\n            end: 58\n          }\n        ],\n        second: [\n          {\n            start: 16,\n            end: 18\n          },\n          {\n            start: 7,\n            end: 9\n          }\n        ]\n      })\n\n      const startDefaultTime = reactive({\n        hour: 11,\n        minute: 2,\n        second: 18\n      })\n\n      function select(val1, val2) {\n        console.log(\'in select\', val1, val2);\n      }\n\n      return {\n        startRange,\n        startDefaultTime,\n        select\n      }\n    },\n  }\n<\/script>\n\n')],-1),b=(0,r._)("h4",{id:"she-zhi-kuan-gao"},[(0,r._)("a",{class:"header-anchor",href:"#she-zhi-kuan-gao"}),(0,r.Uk)(" 设置宽高")],-1),y=(0,r._)("p",null,"设置宽高",-1),x=(0,r._)("pre",null,[(0,r._)("code",{class:"html"},'\n<template>\n\n  <v-timepicker\n    :startRange="startRange"\n    :startDefaultTime="startDefaultTime"\n    @select="select"\n    placeholder="请选择时间"\n    width="220px"\n    height="60px"\n  ></v-timepicker>\n\n</template>\n\n<script>\n\n  import { reactive } from \'vue\';\n\n  export default {\n\n    setup() {\n\n      const startRange = reactive({\n        hour: [\n          {\n            start: 10,\n            end: 15\n          },\n          {\n            start: 2,\n            end: 5\n          }\n        ],\n        minute: [\n          {\n            start: 1,\n            end: 6\n          },\n          {\n            start: 30,\n            end: 55\n          },\n          {\n            start: 57,\n            end: 58\n          }\n        ],\n        second: [\n          {\n            start: 16,\n            end: 18\n          },\n          {\n            start: 7,\n            end: 9\n          }\n        ]\n      })\n\n      const startDefaultTime = reactive({\n        hour: 11,\n        minute: 2,\n        second: 18\n      })\n\n      function select(val1, val2) {\n        console.log(\'in select\', val1, val2);\n      }\n\n      return {\n        startRange,\n        startDefaultTime,\n        select\n      }\n    },\n  }\n<\/script>\n\n')],-1),S=(0,r.uE)('<h3 id="api"><a class="header-anchor" href="#api"></a> API</h3><h4 id="props"><a class="header-anchor" href="#props"></a> props</h4><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>宽度</td><td>String</td><td>-</td><td>-</td></tr><tr><td>height</td><td>高度</td><td>String</td><td>-</td><td>40px</td></tr><tr><td>showEndTime</td><td>是否展示结束时间</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>placeholder</td><td>默认值</td><td>String</td><td>-</td><td>&#39;&#39;</td></tr><tr><td>clearable</td><td>是否显示清空功能</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>itemHeight</td><td>item高度</td><td>Number</td><td>-</td><td>30</td></tr><tr><td>itemWidth</td><td>item宽度</td><td>Number</td><td>-</td><td>50</td></tr><tr><td>startRange</td><td>开始时间范围</td><td>Object</td><td>require</td><td>-</td></tr><tr><td>startDefaultTime</td><td>开始默认时间</td><td>Object</td><td>require</td><td>-</td></tr><tr><td>endRange</td><td>结束时间范围</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>endDefaultTime</td><td>结束默认时间</td><td>Object</td><td>require</td><td>-</td></tr><tr><td>editable</td><td>是否可编辑</td><td>Boolean</td><td>require</td><td>-</td></tr><tr><td>separator</td><td>分隔符</td><td>String</td><td>require</td><td>-</td></tr></tbody></table><h4 id="event"><a class="header-anchor" href="#event"></a> event</h4><table class="example-table"><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>select</td><td>修改</td><td>值</td></tr><tr><td>clear</td><td>清空</td><td>值</td></tr></tbody></table>',5);var w=e(7869),B=e.n(w),j=e(9812),q={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:n,openBlock:t,createBlock:e}=j;const{reactive:r}=j;return{mounted(){this.$nextTick((()=>{const n=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(n,B().highlightBlock)}))},render:function(r,a){const s=n("v-timepicker");return t(),e(s,{startRange:r.startRange,onSelect:r.select,placeholder:"请选择时间"},null,8,["startRange","onSelect"])},...{setup(){return{startRange:r({hour:[{start:10,end:15},{start:2,end:5}],minute:[{start:1,end:6},{start:30,end:55},{start:57,end:58}],second:[{start:16,end:18},{start:7,end:9}]}),startDefaultTime:r({hour:11,minute:2,second:18}),select:function(n,t){console.log("in select",n,t)}}}}}}(),"element-demo1":function(){const{resolveComponent:n,openBlock:t,createBlock:e}=j;const{reactive:r}=j;return{mounted(){this.$nextTick((()=>{const n=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(n,B().highlightBlock)}))},render:function(r,a){const s=n("v-timepicker");return t(),e(s,{showEndTime:"",startRange:r.startRange,endRange:r.endRange,startDefaultTime:r.startDefaultTime,endDefaultTime:r.endDefaultTime,onSelect:r.select},null,8,["startRange","endRange","startDefaultTime","endDefaultTime","onSelect"])},...{setup(){return{startRange:r({hour:[{start:10,end:15},{start:2,end:5}],minute:[{start:1,end:6},{start:30,end:55},{start:57,end:58}],second:[{start:16,end:18},{start:7,end:9}]}),endRange:r({hour:[{start:3,end:10},{start:15,end:20}],minute:[{start:3,end:6},{start:30,end:50},{start:0,end:2}],second:[{start:7,end:17},{start:18,end:30}]}),startDefaultTime:r({hour:11,minute:6,second:18}),endDefaultTime:r({hour:10,minute:1,second:28}),select:function(n,t){console.log("in select",n,t)}}}}}}(),"element-demo2":function(){const{resolveComponent:n,openBlock:t,createBlock:e}=j;const{reactive:r}=j;return{mounted(){this.$nextTick((()=>{const n=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(n,B().highlightBlock)}))},render:function(r,a){const s=n("v-timepicker");return t(),e(s,{startRange:r.startRange,onSelect:r.select,placeholder:"请选择时间",separator:"-"},null,8,["startRange","onSelect"])},...{setup(){return{startRange:r({hour:[{start:10,end:15},{start:2,end:5}],minute:[{start:1,end:6},{start:30,end:55},{start:57,end:58}],second:[{start:16,end:18},{start:7,end:9}]}),startDefaultTime:r({hour:11,minute:2,second:18}),select:function(n,t){console.log("in select",n,t)}}}}}}(),"element-demo3":function(){const{resolveComponent:n,openBlock:t,createBlock:e}=j;const{reactive:r}=j;return{mounted(){this.$nextTick((()=>{const n=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(n,B().highlightBlock)}))},render:function(r,a){const s=n("v-timepicker");return t(),e(s,{startRange:r.startRange,startDefaultTime:r.startDefaultTime,onSelect:r.select,onClear:r.clear,placeholder:"请选择时间",clearable:""},null,8,["startRange","startDefaultTime","onSelect","onClear"])},...{setup(){return{startRange:r({hour:[{start:10,end:15},{start:2,end:5}],minute:[{start:1,end:6},{start:30,end:55},{start:57,end:58}],second:[{start:16,end:18},{start:7,end:9}]}),startDefaultTime:r({hour:11,minute:2,second:18}),select:function(n,t){console.log("in select",n,t)},clear:function(n,t){console.log("in clear",n,t)}}}}}}(),"element-demo4":function(){const{resolveComponent:n,openBlock:t,createBlock:e}=j;const{reactive:r}=j;return{mounted(){this.$nextTick((()=>{const n=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(n,B().highlightBlock)}))},render:function(r,a){const s=n("v-timepicker");return t(),e(s,{startRange:r.startRange,onSelect:r.select,placeholder:"请选择时间",editable:""},null,8,["startRange","onSelect"])},...{setup(){return{startRange:r({hour:[{start:10,end:15},{start:2,end:5}],minute:[{start:1,end:6},{start:30,end:55},{start:57,end:58}],second:[{start:16,end:18},{start:7,end:9}]}),startDefaultTime:r({hour:11,minute:2,second:18}),select:function(n,t){console.log("in select",n,t)}}}}}}(),"element-demo5":function(){const{resolveComponent:n,openBlock:t,createBlock:e}=j;const{reactive:r}=j;return{mounted(){this.$nextTick((()=>{const n=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(n,B().highlightBlock)}))},render:function(r,a){const s=n("v-timepicker");return t(),e(s,{startRange:r.startRange,startDefaultTime:r.startDefaultTime,onSelect:r.select,placeholder:"请选择时间",width:"220px",height:"60px"},null,8,["startRange","startDefaultTime","onSelect"])},...{setup(){return{startRange:r({hour:[{start:10,end:15},{start:2,end:5}],minute:[{start:1,end:6},{start:30,end:55},{start:57,end:58}],second:[{start:16,end:18},{start:7,end:9}]}),startDefaultTime:r({hour:11,minute:2,second:18}),select:function(n,t){console.log("in select",n,t)}}}}}}()}};var A=(0,e(3744).Z)(q,[["render",function(n,t,e,w,B,j){const q=(0,r.up)("element-demo0"),A=(0,r.up)("demo-block"),W=(0,r.up)("element-demo1"),C=(0,r.up)("element-demo2"),E=(0,r.up)("element-demo3"),U=(0,r.up)("element-demo4"),$=(0,r.up)("element-demo5");return(0,r.wg)(),(0,r.iD)("section",a,[s,l,d,c,(0,r.Wm)(A,null,{source:(0,r.w5)((()=>[(0,r.Wm)(q)])),highlight:(0,r.w5)((()=>[o])),_:1}),i,u,(0,r.Wm)(A,null,{source:(0,r.w5)((()=>[(0,r.Wm)(W)])),highlight:(0,r.w5)((()=>[h])),_:1}),m,p,(0,r.Wm)(A,null,{source:(0,r.w5)((()=>[(0,r.Wm)(C)])),highlight:(0,r.w5)((()=>[g])),_:1}),f,v,(0,r.Wm)(A,null,{source:(0,r.w5)((()=>[(0,r.Wm)(E)])),highlight:(0,r.w5)((()=>[k])),_:1}),R,T,D,(0,r.Wm)(A,null,{source:(0,r.w5)((()=>[(0,r.Wm)(U)])),highlight:(0,r.w5)((()=>[_])),_:1}),b,y,(0,r.Wm)(A,null,{source:(0,r.w5)((()=>[(0,r.Wm)($)])),highlight:(0,r.w5)((()=>[x])),_:1}),S])}]])}}]);
//# sourceMappingURL=timePicker-0184dcd4.js.map