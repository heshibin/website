"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7221],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u5e38\u89c1\u7684GC\u7b97\u6cd5",date:new Date("2023-01-11T00:00:00.000Z"),sidebar_position:11,authors:"heshibin",tags:["java","GC"]},i=void 0,l={unversionedId:"JAVA/\u77e5\u8bc6\u70b9/2023-01/11\u5e38\u89c1\u7684GC\u7b97\u6cd5",id:"JAVA/\u77e5\u8bc6\u70b9/2023-01/11\u5e38\u89c1\u7684GC\u7b97\u6cd5",title:"\u5e38\u89c1\u7684GC\u7b97\u6cd5",description:"| \u7b97\u6cd5 |\u89e3\u91ca               |",source:"@site/docs/JAVA/\u77e5\u8bc6\u70b9/2023-01/11\u5e38\u89c1\u7684GC\u7b97\u6cd5.md",sourceDirName:"JAVA/\u77e5\u8bc6\u70b9/2023-01",slug:"/JAVA/\u77e5\u8bc6\u70b9/2023-01/11\u5e38\u89c1\u7684GC\u7b97\u6cd5",permalink:"/docs/JAVA/\u77e5\u8bc6\u70b9/2023-01/11\u5e38\u89c1\u7684GC\u7b97\u6cd5",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/JAVA/\u77e5\u8bc6\u70b9/2023-01/11\u5e38\u89c1\u7684GC\u7b97\u6cd5.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"GC",permalink:"/docs/tags/gc"}],version:"current",sidebarPosition:11,frontMatter:{title:"\u5e38\u89c1\u7684GC\u7b97\u6cd5",date:"2023-01-11T00:00:00.000Z",sidebar_position:11,authors:"heshibin",tags:["java","GC"]},sidebar:"tutorialSidebar",previous:{title:"JVM\u5e38\u89c1\u7684\u8bca\u65ad\u5de5\u5177\u6709\u54ea\u4e9b\u548c\u7528\u9014",permalink:"/docs/JAVA/\u77e5\u8bc6\u70b9/2023-01/10JVM\u5e38\u89c1\u7684\u8bca\u65ad\u5de5\u5177\u6709\u54ea\u4e9b\u548c\u7528\u9014"},next:{title:"Mysql\u6570\u636e\u5e93\u67b6\u6784\u6f14\u53d8\u5386\u53f2",permalink:"/docs/\u4e2d\u95f4\u4ef6/sharing-jdbc/1\u3001Mysql\u67b6\u6784\u6f14\u53d8\u5347\u7ea7+\u5206\u5e93\u5206\u8868\u4f18\u7f3a\u70b9/1.1 Mysql\u6570\u636e\u5e93\u67b6\u6784\u6f14\u53d8\u5386\u53f2"}},p={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7b97\u6cd5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6807\u8bb0-\u6e05\u9664\u7b97\u6cd5 Mark-Sweep"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5148\u6807\u8bb0\u7136\u540e\u6e05\u9664\uff0c\u4e24\u6b21\u626b\u63cf\u4e25\u91cd\u6d6a\u8d39\u65f6\u95f4\uff0c\u5bb9\u6613\u4ea7\u751f\u5185\u5b58\u7a7a\u95f4\u788e\u7247\u5316\u95ee\u9898")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6807\u8bb0-\u590d\u5236\u7b97\u6cd5 Mark-Copy"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b80\u5355\u9ad8\u6548\u4e3b\u8981\u89e3\u51b3\u5185\u5b58\u788e\u7247\u95ee\u9898\uff0c\u7528\u5728Eden\u533a\uff0c\u7f3a\u70b9\u65f6\u6d6a\u8d39\u7a7a\u95f4\uff0c\u5185\u5b58\u7f29\u5c0f\u4e3a\u539f\u6765\u7684\u4e00\u534a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6807\u8bb0-\u6574\u7406\u7b97\u6cd5 Mark-Compact"),(0,a.kt)("td",{parentName:"tr",align:null},"\u89e3\u51b3\u524d\u4e24\u79cd\u5b58\u5728\u7684\u95ee\u9898\uff0c\u4f1a\u5bf9\u5b58\u6d3b\u7684\u5bf9\u8c61\u8fdb\u884c\u6574\u7406\uff0c\u7f3a\u70b9\u65f6\u6548\u7387\u6bd4\u524d\u4e24\u8005\u4f4e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5206\u4ee3\u6536\u96c6\u7b97\u6cd5"),(0,a.kt)("td",{parentName:"tr",align:null},"\u628aJVM\u5206\u4e3a\u65b0\u751f\u4ee3\u548c\u8001\u5e74\u4ee3\uff0c\u6839\u636e\u5404\u4e2a\u5e74\u4ee3\u7684\u7279\u70b9\u91c7\u7528\u6700\u9002\u5f53\u7684\u6536\u96c6\u7b97\u6cd5")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5e74\u8f7b\u4ee3\uff1a")," \u5b58\u6d3b\u7387\u4f4e\uff0c\u590d\u5236\u7b97\u6cd5\u3002"),(0,a.kt)("br",null),"**\u8001\u5e74\u4ee3\uff1a** \u5bf9\u8c61\u5b58\u6d3b\u7387\u9ad8\uff0c\u6807\u8bb0\u6e05\u9664+\u6807\u8bb0\u6574\u7406\u7b97\u6cd5\u3002",(0,a.kt)("br",null),(0,a.kt)("p",null,"Eden\u533a\uff08\u4f0a\u7538\u56ed\uff09\uff1a\u65b0\u5efa\u5bf9\u8c61\u5b58\u653e\u533a"))}u.isMDXComponent=!0}}]);