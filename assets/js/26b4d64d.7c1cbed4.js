"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(r),k=o,m=p["".concat(d,".").concat(k)]||p[k]||u[k]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},54152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={slug:"docker\u5e38\u7528\u547d\u4ee4",title:"docker\u5e38\u7528\u547d\u4ee4",date:new Date("2023-01-03T00:00:00.000Z"),sidebar_position:5,authors:"heshibin",tags:["java","docker"]},c=void 0,i={unversionedId:"\u4e2d\u95f4\u4ef6/docker\u5e38\u7528\u547d\u4ee4",id:"\u4e2d\u95f4\u4ef6/docker\u5e38\u7528\u547d\u4ee4",title:"docker\u5e38\u7528\u547d\u4ee4",description:"\u4e0a\u4f20\u6587\u4ef6\u81f3docker",source:"@site/docs/\u4e2d\u95f4\u4ef6/docker\u5e38\u7528\u547d\u4ee4.md",sourceDirName:"\u4e2d\u95f4\u4ef6",slug:"/\u4e2d\u95f4\u4ef6/docker\u5e38\u7528\u547d\u4ee4",permalink:"/docs/\u4e2d\u95f4\u4ef6/docker\u5e38\u7528\u547d\u4ee4",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u4e2d\u95f4\u4ef6/docker\u5e38\u7528\u547d\u4ee4.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"docker",permalink:"/docs/tags/docker"}],version:"current",lastUpdatedBy:"Machu",lastUpdatedAt:1677836841,formattedLastUpdatedAt:"Mar 3, 2023",sidebarPosition:5,frontMatter:{slug:"docker\u5e38\u7528\u547d\u4ee4",title:"docker\u5e38\u7528\u547d\u4ee4",date:"2023-01-03T00:00:00.000Z",sidebar_position:5,authors:"heshibin",tags:["java","docker"]},sidebar:"tutorialSidebar",previous:{title:"IO\u8be6\u89e3",permalink:"/docs/java/network/io-detail"},next:{title:"Mysql\u6570\u636e\u5e93\u67b6\u6784\u6f14\u53d8\u5386\u53f2",permalink:"/docs/\u4e2d\u95f4\u4ef6/sharing-jdbc/1\u3001Mysql\u67b6\u6784\u6f14\u53d8\u5347\u7ea7+\u5206\u5e93\u5206\u8868\u4f18\u7f3a\u70b9/1.1 Mysql\u6570\u636e\u5e93\u67b6\u6784\u6f14\u53d8\u5386\u53f2"}},d={},s=[{value:"\u4e0a\u4f20\u6587\u4ef6\u81f3docker",id:"\u4e0a\u4f20\u6587\u4ef6\u81f3docker",level:4},{value:"\u4e0b\u8f7ddocker\u5185\u7684\u6587\u4ef6",id:"\u4e0b\u8f7ddocker\u5185\u7684\u6587\u4ef6",level:4},{value:"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?",id:"cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running",level:4}],l={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"\u4e0a\u4f20\u6587\u4ef6\u81f3docker"},"\u4e0a\u4f20\u6587\u4ef6\u81f3docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker cp /data/heshibin/ssp-main.jar bfededd10227:/opt/seczone/codesec/ssp/bin\n")),(0,o.kt)("h4",{id:"\u4e0b\u8f7ddocker\u5185\u7684\u6587\u4ef6"},"\u4e0b\u8f7ddocker\u5185\u7684\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker cp bfededd10227:/opt/seczone/codesec/ssp/bin/ssp-main.jar /data/heshibin/ssp-main-back.jar\n")),(0,o.kt)("h4",{id:"cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running"},"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\n\nsystemctl restart docker.service\n")))}p.isMDXComponent=!0}}]);