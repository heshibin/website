"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6477],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u6570\u4ed3\u4e2d\u7684\u5bbd\u8868\u548c\u7a84\u8868",description:"\u7b80\u5355\u8bb2\u5b57\u6bb5\u6bd4\u8f83\u591a\u7684\u6570\u636e\u5e93\u8868\uff0c\u901a\u5e38\u662f\u6307\u4e1a\u52a1\u4e3b\u9898\u76f8\u5173\u7684\u6307\u6807-\u7ef4\u5ea6-\u5c5e\u6027\u5173\u8054\u5728\u4e00\u8d77\u7684\u8868\u3002\u628a\u4e0d\u540c\u7684\u5185\u5bb9\u90fd\u653e\u5728\u540c\u4e00\u5f20\u8868\u5b58\u50a8\uff0c\u5bbd\u8868\u4e0d\u7b26\u5408\u4e09\u8303\u5f0f\u7684\u6a21\u5f0f\u8bbe\u8ba1\u89c4\u8303\u3002",date:new Date("2023-02-01T00:00:00.000Z"),tags:["java","\u77e5\u8bc6\u5c0f\u8bb0","2023-02"]},i=void 0,l={unversionedId:"JAVA/\u5c0f\u8bb0/2023-02/01\u6570\u4ed3\u4e2d\u7684\u5bbd\u8868\u548c\u7a84\u8868",id:"JAVA/\u5c0f\u8bb0/2023-02/01\u6570\u4ed3\u4e2d\u7684\u5bbd\u8868\u548c\u7a84\u8868",title:"\u6570\u4ed3\u4e2d\u7684\u5bbd\u8868\u548c\u7a84\u8868",description:"\u7b80\u5355\u8bb2\u5b57\u6bb5\u6bd4\u8f83\u591a\u7684\u6570\u636e\u5e93\u8868\uff0c\u901a\u5e38\u662f\u6307\u4e1a\u52a1\u4e3b\u9898\u76f8\u5173\u7684\u6307\u6807-\u7ef4\u5ea6-\u5c5e\u6027\u5173\u8054\u5728\u4e00\u8d77\u7684\u8868\u3002\u628a\u4e0d\u540c\u7684\u5185\u5bb9\u90fd\u653e\u5728\u540c\u4e00\u5f20\u8868\u5b58\u50a8\uff0c\u5bbd\u8868\u4e0d\u7b26\u5408\u4e09\u8303\u5f0f\u7684\u6a21\u5f0f\u8bbe\u8ba1\u89c4\u8303\u3002",source:"@site/docs/JAVA/\u5c0f\u8bb0/2023-02/01\u6570\u4ed3\u4e2d\u7684\u5bbd\u8868\u548c\u7a84\u8868.md",sourceDirName:"JAVA/\u5c0f\u8bb0/2023-02",slug:"/JAVA/\u5c0f\u8bb0/2023-02/01\u6570\u4ed3\u4e2d\u7684\u5bbd\u8868\u548c\u7a84\u8868",permalink:"/docs/JAVA/\u5c0f\u8bb0/2023-02/01\u6570\u4ed3\u4e2d\u7684\u5bbd\u8868\u548c\u7a84\u8868",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/JAVA/\u5c0f\u8bb0/2023-02/01\u6570\u4ed3\u4e2d\u7684\u5bbd\u8868\u548c\u7a84\u8868.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"\u77e5\u8bc6\u5c0f\u8bb0",permalink:"/docs/tags/\u77e5\u8bc6\u5c0f\u8bb0"},{label:"2023-02",permalink:"/docs/tags/2023-02"}],version:"current",frontMatter:{title:"\u6570\u4ed3\u4e2d\u7684\u5bbd\u8868\u548c\u7a84\u8868",description:"\u7b80\u5355\u8bb2\u5b57\u6bb5\u6bd4\u8f83\u591a\u7684\u6570\u636e\u5e93\u8868\uff0c\u901a\u5e38\u662f\u6307\u4e1a\u52a1\u4e3b\u9898\u76f8\u5173\u7684\u6307\u6807-\u7ef4\u5ea6-\u5c5e\u6027\u5173\u8054\u5728\u4e00\u8d77\u7684\u8868\u3002\u628a\u4e0d\u540c\u7684\u5185\u5bb9\u90fd\u653e\u5728\u540c\u4e00\u5f20\u8868\u5b58\u50a8\uff0c\u5bbd\u8868\u4e0d\u7b26\u5408\u4e09\u8303\u5f0f\u7684\u6a21\u5f0f\u8bbe\u8ba1\u89c4\u8303\u3002",date:"2023-02-01T00:00:00.000Z",tags:["java","\u77e5\u8bc6\u5c0f\u8bb0","2023-02"]},sidebar:"tutorialSidebar",previous:{title:"\u6570\u4ed3\u4e2d\u7684\u5ea6\u91cf\u3001\u7ef4\u5ea6\u3001\u4e8b\u5b9e\u8868",permalink:"/docs/JAVA/\u5c0f\u8bb0/2023-01/31\u6570\u4ed3\u4e2d\u7684\u5ea6\u91cf\u3001\u7ef4\u5ea6\u3001\u4e8b\u5b9e\u8868"},next:{title:"\u83b7\u53d6ip\u3001mac\u5730\u5740",permalink:"/docs/JAVA/\u5de5\u5177\u7c7b/NetworkUtil \u83b7\u53d6ip\u3001mac\u5730\u5740"}},p={},c=[{value:"\u5bbd\u8868\uff08\u660e\u7ec6\u8868\uff09",id:"\u5bbd\u8868\u660e\u7ec6\u8868",level:3},{value:"\u7a84\u8868",id:"\u7a84\u8868",level:3}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u5bbd\u8868\u660e\u7ec6\u8868"},"\u5bbd\u8868\uff08\u660e\u7ec6\u8868\uff09"),(0,a.kt)("p",null,"\u7b80\u5355\u8bb2\u5b57\u6bb5\u6bd4\u8f83\u591a\u7684\u6570\u636e\u5e93\u8868\uff0c\u901a\u5e38\u662f\u6307\u4e1a\u52a1\u4e3b\u9898\u76f8\u5173\u7684\u6307\u6807-\u7ef4\u5ea6-\u5c5e\u6027\u5173\u8054\u5728\u4e00\u8d77\u7684\u8868\u3002"),(0,a.kt)("p",null,"\u628a\u4e0d\u540c\u7684\u5185\u5bb9\u90fd\u653e\u5728\u540c\u4e00\u5f20\u8868\u5b58\u50a8\uff0c\u5bbd\u8868\u4e0d\u7b26\u5408",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e09\u8303\u5f0f"),"\u7684\u6a21\u5f0f\u8bbe\u8ba1\u89c4\u8303\u3002"),(0,a.kt)("p",null,"\u5c3d\u91cf\u6ee1\u8db3\u591a\u7ef4\uff0c\u591a\u5ea6\u91cf\uff0c\u9075\u5faa\u7ef4\u5ea6\u5efa\u6a21\u7684\u539f\u5219\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9"),"\uff1a\u6570\u636e\u7684\u5927\u91cf\u5197\u4f59\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9"),"\uff1a\u51cf\u5c11\u8868\u5173\u8054\u6570\u91cf\uff0c\u67e5\u8be2\u6027\u80fd\u7684\u63d0\u9ad8\uff0c\u7a7a\u95f4\u6362\u65f6\u95f4\u3002"),(0,a.kt)("h3",{id:"\u7a84\u8868"},"\u7a84\u8868"),(0,a.kt)("p",null,"\u4e25\u683c\u6309\u7167\u6570\u636e\u5e93\u8bbe\u8ba1\u4e09\u8303\u5f0f\uff0c\u5c3d\u91cf\u51cf\u5c11\u6570\u636e\u5197\u4f59\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9"),"\uff1a\u505a\u6570\u636e\u5206\u6790\u67e5\u8be2OLAP\u65f6\uff0c\u9700\u8981\u5927\u91cf\u5173\u8054\u591a\u4e2a\u8868\uff0c\u6027\u80fd\u4e0b\u964d\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9"),"\uff1a\u5b58\u50a8\u7701\u7a7a\u95f4\uff0c\u5927\u91cf\u6570\u636e\u53ea\u5b58\u50a8\u67d0\u4e2a\u8868\u3002"))}u.isMDXComponent=!0}}]);