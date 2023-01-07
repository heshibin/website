"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5144],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7213:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={slug:"react\u76f8\u5173",title:"react\u76f8\u5173",date:new Date("2023-01-06T00:00:00.000Z"),sidebar_position:7,authors:"heshibin",tags:["react"]},c=void 0,i={unversionedId:"react\u76f8\u5173",id:"react\u76f8\u5173",isDocsHomePage:!1,title:"react\u76f8\u5173",description:"\u8df3\u8f6c\u9875\u9762\u6e05\u9664\u5b9a\u65f6\u5668",source:"@site/docs/react\u76f8\u5173.md",sourceDirName:".",slug:"/react\u76f8\u5173",permalink:"/docs/react\u76f8\u5173",editUrl:"https://github.com/heshibin/edit/main/docs/react\u76f8\u5173.md",tags:[{label:"react",permalink:"/docs/tags/react"}],version:"current",sidebarPosition:7,frontMatter:{slug:"react\u76f8\u5173",title:"react\u76f8\u5173",date:"2023-01-06T00:00:00.000Z",sidebar_position:7,authors:"heshibin",tags:["react"]},sidebar:"tutorialSidebar",previous:{title:"office\u5feb\u6377\u952e",permalink:"/docs/office\u5feb\u6377\u952e"},next:{title:"\u7f51\u5740\u6807\u7b7e",permalink:"/docs/\u7f51\u5740\u6807\u7b7e"}},l=[{value:"\u8df3\u8f6c\u9875\u9762\u6e05\u9664\u5b9a\u65f6\u5668",id:"\u8df3\u8f6c\u9875\u9762\u6e05\u9664\u5b9a\u65f6\u5668",children:[]}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8df3\u8f6c\u9875\u9762\u6e05\u9664\u5b9a\u65f6\u5668"},"\u8df3\u8f6c\u9875\u9762\u6e05\u9664\u5b9a\u65f6\u5668"),(0,a.kt)("p",null,"\u4f7f\u7528useEffect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const timer = useRef();\nuseEffect(()=> {\n  if(timer.current != null) {\n    clearInterval(timer.current);\n  }\n\n  // \u6e05\u9664\u5b9a\u65f6\u5668\n  return () => clearInterval(timer.current);\n}, []);\n")))}u.isMDXComponent=!0}}]);