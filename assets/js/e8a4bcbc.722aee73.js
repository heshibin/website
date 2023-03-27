"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26464:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(){return r.createElement(r.Fragment,null,"\u672c\u6587\u5185\u5bb9\u8f6c\u8f7d\u81ea",r.createElement("a",{href:"https://xdclass.net/",target:"_blank"},"\u5c0f\u6ef4\u8bfe\u5802"),"\u3002")}},77699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(26464);const l={slug:"/note/snowflake",title:"\u5206\u5e03\u5f0fID\u751f\u6210\u7b97\u6cd5-Snowflake\u539f\u7406",description:"\u5206\u5e03\u5f0fID\u751f\u6210\u7b97\u6cd5-Snowflake\u539f\u7406\u96ea\u82b1\u7b97\u6cd5\u751f\u6210\u7684\u6570\u5b57\uff0clong\u7c7b\uff0c\u6240\u4ee5\u5c31\u662f8\u4e2abyte\uff0c64bit\u3002  \u8868\u793a\u7684\u503c\uff1a-9223372036854775808\uff08-2\u768463\u6b21\u65b9\uff09~ 9223372036854775807\uff082\u768463\u6b21\u65b9-1\uff09",keywords:["java","\u96ea\u82b1\u7b97\u6cd5"],date:new Date("2023-03-22T00:00:00.000Z"),tags:["java","\u96ea\u82b1\u7b97\u6cd5","\u77e5\u8bc6\u5c0f\u8bb0","2023-03"],last_update:{date:new Date("2023-03-22T00:00:00.000Z"),author:"machu"}},i=void 0,c={unversionedId:"\u5c0f\u8bb0/2023-03/22\u5206\u5e03\u5f0fID\u751f\u6210\u7b97\u6cd5-Snowflake\u539f\u7406",id:"\u5c0f\u8bb0/2023-03/22\u5206\u5e03\u5f0fID\u751f\u6210\u7b97\u6cd5-Snowflake\u539f\u7406",title:"\u5206\u5e03\u5f0fID\u751f\u6210\u7b97\u6cd5-Snowflake\u539f\u7406",description:"\u5206\u5e03\u5f0fID\u751f\u6210\u7b97\u6cd5-Snowflake\u539f\u7406\u96ea\u82b1\u7b97\u6cd5\u751f\u6210\u7684\u6570\u5b57\uff0clong\u7c7b\uff0c\u6240\u4ee5\u5c31\u662f8\u4e2abyte\uff0c64bit\u3002  \u8868\u793a\u7684\u503c\uff1a-9223372036854775808\uff08-2\u768463\u6b21\u65b9\uff09~ 9223372036854775807\uff082\u768463\u6b21\u65b9-1\uff09",source:"@site/docs/\u5c0f\u8bb0/2023-03/22\u5206\u5e03\u5f0fID\u751f\u6210\u7b97\u6cd5-Snowflake\u539f\u7406.md",sourceDirName:"\u5c0f\u8bb0/2023-03",slug:"/note/snowflake",permalink:"/docs/note/snowflake",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u5c0f\u8bb0/2023-03/22\u5206\u5e03\u5f0fID\u751f\u6210\u7b97\u6cd5-Snowflake\u539f\u7406.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"\u96ea\u82b1\u7b97\u6cd5",permalink:"/docs/tags/\u96ea\u82b1\u7b97\u6cd5"},{label:"\u77e5\u8bc6\u5c0f\u8bb0",permalink:"/docs/tags/\u77e5\u8bc6\u5c0f\u8bb0"},{label:"2023-03",permalink:"/docs/tags/2023-03"}],version:"current",lastUpdatedBy:"machu",lastUpdatedAt:1679443200,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{slug:"/note/snowflake",title:"\u5206\u5e03\u5f0fID\u751f\u6210\u7b97\u6cd5-Snowflake\u539f\u7406",description:"\u5206\u5e03\u5f0fID\u751f\u6210\u7b97\u6cd5-Snowflake\u539f\u7406\u96ea\u82b1\u7b97\u6cd5\u751f\u6210\u7684\u6570\u5b57\uff0clong\u7c7b\uff0c\u6240\u4ee5\u5c31\u662f8\u4e2abyte\uff0c64bit\u3002  \u8868\u793a\u7684\u503c\uff1a-9223372036854775808\uff08-2\u768463\u6b21\u65b9\uff09~ 9223372036854775807\uff082\u768463\u6b21\u65b9-1\uff09",keywords:["java","\u96ea\u82b1\u7b97\u6cd5"],date:"2023-03-22T00:00:00.000Z",tags:["java","\u96ea\u82b1\u7b97\u6cd5","\u77e5\u8bc6\u5c0f\u8bb0","2023-03"],last_update:{date:"2023-03-22T00:00:00.000Z",author:"machu"}},sidebar:"tutorialSidebar",previous:{title:"\u8ba1\u7b97\u673a\u57fa\u7840\u77e5\u8bc6-bit\u548cbyte",permalink:"/docs/note/bit-and-byte"},next:{title:"office\u5feb\u6377\u952e",permalink:"/docs/\u5de5\u5177/office\u5feb\u6377\u952e"}},s={},p=[],u={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u96ea\u82b1\u7b97\u6cd5\u751f\u6210\u7684\u6570\u5b57\uff0clong\u7c7b\uff0c\u6240\u4ee5\u5c31\u662f8\u4e2abyte\uff0c64bit\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8868\u793a\u7684\u503c\uff1a-9223372036854775808\uff08-2\u768463\u6b21\u65b9\uff09~ 9223372036854775807\uff082\u768463\u6b21\u65b9-1\uff09",(0,a.kt)("br",{parentName:"p"}),"\n","\u751f\u6210\u7684\u552f\u4e00\u503c\u7528\u4e8e\u6570\u636e\u5e93\u4e3b\u952e\uff0c\u4e0d\u80fd\u662f\u9644\u5c5e\uff0c\u6240\u4ee5\u503c\u4e3a0 ~ 9223372036854775807\uff082\u768463\u6b21\u65b9-1\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49633468/227945436-ad4115f4-c5fd-43fb-9967-e65c76a2846c.png",alt:"image"})),(0,a.kt)("blockquote",null,(0,a.kt)(o.Z,{mdxType:"Quote"})))}f.isMDXComponent=!0}}]);