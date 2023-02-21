"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6048],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={title:"\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u597d\u5904",description:"\u7528\u8fc7\u7ebf\u7a0b\u6c60\u4e0d\uff1f\u6709\u4ec0\u4e48\u597d\u5904\uff1fjava\u91cc\u9762\u6709\u54ea\u4e9b\u662f\u5e38\u7528\u7684\u7ebf\u7a0b\u6c60\uff1f\u91cd\u7528\u5b58\u5728\u7684\u7ebf\u7a0b\uff0c\u51cf\u5c11\u5bf9\u8c61\u521b\u5efa\u9500\u6bc1\u7684\u5f00\u9500\uff0c\u6709\u6548\u7684\u63a7\u5236\u6700\u5927\u5e76\u53d1\u7ebf\u7a0b\u6570\uff0c\u63d0\u9ad8\u7cfb\u7edf\u8d44\u6e90\u7684\u4f7f\u7528\u7387\u3002",keywords:["java","\u7ebf\u7a0b\u6c60","newFixedThreadPool","newCachedThreadPool","newSingleThreadExecutor","newScheduledThreadPool"],date:new Date("2023-02-21T00:00:00.000Z"),tags:["java","\u77e5\u8bc6\u5c0f\u8bb0","2023-02"],last_update:{date:new Date("2023-02-21T00:00:00.000Z"),author:"machu"}},l=void 0,i={unversionedId:"\u5c0f\u8bb0/2023-02/21\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u597d\u5904",id:"\u5c0f\u8bb0/2023-02/21\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u597d\u5904",title:"\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u597d\u5904",description:"\u7528\u8fc7\u7ebf\u7a0b\u6c60\u4e0d\uff1f\u6709\u4ec0\u4e48\u597d\u5904\uff1fjava\u91cc\u9762\u6709\u54ea\u4e9b\u662f\u5e38\u7528\u7684\u7ebf\u7a0b\u6c60\uff1f\u91cd\u7528\u5b58\u5728\u7684\u7ebf\u7a0b\uff0c\u51cf\u5c11\u5bf9\u8c61\u521b\u5efa\u9500\u6bc1\u7684\u5f00\u9500\uff0c\u6709\u6548\u7684\u63a7\u5236\u6700\u5927\u5e76\u53d1\u7ebf\u7a0b\u6570\uff0c\u63d0\u9ad8\u7cfb\u7edf\u8d44\u6e90\u7684\u4f7f\u7528\u7387\u3002",source:"@site/docs/\u5c0f\u8bb0/2023-02/21\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u597d\u5904.md",sourceDirName:"\u5c0f\u8bb0/2023-02",slug:"/\u5c0f\u8bb0/2023-02/21\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u597d\u5904",permalink:"/docs/\u5c0f\u8bb0/2023-02/21\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u597d\u5904",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u5c0f\u8bb0/2023-02/21\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u597d\u5904.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"\u77e5\u8bc6\u5c0f\u8bb0",permalink:"/docs/tags/\u77e5\u8bc6\u5c0f\u8bb0"},{label:"2023-02",permalink:"/docs/tags/2023-02"}],version:"current",lastUpdatedBy:"machu",lastUpdatedAt:1676937600,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{title:"\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u597d\u5904",description:"\u7528\u8fc7\u7ebf\u7a0b\u6c60\u4e0d\uff1f\u6709\u4ec0\u4e48\u597d\u5904\uff1fjava\u91cc\u9762\u6709\u54ea\u4e9b\u662f\u5e38\u7528\u7684\u7ebf\u7a0b\u6c60\uff1f\u91cd\u7528\u5b58\u5728\u7684\u7ebf\u7a0b\uff0c\u51cf\u5c11\u5bf9\u8c61\u521b\u5efa\u9500\u6bc1\u7684\u5f00\u9500\uff0c\u6709\u6548\u7684\u63a7\u5236\u6700\u5927\u5e76\u53d1\u7ebf\u7a0b\u6570\uff0c\u63d0\u9ad8\u7cfb\u7edf\u8d44\u6e90\u7684\u4f7f\u7528\u7387\u3002",keywords:["java","\u7ebf\u7a0b\u6c60","newFixedThreadPool","newCachedThreadPool","newSingleThreadExecutor","newScheduledThreadPool"],date:"2023-02-21T00:00:00.000Z",tags:["java","\u77e5\u8bc6\u5c0f\u8bb0","2023-02"],last_update:{date:"2023-02-21T00:00:00.000Z",author:"machu"}},sidebar:"tutorialSidebar",previous:{title:"ReentrantLock\u548cSynchronized\u7684\u4f7f\u7528\u573a\u666f\u548c\u5b9e\u73b0\u673a\u5236",permalink:"/docs/\u5c0f\u8bb0/2023-02/20ReentrantLock\u548cSynchronized\u7684\u4f7f\u7528\u573a\u666f\u548c\u5b9e\u73b0\u673a\u5236"},next:{title:"office\u5feb\u6377\u952e",permalink:"/docs/\u5de5\u5177/office\u5feb\u6377\u952e"}},c={},d=[{value:"\u7ebf\u7a0b\u6c60\u597d\u5904",id:"\u7ebf\u7a0b\u6c60\u597d\u5904",level:4},{value:"\u7ebf\u7a0b\u6c60\u7c7b\u578b",id:"\u7ebf\u7a0b\u6c60\u7c7b\u578b",level:4},{value:"\u76f8\u5173\u6587\u7ae0",id:"\u76f8\u5173\u6587\u7ae0",level:4}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"\u7ebf\u7a0b\u6c60\u597d\u5904"},"\u7ebf\u7a0b\u6c60\u597d\u5904"),(0,n.kt)("p",null,"\u91cd\u7528\u5b58\u5728\u7684\u7ebf\u7a0b\uff0c\u51cf\u5c11\u5bf9\u8c61\u521b\u5efa\u9500\u6bc1\u7684\u5f00\u9500\uff0c\u6709\u6548\u7684\u63a7\u5236\u6700\u5927\u5e76\u53d1\u7ebf\u7a0b\u6570\uff0c\u63d0\u9ad8\u7cfb\u7edf\u8d44\u6e90\u7684\u4f7f\u7528\u7387\u3002"),(0,n.kt)("h4",{id:"\u7ebf\u7a0b\u6c60\u7c7b\u578b"},"\u7ebf\u7a0b\u6c60\u7c7b\u578b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"newFixedThreadPool\n\u4e00\u4e2a\u5b9a\u957f\u7ebf\u7a0b\u6c60\uff0c\u53ef\u63a7\u5236\u7ebf\u7a0b\u6700\u5927\u5e76\u53d1\u6570\u3002"),(0,n.kt)("li",{parentName:"ul"},"newCachedThreadPool\n\u4e00\u4e2a\u53ef\u7f13\u5b58\u7ebf\u7a0b\u6c60\u3002"),(0,n.kt)("li",{parentName:"ul"},"newSingleThreadExecutor\n\u4e00\u4e2a\u5355\u7ebf\u7a0b\u7684\u7ebf\u7a0b\u6c60\uff0c\u7528\u552f\u4e00\u5de5\u4f5c\u7ebf\u7a0b\u6267\u884c\u4efb\u52a1\u3002"),(0,n.kt)("li",{parentName:"ul"},"newScheduledThreadPool\n\u4e00\u4e2a\u5b9a\u957f\u7ebf\u7a0b\u6c60\uff0c\u652f\u6301\u5468\u671f\u6027\u4efb\u52a1\u6267\u884c\u3002")),(0,n.kt)("h4",{id:"\u76f8\u5173\u6587\u7ae0"},"\u76f8\u5173\u6587\u7ae0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://machu.top/docs/%E5%B0%8F%E8%AE%B0/2023-02/17java%E4%B8%AD%E4%BF%9D%E8%AF%81%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E6%B3%95"},"java\u4e2d\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u7684\u51e0\u79cd\u65b9\u6cd5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://machu.top/docs/%E5%B0%8F%E8%AE%B0/2023-02/18java%E4%B8%AD%E7%9A%84%E9%94%81"},"java\u4e2d\u7684\u9501")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://machu.top/docs/%E5%B0%8F%E8%AE%B0/2023-02/19%E9%AB%98%E6%80%A7%E8%83%BD%E7%9A%84Compare%20and%20Swap"},"\u9ad8\u6027\u80fd\u7684Compare and Swap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://machu.top/docs/%E5%B0%8F%E8%AE%B0/2023-02/20ReentrantLock%E5%92%8CSynchronized%E7%9A%84%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF%E5%92%8C%E5%AE%9E%E7%8E%B0%E6%9C%BA%E5%88%B6"},"ReentrantLock\u548cSynchronized\u7684\u4f7f\u7528\u573a\u666f\u548c\u5b9e\u73b0\u673a\u5236"))))}u.isMDXComponent=!0}}]);