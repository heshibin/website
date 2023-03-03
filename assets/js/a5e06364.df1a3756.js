"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26464:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294);function l(){return r.createElement(r.Fragment,null,"\u672c\u6587\u5185\u5bb9\u8f6c\u8f7d\u81ea",r.createElement("a",{href:"https://xdclass.net/",target:"_blank"},"\u5c0f\u6ef4\u8bfe\u5802"),"\u3002")}},79833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),l=(n(67294),n(3905)),o=n(26464);const a={slug:"/note/2023-02/binlog-three-mode",title:"Mysql\u4e3b\u4ece\u590d\u5236\u4e2dbinlog\u7684\u591a\u79cd\u6a21\u5f0f",description:"redo log\u3001bin log\u3001undo log\u3001slow query log\u3001relay log",keywords:["java","mysql","\u4e3b\u4ece\u590d\u5236","bin log"],date:new Date("2023-03-02T00:00:00.000Z"),tags:["java","mysql","\u77e5\u8bc6\u5c0f\u8bb0","2023-03"],last_update:{date:new Date("2023-03-02T00:00:00.000Z"),author:"machu"}},i=void 0,s={unversionedId:"\u5c0f\u8bb0/2023-03/02Mysql\u4e3b\u4ece\u590d\u5236\u4e2dbinlog\u7684\u591a\u79cd\u6a21\u5f0f",id:"\u5c0f\u8bb0/2023-03/02Mysql\u4e3b\u4ece\u590d\u5236\u4e2dbinlog\u7684\u591a\u79cd\u6a21\u5f0f",title:"Mysql\u4e3b\u4ece\u590d\u5236\u4e2dbinlog\u7684\u591a\u79cd\u6a21\u5f0f",description:"redo log\u3001bin log\u3001undo log\u3001slow query log\u3001relay log",source:"@site/docs/\u5c0f\u8bb0/2023-03/02Mysql\u4e3b\u4ece\u590d\u5236\u4e2dbinlog\u7684\u591a\u79cd\u6a21\u5f0f.md",sourceDirName:"\u5c0f\u8bb0/2023-03",slug:"/note/2023-02/binlog-three-mode",permalink:"/docs/note/2023-02/binlog-three-mode",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u5c0f\u8bb0/2023-03/02Mysql\u4e3b\u4ece\u590d\u5236\u4e2dbinlog\u7684\u591a\u79cd\u6a21\u5f0f.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"mysql",permalink:"/docs/tags/mysql"},{label:"\u77e5\u8bc6\u5c0f\u8bb0",permalink:"/docs/tags/\u77e5\u8bc6\u5c0f\u8bb0"},{label:"2023-03",permalink:"/docs/tags/2023-03"}],version:"current",lastUpdatedBy:"machu",lastUpdatedAt:1677715200,formattedLastUpdatedAt:"Mar 2, 2023",frontMatter:{slug:"/note/2023-02/binlog-three-mode",title:"Mysql\u4e3b\u4ece\u590d\u5236\u4e2dbinlog\u7684\u591a\u79cd\u6a21\u5f0f",description:"redo log\u3001bin log\u3001undo log\u3001slow query log\u3001relay log",keywords:["java","mysql","\u4e3b\u4ece\u590d\u5236","bin log"],date:"2023-03-02T00:00:00.000Z",tags:["java","mysql","\u77e5\u8bc6\u5c0f\u8bb0","2023-03"],last_update:{date:"2023-03-02T00:00:00.000Z",author:"machu"}},sidebar:"tutorialSidebar",previous:{title:"Mysql\u5e38\u89c1\u7684\u51e0\u79cd\u65e5\u5fd7",permalink:"/docs/note/2023-02/mysql-log"},next:{title:"Mysql\u6267\u884c\u8ba1\u5212Explain\u4e2d\u7684Type",permalink:"/docs/note/2023-02/mysql-explain-type"}},p={},c=[{value:"statement",id:"statement",level:4},{value:"row",id:"row",level:4},{value:"mixed",id:"mixed",level:4}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"binlog \u5168\u79f0\u662f binary log \u4e8c\u8fdb\u5236\u65e5\u5fd7\uff0c\u4ee5\u4e8c\u8fdb\u5236\u5f62\u5f0f\u5b58\u5728\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u67e5\u770bbinlog\u6a21\u5f0fsql",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"show global variables like '%binlog%'")),(0,l.kt)("h4",{id:"statement"},"statement"),(0,l.kt)("p",null,"\u57fa\u4e8eSQL\u8bed\u53e5\u6a21\u5f0f",(0,l.kt)("br",{parentName:"p"}),"\n","\u8bb0\u5f55\u6bcf\u4e00\u6761\u4f1a\u4fee\u6539\u6570\u636e\u7684sql\u8bed\u53e5\u5230binlog\u4e2d\uff0c\u51cf\u5c11\u4e86binlog\u65e5\u5fd7\u91cf\uff0c\u4f46\u4f7f\u7528\u51fd\u6570\u5982 now() \u7b49\u64cd\u4f5c\u590d\u5236\u8fc7\u7a0b\u4e0d\u4e00\u81f4\u3002"),(0,l.kt)("h4",{id:"row"},"row"),(0,l.kt)("p",null,"\u57fa\u4e8e\u884c\u6a21\u5f0f",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e0d\u8bb0\u5f55\u6bcf\u4e00\u6761SQL\u8bed\u53e5\u4fe1\u606f\uff0c\u4ec5\u8bb0\u5f55\u54ea\u4e9b\u6570\u636e\u88ab\u4fee\u6539\u4e86\u3002\u6279\u91cf\u64cd\u4f5c\u6570\u636e\u4f1a\u5728 binlog \u4ea7\u751f\u5927\u91cfsql\uff0c\u4e3b\u4ece\u590d\u5236\u5ef6\u8fdf\u4f1a\u589e\u5927\uff0c\u6bd4\u5982\n",(0,l.kt)("inlineCode",{parentName:"p"},"update product where id < 100")," \u6279\u91cf\u4fee\u6539100\u6761\u6570\u636e\uff0c\u90a3\u4e48\u8bb0\u5f55\u6709100\u884c\u65e5\u5fd7\u6570\u636e\u3002"),(0,l.kt)("h4",{id:"mixed"},"mixed"),(0,l.kt)("p",null,"\u6df7\u5408\u6a21\u5f0f",(0,l.kt)("br",{parentName:"p"}),"\n","\u6839\u636esql\u8bed\u53e5\u7075\u6d3b\u9009\u62e9statement\u8fd8\u662frow\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)(o.Z,{mdxType:"Quote"})))}d.isMDXComponent=!0}}]);