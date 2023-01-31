"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),b=o,m=p["".concat(u,".").concat(b)]||p[b]||y[b]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={slug:"\u62a5\u9519only_full_group_by\u7684\u89e3\u51b3\u529e\u6cd5",title:"\u62a5\u9519only_full_group_by\u7684\u89e3\u51b3\u529e\u6cd5",date:new Date("2023-01-03T00:00:00.000Z"),authors:"heshibin",tags:["java","mysql"]},l=void 0,i={permalink:"/blog/\u62a5\u9519only_full_group_by\u7684\u89e3\u51b3\u529e\u6cd5",editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/blog/\u62a5\u9519only_full_group_by\u7684\u89e3\u51b3\u529e\u6cd5.md",source:"@site/blog/\u62a5\u9519only_full_group_by\u7684\u89e3\u51b3\u529e\u6cd5.md",title:"\u62a5\u9519only_full_group_by\u7684\u89e3\u51b3\u529e\u6cd5",description:"",date:"2023-01-03T00:00:00.000Z",formattedDate:"January 3, 2023",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"mysql",permalink:"/blog/tags/mysql"}],readingTime:.03,hasTruncateMarker:!1,authors:[{name:"heshibin",title:"cv\u6478\u9c7c\u5927\u5e08",url:"https://github.com/heshibin",email:"17608484341@163.com",imageURL:"https://avatars.githubusercontent.com/u/49633468?s=400&u=e1850391be1aa0356c3ae4202a8e8b8018c584d0&v=4",key:"heshibin"}],frontMatter:{slug:"\u62a5\u9519only_full_group_by\u7684\u89e3\u51b3\u529e\u6cd5",title:"\u62a5\u9519only_full_group_by\u7684\u89e3\u51b3\u529e\u6cd5",date:"2023-01-03T00:00:00.000Z",authors:"heshibin",tags:["java","mysql"]},prevItem:{title:"nginx\u53cd\u5411\u4ee3\u7406",permalink:"/blog/nginx\u53cd\u5411\u4ee3\u7406"},nextItem:{title:"\u89e3\u51b3jsencrypt\u52a0\u5bc6\u957f\u6587\u672c\u65f6\u89e3\u5bc6\u5931\u8d25",permalink:"/blog/\u89e3\u51b3jsencrypt\u52a0\u5bc6\u957f\u6587\u672c\u65f6\u89e3\u5bc6\u5931\u8d25"}},u={authorsImageUrls:[void 0]},c=[],s={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select @@global.sql_mode;\nset @@global.sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'\n")))}p.isMDXComponent=!0}}]);