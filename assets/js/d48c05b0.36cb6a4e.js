"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4801],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26464:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(){return n.createElement(n.Fragment,null,"\u672c\u6587\u5185\u5bb9\u8f6c\u8f7d\u81ea",n.createElement("a",{href:"https://xdclass.net/",target:"_blank"},"\u5c0f\u6ef4\u8bfe\u5802"),"\u3002")}},10795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),l=r(26464);const o={slug:"/note/2023-02/mysql-master-slave",title:"Mysql\u4e3b\u4ece\u590d\u5236\u67b6\u6784\u56fe",description:"\u5b58\u5728\u51e0\u4e2a\u7ebf\u7a0b\uff1a\u4e3b\u5e93\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u4ece\u5e93\u4e24\u4e2a\u7ebf\u7a0b\u3002\u4e3b\u5e93\u751f\u6210\u4e00\u4e2alog dump\u7ebf\u7a0b\uff0c\u548c\u4ece\u5e93IO\u7ebf\u7a0b\u4ea4\u4e92\u3002",keywords:["java","mysql","\u4e3b\u4ece\u590d\u5236"],date:new Date("2023-03-06T00:00:00.000Z"),tags:["java","mysql","\u77e5\u8bc6\u5c0f\u8bb0","2023-03"],last_update:{date:new Date("2023-03-06T00:00:00.000Z"),author:"machu"}},s=void 0,i={unversionedId:"\u5c0f\u8bb0/2023-03/06Mysql\u4e3b\u4ece\u590d\u5236\u67b6\u6784\u56fe",id:"\u5c0f\u8bb0/2023-03/06Mysql\u4e3b\u4ece\u590d\u5236\u67b6\u6784\u56fe",title:"Mysql\u4e3b\u4ece\u590d\u5236\u67b6\u6784\u56fe",description:"\u5b58\u5728\u51e0\u4e2a\u7ebf\u7a0b\uff1a\u4e3b\u5e93\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u4ece\u5e93\u4e24\u4e2a\u7ebf\u7a0b\u3002\u4e3b\u5e93\u751f\u6210\u4e00\u4e2alog dump\u7ebf\u7a0b\uff0c\u548c\u4ece\u5e93IO\u7ebf\u7a0b\u4ea4\u4e92\u3002",source:"@site/docs/\u5c0f\u8bb0/2023-03/06Mysql\u4e3b\u4ece\u590d\u5236\u67b6\u6784\u56fe.md",sourceDirName:"\u5c0f\u8bb0/2023-03",slug:"/note/2023-02/mysql-master-slave",permalink:"/docs/note/2023-02/mysql-master-slave",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u5c0f\u8bb0/2023-03/06Mysql\u4e3b\u4ece\u590d\u5236\u67b6\u6784\u56fe.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"mysql",permalink:"/docs/tags/mysql"},{label:"\u77e5\u8bc6\u5c0f\u8bb0",permalink:"/docs/tags/\u77e5\u8bc6\u5c0f\u8bb0"},{label:"2023-03",permalink:"/docs/tags/2023-03"}],version:"current",lastUpdatedBy:"machu",lastUpdatedAt:1678060800,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{slug:"/note/2023-02/mysql-master-slave",title:"Mysql\u4e3b\u4ece\u590d\u5236\u67b6\u6784\u56fe",description:"\u5b58\u5728\u51e0\u4e2a\u7ebf\u7a0b\uff1a\u4e3b\u5e93\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u4ece\u5e93\u4e24\u4e2a\u7ebf\u7a0b\u3002\u4e3b\u5e93\u751f\u6210\u4e00\u4e2alog dump\u7ebf\u7a0b\uff0c\u548c\u4ece\u5e93IO\u7ebf\u7a0b\u4ea4\u4e92\u3002",keywords:["java","mysql","\u4e3b\u4ece\u590d\u5236"],date:"2023-03-06T00:00:00.000Z",tags:["java","mysql","\u77e5\u8bc6\u5c0f\u8bb0","2023-03"],last_update:{date:"2023-03-06T00:00:00.000Z",author:"machu"}},sidebar:"tutorialSidebar",previous:{title:"Mysql\u5e38\u89c1\u7684\u7d22\u5f15\u79cd\u7c7b",permalink:"/docs/note/2023-02/mysql-index-type"},next:{title:"office\u5feb\u6377\u952e",permalink:"/docs/\u5de5\u5177/office\u5feb\u6377\u952e"}},c={},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49633468/223151012-021aef5e-98f4-4fa0-bf4f-09e8590fb42b.png",alt:"image"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b58\u5728\u51e0\u4e2a\u7ebf\u7a0b\uff1a\u4e3b\u5e93\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u4ece\u5e93\u4e24\u4e2a\u7ebf\u7a0b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e3b\u5e93\u751f\u6210\u4e00\u4e2alog dump\u7ebf\u7a0b\uff0c\u548c\u4ece\u5e93IO\u7ebf\u7a0b\u4ea4\u4e92\u3002"),(0,a.kt)("li",{parentName:"ol"},"IO\u7ebf\u7a0b\u8bf7\u6c42\u4e3b\u5e93binlog\uff0c\u5199\u5165\u5230\u4e2d\u7ee7\u65e5\u5fd7relay log\u3002"),(0,a.kt)("li",{parentName:"ol"},"SQL\u7ebf\u7a0b\u8bfb\u53d6\u4e2d\u7ee7\u65e5\u5fd7\uff0c\u89e3\u6790\u7136\u540e\u5199\u5165\u5230\u4ece\u5e93\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)(l.Z,{mdxType:"Quote"})))}m.isMDXComponent=!0}}]);