"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5205],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),d=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),f=n,g=k["".concat(i,".").concat(f)]||k[f]||N[f]||l;return a?r.createElement(g,o(o({ref:e},m),{},{components:a})):r.createElement(g,o({ref:e},m))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=f;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[k]="string"==typeof t?t:n,o[1]=p;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},19555:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"Go \u8bed\u8a00\u6570\u636e\u7c7b\u578b",description:"\u5728 Go \u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u6570\u636e\u7c7b\u578b\u7528\u4e8e\u58f0\u660e\u51fd\u6570\u548c\u53d8\u91cf\u3002\u6570\u636e\u7c7b\u578b\u7684\u51fa\u73b0\u662f\u4e3a\u4e86\u628a\u6570\u636e\u5206\u6210\u6240\u9700\u5185\u5b58\u5927\u5c0f\u4e0d\u540c\u7684\u6570\u636e\uff0c\u7f16\u7a0b\u7684\u65f6\u5019\u9700\u8981\u7528\u5927\u6570\u636e\u7684\u65f6\u5019\u624d\u9700\u8981\u7533\u8bf7\u5927\u5185\u5b58\uff0c\u5c31\u53ef\u4ee5\u5145\u5206\u5229\u7528\u5185\u5b58\u3002",date:new Date("2023-01-31T00:00:00.000Z"),authors:"heshibin",tags:["Go"]},o=void 0,p={unversionedId:"Go \u8bed\u8a00/05Go \u8bed\u8a00\u6570\u636e\u7c7b\u578b",id:"Go \u8bed\u8a00/05Go \u8bed\u8a00\u6570\u636e\u7c7b\u578b",title:"Go \u8bed\u8a00\u6570\u636e\u7c7b\u578b",description:"\u5728 Go \u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u6570\u636e\u7c7b\u578b\u7528\u4e8e\u58f0\u660e\u51fd\u6570\u548c\u53d8\u91cf\u3002\u6570\u636e\u7c7b\u578b\u7684\u51fa\u73b0\u662f\u4e3a\u4e86\u628a\u6570\u636e\u5206\u6210\u6240\u9700\u5185\u5b58\u5927\u5c0f\u4e0d\u540c\u7684\u6570\u636e\uff0c\u7f16\u7a0b\u7684\u65f6\u5019\u9700\u8981\u7528\u5927\u6570\u636e\u7684\u65f6\u5019\u624d\u9700\u8981\u7533\u8bf7\u5927\u5185\u5b58\uff0c\u5c31\u53ef\u4ee5\u5145\u5206\u5229\u7528\u5185\u5b58\u3002",source:"@site/docs/Go \u8bed\u8a00/05Go \u8bed\u8a00\u6570\u636e\u7c7b\u578b.md",sourceDirName:"Go \u8bed\u8a00",slug:"/Go \u8bed\u8a00/05Go \u8bed\u8a00\u6570\u636e\u7c7b\u578b",permalink:"/docs/Go \u8bed\u8a00/05Go \u8bed\u8a00\u6570\u636e\u7c7b\u578b",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/Go \u8bed\u8a00/05Go \u8bed\u8a00\u6570\u636e\u7c7b\u578b.md",tags:[{label:"Go",permalink:"/docs/tags/go"}],version:"current",lastUpdatedBy:"heshibin",lastUpdatedAt:1677131543,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{title:"Go \u8bed\u8a00\u6570\u636e\u7c7b\u578b",description:"\u5728 Go \u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u6570\u636e\u7c7b\u578b\u7528\u4e8e\u58f0\u660e\u51fd\u6570\u548c\u53d8\u91cf\u3002\u6570\u636e\u7c7b\u578b\u7684\u51fa\u73b0\u662f\u4e3a\u4e86\u628a\u6570\u636e\u5206\u6210\u6240\u9700\u5185\u5b58\u5927\u5c0f\u4e0d\u540c\u7684\u6570\u636e\uff0c\u7f16\u7a0b\u7684\u65f6\u5019\u9700\u8981\u7528\u5927\u6570\u636e\u7684\u65f6\u5019\u624d\u9700\u8981\u7533\u8bf7\u5927\u5185\u5b58\uff0c\u5c31\u53ef\u4ee5\u5145\u5206\u5229\u7528\u5185\u5b58\u3002",date:"2023-01-31T00:00:00.000Z",authors:"heshibin",tags:["Go"]},sidebar:"tutorialSidebar",previous:{title:"Go \u8bed\u8a00\u57fa\u7840\u8bed\u6cd5",permalink:"/docs/Go \u8bed\u8a00/04Go \u8bed\u8a00\u57fa\u7840\u8bed\u6cd5"},next:{title:"Go \u8bed\u8a00\u53d8\u91cf",permalink:"/docs/Go \u8bed\u8a00/06Go \u8bed\u8a00\u53d8\u91cf"}},i={},d=[{value:"\u6570\u5b57\u7c7b\u578b",id:"\u6570\u5b57\u7c7b\u578b",level:3},{value:"\u6d6e\u70b9\u578b",id:"\u6d6e\u70b9\u578b",level:4},{value:"\u5176\u4ed6\u6570\u5b57\u7c7b\u578b",id:"\u5176\u4ed6\u6570\u5b57\u7c7b\u578b",level:3}],m={toc:d};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728 Go \u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u7c7b\u578b\u7528\u4e8e\u58f0\u660e\u51fd\u6570\u548c\u53d8\u91cf"),"\u3002  "),(0,n.kt)("p",null,"\u6570\u636e\u7c7b\u578b\u7684\u51fa\u73b0\u662f\u4e3a\u4e86\u628a\u6570\u636e\u5206\u6210\u6240\u9700\u5185\u5b58\u5927\u5c0f\u4e0d\u540c\u7684\u6570\u636e\uff0c\u7f16\u7a0b\u7684\u65f6\u5019\u9700\u8981\u7528\u5927\u6570\u636e\u7684\u65f6\u5019\u624d\u9700\u8981\u7533\u8bf7\u5927\u5185\u5b58\uff0c\u5c31\u53ef\u4ee5\u5145\u5206\u5229\u7528\u5185\u5b58\u3002    "),(0,n.kt)("p",null,"Go \u8bed\u8a00\u6309\u7c7b\u522b\u6709\u4ee5\u4e0b\u51e0\u79cd\u6570\u636e\u7c7b\u578b\uff1a  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5e8f\u53f7"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b\u548c\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"\u5e03\u5c14\u578b")," \u5e03\u5c14\u578b\u7684\u503c\u53ea\u53ef\u4ee5\u662f\u5e38\u91cf true \u6216\u8005 false\u3002\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1avar b bool = true\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"\u6570\u5b57\u7c7b\u578b")," \u6574\u578b int \u548c\u6d6e\u70b9\u578b float32\u3001float64\uff0cGo \u8bed\u8a00\u652f\u6301\u6574\u578b\u548c\u6d6e\u70b9\u578b\u6570\u5b57\uff0c\u5e76\u4e14\u652f\u6301\u590d\u6570\uff0c\u5176\u4e2d\u4f4d\u7684\u8fd0\u7b97\u91c7\u7528\u8865\u7801\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"\u5b57\u7b26\u4e32\u7c7b\u578b:")," \u5b57\u7b26\u4e32\u5c31\u662f\u4e00\u4e32\u56fa\u5b9a\u957f\u5ea6\u7684\u5b57\u7b26\u8fde\u63a5\u8d77\u6765\u7684\u5b57\u7b26\u5e8f\u5217\u3002Go \u7684\u5b57\u7b26\u4e32\u662f\u7531\u5355\u4e2a\u5b57\u8282\u8fde\u63a5\u8d77\u6765\u7684\u3002Go \u8bed\u8a00\u7684\u5b57\u7b26\u4e32\u7684\u5b57\u8282\u4f7f\u7528 UTF-8 \u7f16\u7801\u6807\u8bc6 Unicode \u6587\u672c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"\u6d3e\u751f\u7c7b\u578b:")," \u5305\u62ec\uff1a(a) \u6307\u9488\u7c7b\u578b\uff08Pointer\uff09(b) \u6570\u7ec4\u7c7b\u578b(c) \u7ed3\u6784\u5316\u7c7b\u578b(struct)(d) Channel \u7c7b\u578b(e) \u51fd\u6570\u7c7b\u578b(f) \u5207\u7247\u7c7b\u578b(g) \u63a5\u53e3\u7c7b\u578b\uff08interface\uff09(h) Map \u7c7b\u578b")))),(0,n.kt)("h3",{id:"\u6570\u5b57\u7c7b\u578b"},"\u6570\u5b57\u7c7b\u578b"),(0,n.kt)("p",null,"Go \u4e5f\u6709\u57fa\u4e8e\u67b6\u6784\u7684\u7c7b\u578b\uff0c\u4f8b\u5982\uff1aint\u3001uint \u548c uintptr\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5e8f\u53f7"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b\u548c\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"uint8")," \u65e0\u7b26\u53f7 8 \u4f4d\u6574\u578b (0 \u5230 255)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"uint16")," \u65e0\u7b26\u53f7 16 \u4f4d\u6574\u578b (0 \u5230 65535)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"uint32")," \u65e0\u7b26\u53f7 32 \u4f4d\u6574\u578b (0 \u5230 4294967295)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"uint64")," \u65e0\u7b26\u53f7 64 \u4f4d\u6574\u578b (0 \u5230 18446744073709551615)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"int8")," \u6709\u7b26\u53f7 8 \u4f4d\u6574\u578b (-128 \u5230 127)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"6"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"int16")," \u6709\u7b26\u53f7 16 \u4f4d\u6574\u578b (-32768 \u5230 32767)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"7"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"int32")," \u6709\u7b26\u53f7 32 \u4f4d\u6574\u578b (-2147483648 \u5230 2147483647)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"8"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"int64")," \u6709\u7b26\u53f7 64 \u4f4d\u6574\u578b (-9223372036854775808 \u5230 9223372036854775807)")))),(0,n.kt)("h4",{id:"\u6d6e\u70b9\u578b"},"\u6d6e\u70b9\u578b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5e8f\u53f7"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b\u548c\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"float32")," IEEE-754 32\u4f4d\u6d6e\u70b9\u578b\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"float64")," IEEE-754 64\u4f4d\u6d6e\u70b9\u578b\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"complex64")," 32 \u4f4d\u5b9e\u6570\u548c\u865a\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"complex128")," 64 \u4f4d\u5b9e\u6570\u548c\u865a\u6570")))),(0,n.kt)("h3",{id:"\u5176\u4ed6\u6570\u5b57\u7c7b\u578b"},"\u5176\u4ed6\u6570\u5b57\u7c7b\u578b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5e8f\u53f7"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b\u548c\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"byte")," \u7c7b\u4f3c uint8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"rune")," \u7c7b\u4f3c int32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"uint")," 32 \u6216 64 \u4f4d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"int")," \u4e0e uint \u4e00\u6837\u5927\u5c0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"uintptr")," \u65e0\u7b26\u53f7\u6574\u578b\uff0c\u7528\u4e8e\u5b58\u653e\u4e00\u4e2a\u6307\u9488")))))}k.isMDXComponent=!0}}]);